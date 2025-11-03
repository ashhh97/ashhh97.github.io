<script setup>
import PerformanceMonitor from "./components/PerformanceMonitor.vue";
import LoadingOverlay from "./components/LoadingOverlay.vue";
import loadingState from "./utils/loadingState.js";
// Router view will handle component rendering
</script>

<template>
  <div id="app">
    <LoadingOverlay
      :is-active="loadingState.active"
      :progress="loadingState.progress"
    />
    <div :class="{ 'content-hidden': loadingState.active }">
      <router-view />
      <PerformanceMonitor />
    </div>
  </div>
</template>

<style scoped>
#app {
  min-height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;
}

.content-hidden {
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
}
</style>
