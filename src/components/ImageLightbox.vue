<template>
  <Transition name="lightbox">
    <div v-if="show" class="lightbox-backdrop" @click="handleBackdropClick">
      <button class="lightbox-close" @click="close" aria-label="Cerrar">
        <i class="bi bi-x-lg"></i>
      </button>
      <img :src="src" :alt="alt" class="lightbox-image" @click.stop />
    </div>
  </Transition>
</template>

<script>
export default {
  name: 'ImageLightbox',
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      default: '',
    },
  },
  emits: ['close'],
  watch: {
    show(newVal) {
      if (newVal) {
        // Prevenir scroll del body cuando el modal está abierto
        document.body.style.overflow = 'hidden'
        // Agregar listener para tecla ESC
        document.addEventListener('keydown', this.handleEscape)
      } else {
        // Restaurar scroll del body
        document.body.style.overflow = ''
        // Remover listener
        document.removeEventListener('keydown', this.handleEscape)
      }
    },
  },
  beforeUnmount() {
    // Limpiar en caso de que el componente se destruya con el modal abierto
    document.body.style.overflow = ''
    document.removeEventListener('keydown', this.handleEscape)
  },
  methods: {
    close() {
      this.$emit('close')
    },
    handleBackdropClick(e) {
      // Cerrar solo si se hace clic en el backdrop, no en la imagen
      if (e.target.classList.contains('lightbox-backdrop')) {
        this.close()
      }
    },
    handleEscape(e) {
      if (e.key === 'Escape') {
        this.close()
      }
    },
  },
}
</script>

<style scoped>
.lightbox-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.92);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  cursor: zoom-out;
  padding: 20px;
}

.lightbox-image {
  max-width: 90vw;
  max-height: 90vh;
  width: auto;
  height: auto;
  object-fit: contain;
  cursor: default;
  border-radius: 4px;
  box-shadow: 0 10px 50px rgba(0, 0, 0, 0.5);
}

.lightbox-close {
  position: absolute;
  top: 20px;
  right: 20px;
  background: white;
  border: none;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: #333;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  transition: all 0.2s ease;
  z-index: 10000;
}

.lightbox-close:hover {
  background: #f0f0f0;
  transform: scale(1.1);
}

.lightbox-close:active {
  transform: scale(0.95);
}

/* Animaciones de entrada/salida */
.lightbox-enter-active,
.lightbox-leave-active {
  transition: opacity 0.3s ease;
}

.lightbox-enter-active .lightbox-image,
.lightbox-leave-active .lightbox-image {
  transition: transform 0.3s ease;
}

.lightbox-enter-from,
.lightbox-leave-to {
  opacity: 0;
}

.lightbox-enter-from .lightbox-image {
  transform: scale(0.8);
}

.lightbox-leave-to .lightbox-image {
  transform: scale(0.8);
}

/* Responsive para móviles */
@media (max-width: 576px) {
  .lightbox-image {
    max-width: 95vw;
    max-height: 85vh;
  }

  .lightbox-close {
    top: 10px;
    right: 10px;
    width: 40px;
    height: 40px;
    font-size: 1.3rem;
  }

  .lightbox-backdrop {
    padding: 10px;
  }
}
</style>
