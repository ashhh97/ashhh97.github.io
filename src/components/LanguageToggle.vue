<template>
  <div
    class="language-toggle-component"
    data-name="LanguageToggle"
    id="node-526_4612"
  >
    <div
      :class="[
        'toggle-container',
        { 'chinese-mode': currentLanguage === 'chinese' },
      ]"
      @click="toggleLanguage"
      :data-name="`english=${
        currentLanguage === 'english' ? 'English' : 'Chinese'
      }`"
      :id="currentLanguage === 'english' ? 'node-526_4611' : 'node-526_4613'"
    >
      <div class="overflow-clip">
        <!-- Knob -->
        <div
          class="knob"
          :class="{ 'knob-chinese': currentLanguage === 'chinese' }"
          :data-name="'Knob'"
          :id="
            currentLanguage === 'english' ? 'node-526_4608' : 'node-526_4617'
          "
        >
          <!-- English mode: #F6F7FB knob, Chinese mode: #2C2C2C knob -->
        </div>

        <!-- Language Text -->
        <div
          class="language-text"
          :class="{ 'chinese-text': currentLanguage === 'chinese' }"
          :id="
            currentLanguage === 'english' ? 'node-526_4609' : 'node-526_4618'
          "
        >
          <p class="text-content">
            {{ currentLanguage === "english" ? "EN" : "中" }}
          </p>
        </div>
      </div>

      <!-- Border overlay -->
      <div aria-hidden="true" class="border-overlay" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

// Emit events - define this first
const emit = defineEmits(["languageChange"]);

// Language state
const currentLanguage = ref("english");

// Toggle language function
const toggleLanguage = () => {
  currentLanguage.value =
    currentLanguage.value === "english" ? "chinese" : "english";

  // Emit event for parent components to handle language change
  emit("languageChange", currentLanguage.value);

  // Store in localStorage for persistence
  localStorage.setItem("portfolioLanguage", currentLanguage.value);

  // You can add more language change logic here
  console.log(`Language changed to: ${currentLanguage.value}`);
};

// Initialize language from localStorage on mount
onMounted(() => {
  const savedLanguage = localStorage.getItem("portfolioLanguage");
  if (
    savedLanguage &&
    (savedLanguage === "english" || savedLanguage === "chinese")
  ) {
    currentLanguage.value = savedLanguage;
  }
});
</script>

<style scoped>
.language-toggle-component {
  width: 100%;
  height: 100%;
}

.toggle-container {
  position: relative;
  border-radius: 9999px;
  width: 100%;
  height: 100%;
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: #2c2c2c;
  overflow: hidden;
  outline: none; /* Remove focus outline */
}

.toggle-container:focus {
  outline: none; /* Remove focus outline */
}

.toggle-container.chinese-mode {
  background-color: transparent;
}

.overflow-clip {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.knob {
  position: absolute;
  left: 29px;
  top: 50%;
  transform: translateY(-50%);
  width: 18px;
  height: 18px;
  transition: left 0.3s ease;
  background-color: #f6f7fb; /* English mode knob color */
  border-radius: 50%;
}

.knob-chinese {
  left: 5px;
  background-color: #2c2c2c; /* Chinese mode knob color */
}

.language-text {
  position: absolute;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  line-height: 0;
  left: 9px;
  top: 3px;
  font-style: normal;
  color: #ffffff;
  font-size: 12px;
  text-align: left;
  white-space: nowrap;
  transition: all 0.3s ease;
}

.chinese-text {
  font-family: "PingFang SC", "Microsoft YaHei", sans-serif;
  color: #000000;
  left: 30px;
}

.text-content {
  display: block;
  line-height: 1.4;
  white-space: pre;
}

.border-overlay {
  position: absolute;
  border: 1px solid #2c2c2c;
  border-radius: 9999px;
  inset: 0;
  pointer-events: none;
}

/* Hover effects */
.toggle-container:hover {
  transform: scale(1.05);
}

.toggle-container:hover .knob {
  filter: brightness(1.1);
}
</style>
