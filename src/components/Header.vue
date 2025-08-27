<template>
  <header class="header">
    <div class="header-container">
      <!-- Left side: Logo and Brand -->
      <div class="header-left">
        <div class="logo-container" @click="goToHomepage">
          <img :src="yingLogo" alt="Ying" class="ying-logo" />
        </div>
        <div class="brand-text" @click="goToHomepage">
          <h1>YZ</h1>
        </div>
      </div>

      <!-- Right side: Social Icons and Language Toggle -->
      <div class="header-right">
        <!-- Social Icons -->
        <div class="social-icons">
          <Resume />
          <LinkedIn />
          <GitHub />
        </div>

        <!-- Language Toggle -->
        <div class="language-toggle-container">
          <LanguageToggle @language-change="handleLanguageChange" />
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import Resume from "./Resume.vue";
import LinkedIn from "./LinkedIn.vue";
import GitHub from "./GitHub.vue";
import LanguageToggle from "./LanguageToggle.vue";
import yingLogo from "../assets/ying.svg";

// Emit language change to parent component
const emit = defineEmits(["languageChange"]);

const handleLanguageChange = (language) => {
  emit("languageChange", language);
};

const goToHomepage = () => {
  window.location.href = "/";
};
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  z-index: 1000;
  padding: 56px 2rem 1rem 2rem;
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

/* Left side: Logo and Brand */
.header-left {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.logo-container {
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  cursor: pointer;
  transition: opacity 0.3s ease;
}

.logo-container:hover {
  opacity: 0.7;
}

.ying-logo {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.brand-text h1 {
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 24px;
  color: #000000;
  margin: 0;
  line-height: normal;
  white-space: nowrap;
  cursor: pointer;
  transition: opacity 0.3s ease;
}

.brand-text:hover h1 {
  opacity: 0.7;
}

/* Right side: Social Icons and Language Toggle */
.header-right {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.social-icons {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.language-toggle-container {
  width: 52px;
  height: 24px;
  flex-shrink: 0;
}

/* Responsive Design */
@media (max-width: 768px) {
  .header {
    padding: 1rem;
  }

  .header-container {
    flex-direction: column;
    gap: 1rem;
  }

  .header-right {
    gap: 1rem;
  }

  .social-icons {
    gap: 0.5rem;
  }
}
</style>
