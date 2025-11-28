<script setup>
import { computed, onMounted } from 'vue'
import katex from 'katex'
import 'katex/dist/katex.min.css'

const props = defineProps({
  formula: {
    type: String,
    required: true,
  },
  displayMode: {
    type: Boolean,
    default: false, // false for inline, true for block
  },
  throwOnError: {
    type: Boolean,
    default: false,
  },
})

const renderedMath = computed(() => {
  try {
    return katex.renderToString(props.formula, {
      displayMode: props.displayMode,
      throwOnError: props.throwOnError,
    })
  } catch (error) {
    console.error('KaTeX error:', error)
    return `<span class="error">${error.message}</span>`
  }
})
</script>

<template>
  <span v-html="renderedMath" class="math-expression"></span>
</template>

<style scoped>
.math-expression {
  /* Optional: Add any specific styling here if needed */
}
.error {
  color: red;
  font-weight: bold;
}
</style>
