<template>
  <div class="container mt-5 d-flex justify-content-center">
    <div v-if="topic" class="card shadow-lg" style="max-width: 24rem; width: 100%">
      <img
        v-if="topic.image"
        :src="topic.image"
        class="card-img-top clickable-image"
        :alt="topic.title"
        style="height: 200px; object-fit: contain"
        @click="openLightbox(topic.image, topic.title)"
      />
      <div class="card-body text-center">
        <h5 class="card-title mb-3">{{ topic.title }}</h5>
        <!-- Use v-html to render the processed HTML with KaTeX -->
        <div
          ref="description"
          class="card-text text-muted"
          :style="formulaFit"
          v-html="renderedDescription"
        ></div>
        <div class="d-flex justify-content-between mt-4">
          <button class="btn btn-outline-secondary" @click="goBack">Regresar</button>
          <button class="btn btn-primary" @click="goToDetails">Conocer más</button>
        </div>
      </div>
    </div>

    <div v-else class="alert alert-warning">
      <p>
        No se encontró información para <strong>{{ decodedTitle }}</strong
        >.
      </p>
      <button class="btn btn-secondary mt-2" @click="goBack">Regresar</button>
    </div>

    <!-- Image Lightbox -->
    <ImageLightbox
      :show="lightbox.show"
      :src="lightbox.src"
      :alt="lightbox.alt"
      @close="closeLightbox"
    />
  </div>
</template>

<script>
import topics from '../assets/fisica.json'
import ImageLightbox from './ImageLightbox.vue'
import katex from 'katex'
import 'katex/dist/katex.min.css'

export default {
  name: 'CardComponent',
  components: {
    ImageLightbox,
  },
  props: ['title'],
  data() {
    return {
      topic: null,
      lightbox: {
        show: false,
        src: '',
        alt: '',
      },
      /**
       * Font size (in rem) used to draw the display formulas.  It is chosen
       * automatically in `fitFormulas()` so that no expression is wider than
       * the card.
       */
      fitFontSize: 1.21,
      resizeObserver: null,
    }
  },
  computed: {
    decodedTitle() {
      return decodeURIComponent(this.title)
    },
    /**
     * Reduce the font size of the display formulas ($$...$$) until they fit the
     * width of the card.  KaTeX writes a 1em font-size into .katex-display, so
     * setting `--formula-font-size` scales a formula without touching the text.
     */
    formulaFit() {
      return { '--formula-font-size': `${this.fitFontSize}rem` }
    },
    renderedDescription() {
      if (!this.topic || !this.topic.description) return ''

      let text = this.topic.description

      // Escape HTML to prevent XSS (basic) - though we trust local JSON
      // text = text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

      // Replace display math $$...$$
      text = text.replace(/\$\$([^$]+)\$\$/g, (match, tex) => {
        try {
          return katex.renderToString(tex, { displayMode: true, throwOnError: false })
        } catch (e) {
          return match
        }
      })

      // Replace inline math $...$
      text = text.replace(/\$([^$]+)\$/g, (match, tex) => {
        try {
          return katex.renderToString(tex, { displayMode: false, throwOnError: false })
        } catch (e) {
          return match
        }
      })

      // Replace newlines with <br>
      text = text.replace(/\\n/g, '<br>').replace(/\n/g, '<br>')

      // Replace markdown headers (##) with HTML headings
      text = text.replace(
        /<br>## ([^<]+)<br>/g,
        '<br><h6 class="mt-3 mb-2 fw-bold text-dark">$1</h6>',
      )

      return text
    },
  },
  created() {
    this.loadTopic()
  },
  async mounted() {
    await this.fitFormulas()
  },
  beforeUnmount() {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect()
      this.resizeObserver = null
    }
  },
  methods: {
    loadTopic() {
      const cleanTitle = this.decodedTitle.toLowerCase()
      this.topic = topics.find((t) => t.title.toLowerCase() === cleanTitle) || null
    },
    /**
     * Make every display formula ($$...$$) fit the width of the card.
     *
     * KaTeX gives each .katex-display a `font-size: 1em`, so a formula scales
     * linearly with that font size.  A hidden copy of each formula is measured
     * at the default size and the largest size that still fits the available
     * width is applied to all of them at once.  The size never drops below
     * `minFontSize`; a formula that is still too wide then stays inside the card
     * and can be scrolled horizontally (see `updateScrollHints`).
     */
    async fitFormulas() {
      await this.$nextTick()
      const container = this.$refs.description
      if (!container) return

      const measures = []
      for (const display of container.querySelectorAll('.katex-display')) {
        const base = display.querySelector('.katex')
        if (!base) continue
        const clone = base.cloneNode(true)
        const holder = document.createElement('div')
        holder.setAttribute('aria-hidden', 'true')
        holder.style.cssText =
          'position:absolute;left:-9999px;top:0;visibility:hidden;white-space:nowrap;' +
          'font-size:1rem;line-height:normal;'
        holder.appendChild(clone)
        document.body.appendChild(holder)
        measures.push({ display, width: clone.getBoundingClientRect().width })
        document.body.removeChild(holder)
      }
      if (!measures.length) return

      const available = container.clientWidth - 2 // safety margin
      const removable = measures.reduce(
        (sum, m) => sum + Math.max(0, m.display.getBoundingClientRect().width - m.width),
        0,
      )
      const needed = Math.max(...measures.map((m) => m.width)) + removable
      const minSize = 0.85 // ~13.6 px: keep the formulas legible

      const fit = Math.min(1.21, Math.max(minSize, (1.21 * available) / needed))
      // Round to 0.01rem so tiny browser differences do not cause extra passes.
      this.fitFontSize = Math.round(fit * 100) / 100

      await this.$nextTick()
      this.updateScrollHints()

      // Keep the fit correct when the card is resized (rotation, dev tools...).
      if (typeof ResizeObserver !== 'undefined') {
        this.resizeObserver = new ResizeObserver(() => this.updateScrollHints())
        this.resizeObserver.observe(container)
      }
    },
    /** Fade the edge of a formula that still overflows horizontally. */
    updateScrollHints() {
      const container = this.$refs.description
      if (!container) return
      for (const display of container.querySelectorAll('.katex-display')) {
        display.classList.add('has-scroll-hint')
        this.setScrollHint(display)
        display.addEventListener('scroll', this.onFormulaScroll, { passive: true })
      }
    },
    onFormulaScroll(event) {
      this.setScrollHint(event.currentTarget)
    },
    setScrollHint(el) {
      const rest = el.scrollWidth - el.clientWidth
      const fade = 'rgba(0, 0, 0, 0.18)'
      el.style.setProperty('--hint-left', el.scrollLeft > 1 ? fade : 'transparent')
      el.style.setProperty('--hint-right', el.scrollLeft < rest - 1 ? fade : 'transparent')
    },
    goBack() {
      this.$router.push({ name: 'Home' })
    },
    goToDetails() {
      this.$router.push({
        name: 'TopicDetail',
        params: { title: this.topic.title },
      })
    },
    openLightbox(src, alt) {
      this.lightbox.src = src
      this.lightbox.alt = alt
      this.lightbox.show = true
    },
    closeLightbox() {
      this.lightbox.show = false
    },
  },
}
</script>

<style scoped>
.clickable-image {
  cursor: pointer;
  transition: opacity 0.2s ease;
}

.clickable-image:hover {
  opacity: 0.85;
}

/* Formula rendering inside the card.
   The formulas come from v-html, so they need :deep() to be styled here. */
.card-text {
  overflow-wrap: break-word;
}
.card-text :deep(.katex-display) {
  /* Size chosen by fitFormulas(); KaTeX draws display maths at 1em. */
  font-size: var(--formula-font-size, 1.21rem);
  margin: 0.75rem 0;
  /* Fallback when even the smallest size does not fit (very narrow screens):
     the formula stays inside the card and can be scrolled horizontally. */
  max-width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  padding-bottom: 2px;
}
.card-text :deep(.katex-display > .katex) {
  white-space: normal;
}
/* Fade both edges of a formula that is wider than the card, so it is obvious
   that it can be scrolled.  The gradients are updated from updateScrollHints(). */
.card-text :deep(.katex-display.has-scroll-hint) {
  background-image: linear-gradient(to right, var(--hint-left, transparent), transparent 24px),
    linear-gradient(to left, var(--hint-right, transparent), transparent 24px);
  background-position: left center, right center;
  background-repeat: no-repeat;
  background-size: 24px 70%, 24px 70%;
  background-attachment: local, local;
}
</style>
