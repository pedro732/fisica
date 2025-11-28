<template>
  <div class="container mt-5 d-flex justify-content-center">
    <div v-if="topic" class="card shadow-lg" style="width: 24rem">
      <img
        v-if="topic.image"
        :src="topic.image"
        class="card-img-top"
        :alt="topic.title"
        style="height: 200px; object-fit: contain"
      />
      <div class="card-body text-center">
        <h5 class="card-title mb-3">{{ topic.title }}</h5>
        <!-- Use v-html to render the processed HTML with KaTeX -->
        <div class="card-text text-muted" v-html="renderedDescription"></div>

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
  </div>
</template>

<script>
import topics from '../assets/fisica.json'
import katex from 'katex'
import 'katex/dist/katex.min.css'

export default {
  name: 'CardComponent',
  props: ['title'],
  data() {
    return {
      topic: null,
    }
  },
  computed: {
    decodedTitle() {
      return decodeURIComponent(this.title)
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

      return text
    },
  },
  created() {
    this.loadTopic()
  },
  methods: {
    loadTopic() {
      const cleanTitle = this.decodedTitle.toLowerCase()
      this.topic = topics.find((t) => t.title.toLowerCase() === cleanTitle) || null
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
  },
}
</script>
