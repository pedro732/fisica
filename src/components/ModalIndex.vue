<template>
  <div class="modal-index container mt-5">
    <h2 class="mb-4">Términos de Física</h2>

    <ul class="list-group">
      <li v-for="topic in topics" :key="topic.title" class="list-group-item d-flex justify-content-center">
        <button class="btn btn-primary w-50" @click="goToTopic(topic.title)">
          {{ topic.title }}
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import topics from '../assets/fisica.json';

export default {
  name: 'ModalIndex',
  data() {
    return {
      topics
    };
  },
  methods: {
    goToTopic(title) {
      console.log('Navegando a:', title);
      this.$router.push({ name: 'Topic', params: { title } });
    }
  }
};
</script>
