<template>
  <div class="homepage">
    <!-- Header Section -->
    <Header @language-change="handleLanguageChange" />

    <!-- Hero Section -->
    <div class="hero-section">
      <h1 class="hero-title">{{ content[currentLanguage].heroTitle }}</h1>
      <p class="hero-description">
        {{ content[currentLanguage].heroDescription }}
      </p>
    </div>

    <!-- Tab Component -->
    <div class="tab-component-container">
      <TabComponent
        @tab-change="handleTabChange"
        :language-content="content[currentLanguage]"
        :current-language="currentLanguage"
      />
    </div>

    <!-- Projects Grid -->

    <!-- Footer -->
    <div class="footer">
      <p>@2025YINGZHANG</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Header from "./Header.vue";
import TabComponent from "./TabComponent.vue";

// Language state
const currentLanguage = ref("english");

// Language content
const content = {
  english: {
    heroTitle: "HI, I AM YING ZHANG",
    heroDescription:
      "B2B UX designer specializing in supply chain and HarmonyOS, experienced in toC design and leading end-to-end projects.",
    awardText: "YING WON ",
    awardHighlight: "reddot",
    awardDescription:
      "2025 Brands & Communication Design Award! Awaiting display on the Red Dot website.",
    uxWork: "UX Work",
    playground: "Playground",
    aboutMe: "About Me",
    // copyright: "@2025YINGZHANG",
  },
  chinese: {
    heroTitle: "你好，我是张颖",
    heroDescription:
      "B2B用户体验设计师，专注于供应链和鸿蒙系统，在toC设计和端到端项目领导方面经验丰富。",
    awardText: "张颖获得 ",
    awardHighlight: "红点",
    awardDescription: "2025品牌与传播设计奖！即将在红点官网展示",
    uxWork: "用户体验作品",
    playground: "实验项目",
    aboutMe: "关于我",
    copyright: "@2025张颖",
  },
};

// Handle language change
const handleLanguageChange = (language) => {
  currentLanguage.value = language;
};

// Handle tab change
const handleTabChange = (tab) => {
  console.log("Selected tab:", tab);
  // Add logic to update the content based on the selected tab if needed
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

// Image assets from Figma design - Commented out broken localhost URLs
// const img3 = "http://localhost:3845/assets/c38263ee16f5142fd50c8917380598603675466c.png";
// const img6 = "http://localhost:3845/assets/b711bd779ed636207b36fbbbbf49e9898b750515.png";
// const img7 = "http://localhost:3845/assets/b7840bb5d0e19006cc4938f62b8aa9185429157f.png";
// const img8 = "http://localhost:3845/assets/d0dbb2ee172e5baa437f120fe73b664f112c9b61.png";
// const img4 = "http://localhost:3845/assets/b7840bb5d0e19006cc4938f62b8aa9185429157f.png";
// const img5 = "http://localhost:3845/assets/86d46af2fd7147d42b2c164d95786a38f003e3d6.png";
</script>

<style scoped>
.homepage {
  background: #ffffff;
  position: relative;
  width: 100%;
  height: 100vh;
  font-family: "Poppins", sans-serif;
}

/* Tab Component */
.tab-component-container {
  margin-top: 56px; /* Exactly 56px below the hero description */
  width: 100%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  z-index: 10; /* Ensure it's above other content */
}

/* Hero Section */
.hero-section {
  margin-top: 166px; /* Top margin instead of absolute positioning */
  width: 483px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  z-index: 1; /* Lower z-index so tabs are clickable */
}

.hero-title {
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 48px;
  line-height: normal;
  color: #000000;
  text-align: center;
  margin-bottom: 16px;
}

.hero-description {
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: normal;
  color: #a6a6a6;
  text-align: center;
  width: 430px;
  margin: 0 auto;
}

/* Award Information */
.award-info {
  position: absolute;
  height: 71px;
  width: 1196px;
  top: calc(16.667% + 128.667px);
  left: calc(8.333% + 202px);
}

.award-image {
  position: absolute;
  aspect-ratio: 61/68;
  background-size: 132.79% 119.12%;
  background-position: 80% 46.15%;
  background-repeat: no-repeat;
  left: 1.34%;
  right: 93.56%;
  top: 0;
  width: 61px;
  height: 68px;
}

.award-content {
  position: absolute;
  inset: 56.34% 37.21% 14.09% 8.11%;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  line-height: normal;
  color: #030303;
  font-size: 14px;
  text-align: left;
}

.award-highlight {
  color: #d90513;
}

/* Projects Grid */
.projects-grid {
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 58px;
  align-items: flex-start;
  justify-content: flex-start;
  width: 1196px;
  top: calc(25% + 77px);
  left: calc(8.333% + 202px);
}

.project-row {
  display: flex;
  flex-direction: row;
  gap: 24px;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  position: relative;
  flex-shrink: 0;
}

.project-card {
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  flex-shrink: 0;
  width: 586px;
}

.project-card.disabled .project-image {
  opacity: 0.5;
}

.project-card.disabled .project-title {
  color: #d9d9d9;
}

.project-card.disabled .project-year {
  color: #d9d9d9;
}

.project-card.disabled .project-tags {
  color: #d9d9d9;
}

.project-image {
  height: 392px;
  width: 586px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  flex-shrink: 0;
}

.project-info {
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
}

.project-header {
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
}

.project-icon {
  overflow: hidden;
  position: relative;
  flex-shrink: 0;
  width: 24px;
  height: 24px;
}

.project-icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.project-title {
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 24px;
  line-height: normal;
  color: #000000;
  text-align: left;
  flex-grow: 1;
}

.project-year {
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: normal;
  color: #8e8e93;
  text-align: left;
  width: 100%;
}

.project-tags {
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: normal;
  color: #8e8e93;
  text-align: left;
  width: 100%;
  white-space: pre-wrap;
}

/* Footer */
.footer {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 160px 0 56px 0;
  text-align: left;
}

.footer p {
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: normal;
  color: #aeaeb2;
  margin: 0;
}

/* Responsive adjustments */
@media (max-width: 1200px) {
  .projects-grid,
  .award-info {
    width: 90%;
    left: 5%;
    transform: none;
  }

  .hero-section {
    width: 90%;
    left: 5%;
    transform: none;
  }

  .project-card {
    width: 100%;
  }

  .project-image {
    width: 100%;
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 32px;
  }

  .project-row {
    flex-direction: column;
  }

  .footer {
    padding: 120px 20px 40px 20px;
  }
}
</style>
