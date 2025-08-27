<script setup>
import PerformanceMonitor from "./components/PerformanceMonitor.vue";
// Router view will handle component rendering
</script>

<template>
  <div id="app">
    <router-view />
    <PerformanceMonitor />
  </div>
</template>

<style scoped>
#app {
  min-height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;
}
</style>
