<template>
  <div v-if="showMonitor" class="performance-monitor">
    <div class="monitor-header">
      <h3>🚀 Performance Monitor</h3>
      <button @click="showMonitor = false" class="close-btn">×</button>
    </div>

    <div class="metrics">
      <div class="metric">
        <span class="label">DOM Ready:</span>
        <span class="value" :class="getTimeClass(domReadyTime)">
          {{ formatTime(domReadyTime) }}
        </span>
      </div>

      <div class="metric">
        <span class="label">Load Complete:</span>
        <span class="value" :class="getTimeClass(loadTime)">
          {{ formatTime(loadTime) }}
        </span>
      </div>

      <div class="metric">
        <span class="label">First Paint:</span>
        <span class="value" :class="getTimeClass(firstPaintTime)">
          {{ formatTime(firstPaintTime) }}
        </span>
      </div>

      <div class="metric">
        <span class="label">Resources:</span>
        <span class="value">{{ resourceCount }}</span>
      </div>

      <div class="metric">
        <span class="label">Total Size:</span>
        <span class="value">{{ formatBytes(totalSize) }}</span>
      </div>
    </div>

    <div class="status" :class="getStatusClass()">
      {{ getStatusMessage() }}
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const showMonitor = ref(false);
const domReadyTime = ref(0);
const loadTime = ref(0);
const firstPaintTime = ref(0);
const resourceCount = ref(0);
const totalSize = ref(0);

const getTimeClass = (time) => {
  if (time < 1000) return "excellent";
  if (time < 3000) return "good";
  if (time < 5000) return "warning";
  return "poor";
};

const formatTime = (time) => {
  if (time < 1000) return `${time}ms`;
  return `${(time / 1000).toFixed(1)}s`;
};

const formatBytes = (bytes) => {
  if (bytes === 0) return "0 B";
  const k = 1024;
  const sizes = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + " " + sizes[i];
};

const getStatusClass = () => {
  const maxTime = Math.max(domReadyTime.value, loadTime.value);
  if (maxTime < 1000) return "excellent";
  if (maxTime < 3000) return "good";
  if (maxTime < 5000) return "warning";
  return "poor";
};

const getStatusMessage = () => {
  const maxTime = Math.max(domReadyTime.value, loadTime.value);
  if (maxTime < 1000) return "🚀 Excellent performance!";
  if (maxTime < 3000) return "✅ Good performance";
  if (maxTime < 5000) return "⚠️ Performance needs improvement";
  return "❌ Poor performance - optimization required";
};

const measurePerformance = () => {
  // DOM Ready time
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      domReadyTime.value = performance.now();
    });
  } else {
    domReadyTime.value = performance.now();
  }

  // Load complete time
  if (document.readyState === "complete") {
    loadTime.value = performance.now();
  } else {
    window.addEventListener("load", () => {
      loadTime.value = performance.now();
    });
  }

  // First Paint time
  if ("performance" in window) {
    const paintEntries = performance.getEntriesByType("paint");
    if (paintEntries.length > 0) {
      firstPaintTime.value = paintEntries[0].startTime;
    }
  }

  // Resource count and size
  const resources = performance.getEntriesByType("resource");
  resourceCount.value = resources.length;
  totalSize.value = resources.reduce((total, resource) => {
    return total + (resource.transferSize || 0);
  }, 0);
};

onMounted(() => {
  measurePerformance();

  // Update metrics periodically
  setInterval(() => {
    measurePerformance();
  }, 1000);
});
</script>

<style scoped>
.performance-monitor {
  position: fixed;
  top: 20px;
  right: 20px;
  background: rgba(0, 0, 0, 0.9);
  color: white;
  padding: 16px;
  border-radius: 8px;
  font-family: monospace;
  font-size: 12px;
  z-index: 9999;
  min-width: 250px;
  backdrop-filter: blur(10px);
}

.monitor-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.monitor-header h3 {
  margin: 0;
  font-size: 14px;
}

.close-btn {
  background: none;
  border: none;
  color: white;
  font-size: 18px;
  cursor: pointer;
  padding: 0;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.metrics {
  margin-bottom: 12px;
}

.metric {
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;
}

.label {
  color: #ccc;
}

.value {
  font-weight: bold;
}

.value.excellent {
  color: #4ade80;
}

.value.good {
  color: #22c55e;
}

.value.warning {
  color: #f59e0b;
}

.value.poor {
  color: #ef4444;
}

.status {
  padding: 8px;
  border-radius: 4px;
  text-align: center;
  font-weight: bold;
}

.status.excellent {
  background: rgba(74, 222, 128, 0.2);
  color: #4ade80;
}

.status.good {
  background: rgba(34, 197, 94, 0.2);
  color: #22c55e;
}

.status.warning {
  background: rgba(245, 158, 11, 0.2);
  color: #f59e0b;
}

.status.poor {
  background: rgba(239, 68, 68, 0.2);
  color: #ef4444;
}
</style>
