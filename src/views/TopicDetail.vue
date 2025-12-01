<template>
  <div class="container mt-5">
    <div v-if="topic" class="topic-detail">
      <div class="row">
        <div class="col-md-8 offset-md-2">
          <div class="card shadow-lg">
            <img
              v-if="topic.image"
              :src="topic.image"
              class="card-img-top topic-image"
              :alt="topic.title"
            />
            <div class="card-body">
              <h1 class="card-title text-center mb-4">{{ topic.title }}</h1>

              <div class="content">
                <!-- We use a dynamic component or v-html, but since we have Math,
                     we need to process the content to render MathExpression components
                     OR just use v-html and let KaTeX auto-render if we had the auto-render extension.

                     However, since we have a MathExpression component, we might want to use it.
                     But for rich text with embedded math, parsing is complex.

                     SIMPLE APPROACH:
                     Use v-html and then run a method to render KaTeX on the element after mount.
                -->
                <div ref="contentContainer" v-html="topic.content"></div>
              </div>

              <div class="text-center mt-4">
                <button
                  v-if="topic.title === 'Velocidad Instantánea' || topic.title === 'Vectores'"
                  class="btn btn-success me-2"
                  @click="goToExercises"
                >
                  <i class="bi bi-pencil-square"></i> Ejercicios
                </button>
                <button class="btn btn-secondary" @click="goBack">
                  <i class="bi bi-arrow-left"></i> Regresar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="alert alert-danger text-center">
      <h3>Tema no encontrado</h3>
      <button class="btn btn-primary mt-3" @click="goBack">Volver al Inicio</button>
    </div>
  </div>
</template>

<script>
import { getTopicDetails } from '../assets/topicDetails.js'
import katex from 'katex'
import 'katex/dist/katex.min.css'

export default {
  name: 'TopicDetail',
  props: ['title'],
  data() {
    return {
      topic: null,
    }
  },
  created() {
    this.loadTopic()
  },
  mounted() {
    this.renderMath()
  },
  updated() {
    this.renderMath()
  },
  methods: {
    loadTopic() {
      // Decode title just in case, though Vue router usually handles params well
      this.topic = getTopicDetails(this.title)
    },
    goBack() {
      this.$router.go(-1)
    },
    goToExercises() {
      this.$router.push({
        name: 'SolvedExercises',
        params: { title: this.title },
      })
    },
    renderMath() {
      if (this.$refs.contentContainer) {
        // Simple auto-render logic looking for delimiters
        // Note: This is a basic implementation. For production, consider using katex auto-render extension.
        // Here we will manually traverse or just assume the content is safe HTML with delimiters.
        // Actually, let's just use renderMathInElement if available or manual replacement.

        // Since we didn't install auto-render, let's try a manual approach or
        // rely on the fact that we put MathExpression in the content?
        // No, we put strings like $v_{prom}$.

        // Let's implement a simple render function for the container
        // OR better: Import renderMathInElement from katex/contrib/auto-render if available
        // But standard katex doesn't bundle it by default in the main import usually.

        // Alternative: We can parse the HTML string in `topicDetails.js` to use <MathExpression>
        // but that requires runtime template compilation which might not be available in all builds.

        // Best approach for now:
        // Use a simple regex replacer for $...$ to katex.renderToString

        const container = this.$refs.contentContainer
        if (!container) return

        // We need to be careful not to re-render already rendered math
        // This is a naive implementation
        // Replace display math $$...$$
        let html = this.topic.content.replace(/\$\$([^$]+)\$\$/g, (match, tex) => {
          try {
            return katex.renderToString(tex, { displayMode: true, throwOnError: false })
          } catch (e) {
            return match
          }
        })

        // Replace inline math $...$
        html = html.replace(/\$([^$]+)\$/g, (match, tex) => {
          try {
            return katex.renderToString(tex, { displayMode: false, throwOnError: false })
          } catch (e) {
            return match
          }
        })

        // Only update if changed to avoid loops (though v-html does this)
        if (container.innerHTML !== html) {
          container.innerHTML = html
        }
      }
    },
  },
}
</script>

<style scoped>
.topic-image {
  max-height: 400px;
  object-fit: contain;
}
.content {
  font-size: 1.1rem;
  line-height: 1.6;
  text-align: justify;
}
</style>
