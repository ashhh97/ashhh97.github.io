<template>
  <div class="lazy-image-container" :class="{ loaded: isLoaded }">
    <img
      v-if="isLoaded"
      :src="src"
      :alt="alt"
      :class="imageClass"
      @load="onImageLoad"
      @error="onImageError"
    />
    <div v-else class="image-placeholder" :class="imageClass">
      <div class="loading-spinner"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    default: "",
  },
  imageClass: {
    type: String,
    default: "",
  },
  threshold: {
    type: Number,
    default: 0.1,
  },
});

const isLoaded = ref(false);
const imageRef = ref(null);

const onImageLoad = () => {
  isLoaded.value = true;
};

const onImageError = () => {
  console.error("Failed to load image:", props.src);
  isLoaded.value = true; // Show placeholder or fallback
};

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isLoaded.value = true;
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: props.threshold,
      rootMargin: "50px",
    }
  );

  if (imageRef.value) {
    observer.observe(imageRef.value);
  }
});
</script>

<style scoped>
.lazy-image-container {
  position: relative;
  overflow: hidden;
}

.image-placeholder {
  background: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 200px;
}

.loading-spinner {
  width: 30px;
  height: 30px;
  border: 3px solid #e0e0e0;
  border-top: 3px solid #007bff;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

img {
  width: 100%;
  height: auto;
  transition: opacity 0.3s ease;
}

.lazy-image-container.loaded img {
  opacity: 1;
}
</style>
