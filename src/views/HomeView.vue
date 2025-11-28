<template>
  <div class="container mt-4">
    <ModalIndex />
  </div>
</template>

<script>
import ModalIndex from '@/components/ModalIndex.vue'
import MathExpression from '@/components/MathExpression.vue'

export default {
  name: 'HomeView',
  components: {
    ModalIndex,
    MathExpression,
  },
}
</script>
