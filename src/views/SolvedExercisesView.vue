<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-8 offset-md-2">
        <h1 class="text-center mb-4">Ejercicios Resueltos: {{ title }}</h1>

        <div v-if="exercises.length > 0">
          <div v-for="(exercise, index) in exercises" :key="index" class="card shadow-lg mb-4">
            <div class="card-header bg-primary text-white">
              <h5 class="mb-0">Ejercicio {{ index + 1 }}</h5>
            </div>
            <div class="card-body">
              <h6 class="card-subtitle mb-2 text-muted">Enunciado</h6>
              <div
                class="exercise-content mb-4"
                v-html="renderMath(exercise.enunciado)"
                @click="handleImageClick"
              ></div>

              <hr />

              <h6 class="card-subtitle mb-2 text-muted">Solución</h6>
              <div
                class="exercise-content"
                v-html="renderMath(exercise.solucion)"
                @click="handleImageClick"
              ></div>
            </div>
          </div>
        </div>

        <div v-else class="alert alert-info text-center">
          No hay ejercicios disponibles para este tema.
        </div>

        <div class="text-center mt-4">
          <button class="btn btn-secondary" @click="goBack">
            <i class="bi bi-arrow-left"></i> Regresar
          </button>
        </div>
      </div>
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
import { getExercises } from '../assets/exercisesData.js'
import ImageLightbox from '../components/ImageLightbox.vue'
import katex from 'katex'
import 'katex/dist/katex.min.css'

export default {
  name: 'SolvedExercisesView',
  components: {
    ImageLightbox,
  },
  props: ['title'],
  data() {
    return {
      exercises: [],
      lightbox: {
        show: false,
        src: '',
        alt: '',
      },
    }
  },
  created() {
    this.loadExercises()
  },
  methods: {
    loadExercises() {
      this.exercises = getExercises(this.title)
    },
    goBack() {
      this.$router.go(-1)
    },
    handleImageClick(event) {
      // Detectar si el clic fue en una imagen
      if (event.target.tagName === 'IMG') {
        this.lightbox.src = event.target.src
        this.lightbox.alt = event.target.alt || 'Imagen ampliada'
        this.lightbox.show = true
      }
    },
    closeLightbox() {
      this.lightbox.show = false
    },
    renderMath(content) {
      if (!content) return ''

      // Replace display math $$...$$ (with multiline support)
      let html = content.replace(/\$\$([\s\S]+?)\$\$/g, (match, tex) => {
        try {
          return katex.renderToString(tex.trim(), {
            displayMode: true,
            throwOnError: false,
            trust: true, // Allow \text{} and other commands
          })
        } catch (e) {
          console.error('KaTeX display math error:', e)
          return match
        }
      })

      // Replace inline math $...$ (avoid matching $$)
      html = html.replace(/\$([^$\n]+?)\$/g, (match, tex) => {
        try {
          return katex.renderToString(tex.trim(), {
            displayMode: false,
            throwOnError: false,
            trust: true,
          })
        } catch (e) {
          console.error('KaTeX inline math error:', e)
          return match
        }
      })

      return html
    },
  },
}
</script>

<style scoped>
.exercise-content {
  font-size: 1.1rem;
  line-height: 1.6;
  text-align: justify;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

/* Ensure KaTeX display math doesn't cause horizontal scroll */
.exercise-content :deep(.katex-display) {
  overflow-x: auto;
  overflow-y: hidden;
  padding: 0.5rem 0;
}

/* Make sure images in exercises are responsive */
.exercise-content :deep(img) {
  max-width: 100%;
  height: auto;
  cursor: pointer;
  transition: opacity 0.2s ease;
}

.exercise-content :deep(img):hover {
  opacity: 0.85;
}

/* Responsive font size for mobile */
@media (max-width: 576px) {
  .exercise-content {
    font-size: 1rem;
  }
}
</style>
