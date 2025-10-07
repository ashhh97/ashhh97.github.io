<template>
  <div class="videocollection-page">
    <!-- Header -->
    <Header @language-change="handleLanguageChange" />

    <!-- Main Content -->
    <main class="main-content">
      <div class="container">
        <!-- Page Title -->
        <h1 class="page-title">{{ currentContent.title }}</h1>

        <!-- eMall Videos Section -->
        <section class="video-section">
          <h2 class="section-title">{{ currentContent.emallTitle }}</h2>
          <div class="video-list">
            <div
              v-for="(video, index) in emallVideos"
              :key="`emall-${index}`"
              class="video-item"
            >
              <p class="video-name">{{ video.name }}</p>
              <div class="section-video">
                <div class="video-label">{{ `1-${index + 1}` }}</div>
                <video
                  :src="video.src"
                  controls
                  preload="metadata"
                  @loadstart="onVideoLoadStart"
                  @error="onVideoError"
                >
                  {{ currentContent.videoNotSupported }}
                </video>
              </div>
            </div>
          </div>
        </section>

        <!-- AI Assistant Videos Section -->
        <section class="video-section">
          <h2 class="section-title">{{ currentContent.aiAssistantTitle }}</h2>
          <div class="video-list">
            <div
              v-for="(video, index) in aiAssistantVideos"
              :key="`ai-${index}`"
              class="video-item"
            >
              <p class="video-name">{{ video.name }}</p>
              <div class="section-video">
                <div class="video-label">{{ `2-${index + 1}` }}</div>
                <video
                  :src="video.src"
                  controls
                  preload="metadata"
                  @loadstart="onVideoLoadStart"
                  @error="onVideoError"
                >
                  {{ currentContent.videoNotSupported }}
                </video>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>

    <!-- Footer -->
    <div class="page-footer">
      <p>{{ currentContent.footer }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import Header from "../Header.vue";

// Language state
const currentLanguage = ref("english");

// Video data
const emallVideos = ref([
  { name: "AI Recommendation", src: "/src/assets/video/eMall/AIRec.mp4" },
  {
    name: "PR Assistance",
    src: "/src/assets/video/eMall/PRassistanceBlack.mp4",
  },
  { name: "Message Feature", src: "/src/assets/video/eMall/Message2.mp4" },
]);

const aiAssistantVideos = ref([
  {
    name: "报告生成 (Report Generation)",
    src: "/src/assets/video/AI Assistant/报告生成.mp4",
  },
  {
    name: "大宗行情 (Bulk Market)",
    src: "/src/assets/video/AI Assistant/大宗行情.mp4",
  },
  {
    name: "价格查询 (Price Query)",
    src: "/src/assets/video/AI Assistant/价格查询.mp4",
  },
  {
    name: "报告检查 (Report Check)",
    src: "/src/assets/video/AI Assistant/报告检查.mp4",
  },
]);

// Translation object
const translations = {
  english: {
    title: "Video Collection",
    emallTitle: "eMall Project Videos",
    aiAssistantTitle: "AI Assistant Project Videos",
    videoNotSupported: "Your browser does not support the video tag.",
    footer: "@2025YINGZHANG",
  },
  chinese: {
    title: "视频合集",
    emallTitle: "eMall 项目视频",
    aiAssistantTitle: "AI助手项目视频",
    videoNotSupported: "您的浏览器不支持视频标签。",
    footer: "@2025张颖",
  },
};

// Computed properties for current language content
const currentContent = computed(() => translations[currentLanguage.value]);

// Handle language change
const handleLanguageChange = (language) => {
  currentLanguage.value = language;
};

// Video event handlers
const onVideoLoadStart = () => {
  console.log("Video loading started");
};

const onVideoError = (event) => {
  console.error("Video loading error:", event);
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
@import "../../assets/subpage-styles.css";

/* Video Collection page styles */
.videocollection-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  padding: 60px 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.page-title {
  font-family: "Poppins", sans-serif;
  font-size: 2.5rem;
  font-weight: 500;
  color: #000000;
  text-align: left;
  margin-bottom: 60px;
  line-height: normal;
}

.video-section {
  margin-bottom: 80px;
}

.section-title {
  font-family: "Poppins", sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  color: #000000;
  margin-bottom: 40px;
  text-align: left;
  line-height: normal;
}

.video-list {
  display: flex;
  flex-direction: column;
  gap: 64px;
  margin-top: 40px;
}

.video-item {
  position: relative;
  width: 100%;
}

.video-label {
  position: absolute;
  top: 16px;
  left: 16px;
  background: #000000;
  color: white;
  padding: 6px 12px;
  border-radius: 20px;
  font-family: "Poppins", sans-serif;
  font-size: 0.8rem;
  font-weight: 600;
  z-index: 2;
}

.section-video {
  width: 100%;
  max-width: 1000px;
  aspect-ratio: 1920 / 1080;
  overflow: hidden;
  position: relative;
  margin: 0 auto;
}

.section-video video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.video-name {
  font-family: "Poppins", sans-serif;
  font-size: 1.1rem;
  font-weight: 500;
  color: #000000;
  margin: 0 0 16px 0;
  text-align: left;
  line-height: 1.4;
}

.page-footer {
  margin-top: auto;
  padding: 40px 0;
  text-align: left;
  width: 100%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

.page-footer p {
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: normal;
  color: #aeaeb2;
  margin: 0;
}

/* Responsive design */
@media (max-width: 768px) {
  .container {
    padding: 0 15px;
  }

  .page-title {
    font-size: 2rem;
    margin-bottom: 40px;
  }

  .section-title {
    font-size: 1.3rem;
    margin-bottom: 30px;
  }

  .video-list {
    gap: 48px;
    margin-top: 30px;
  }

  .main-content {
    padding: 40px 0;
  }
}

@media (max-width: 480px) {
  .page-title {
    font-size: 1.6rem;
  }

  .section-title {
    font-size: 1.1rem;
  }

  .video-list {
    gap: 32px;
  }
}
</style>
