<script setup>
import { computed, ref, onMounted, onBeforeUnmount, watch } from "vue";

const props = defineProps({
  progress: {
    type: Number,
    default: 0,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
});

// 在 loading 期间锁定 body 滚动，防止布局跳变
let savedScrollY = 0;

watch(
  () => props.isActive,
  (newVal) => {
    if (newVal) {
      // 保存当前滚动位置并锁定滚动
      savedScrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${savedScrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";
    } else {
      // 恢复滚动
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
      // 恢复滚动位置
      window.scrollTo(0, savedScrollY);
    }
  }
);

const barWidth = computed(
  () => `${Math.min(Math.max(props.progress, 0), 100)}%`
);
const funFacts = [
  "I sing and dance, and sometimes play guitar by myself.",
  "I love drawing — from sketching to complete illustrations.",
  "Travel energizes me; sunset by the sea is my favorite.",
  "I game occasionally and enjoy tight team cooperation.",
  "One of my short videos reached 250k views.",
];

const currentIndex = ref(0);
let ticker = null;

onMounted(() => {
  ticker = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % funFacts.length;
  }, 1000);
});

onBeforeUnmount(() => {
  if (ticker) clearInterval(ticker);
});
</script>

<template>
  <Transition name="fade">
    <div
      v-if="isActive"
      class="loading-overlay"
      aria-live="polite"
      aria-busy="true"
    >
      <div class="loading-card">
        <div class="loading-text">Loading...</div>
        <div class="progress">
          <div class="progress-fill" :style="{ width: barWidth }" />
        </div>
        <div class="fun-facts">
          <span class="facts-title">YING's fun facts:</span>
          <span class="fact-item">{{ funFacts[currentIndex] }}</span>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  /* 确保 overlay 位置不受页面内容影响 */
  transform: translateZ(0);
  will-change: opacity;
}

.fade-enter-active {
  transition: opacity 300ms ease-in;
}

.fade-leave-active {
  transition: opacity 400ms ease-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.loading-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 24px 20px;
}

.loading-text {
  font-size: 18px;
  color: #222;
  letter-spacing: 0.3px;
}

.progress {
  width: 300px;
  max-width: 80vw;
  height: 16px;
  border: 3px solid #333;
  border-radius: 10px;
  background: #ffffff;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: #333333;
  width: 0%;
  transition: width 300ms ease-out;
  will-change: width;
}

.fun-facts {
  margin-top: 6px;
  display: flex;
  align-items: center;
  gap: 8px;
  color: #444;
}

.facts-title {
  font-size: 14px;
  font-weight: 700;
  white-space: nowrap;
  color: #333;
}

.fact-item {
  font-size: 13px;
  line-height: 1.6;
  color: #333;
  min-height: 20px;
  animation: fadeIn 300ms ease-in;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 480px) {
  .fun-facts {
    flex-wrap: wrap;
    justify-content: center;
    gap: 4px;
  }
  .facts-title {
    font-size: 13px;
  }
  .fact-item {
    font-size: 12px;
    text-align: center;
  }
}
</style>
