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
              <div class="exercise-content mb-4" v-html="renderMath(exercise.enunciado)"></div>

              <hr />

              <h6 class="card-subtitle mb-2 text-muted">Solución</h6>
              <div class="exercise-content" v-html="renderMath(exercise.solucion)"></div>
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
  </div>
</template>

<script>
import { getExercises } from '../assets/exercisesData.js'
import katex from 'katex'
import 'katex/dist/katex.min.css'

export default {
  name: 'SolvedExercisesView',
  props: ['title'],
  data() {
    return {
      exercises: [],
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
    renderMath(content) {
      if (!content) return ''

      // Replace display math $$...$$
      let html = content.replace(/\$\$([^$]+)\$\$/g, (match, tex) => {
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
}
</style>
