<template>
  <div class="emall-page">
    <!-- Header -->
    <Header @language-change="handleLanguageChange" />

    <!-- Main Content -->
    <main class="main-content animate-fade-in-up">
      <!-- Page Title -->
      <div class="page-title-section">
        <h1 class="page-title">{{ currentContent.title }}</h1>
        <p class="page-date">{{ currentContent.date }}</p>
      </div>

      <!-- Project Description -->
      <div class="project-description">
        <p>{{ currentContent.description1 }}</p>
        <p>{{ currentContent.description2 }}</p>
      </div>

      <!-- Key Features -->
      <div class="content-sections">
        <!-- Feature 1 -->
        <section class="content-section">
          <h2 class="section-title">
            {{ currentContent.features.feature1.title }}
          </h2>
          <div class="section-video">
            <video
              ref="video1"
              controls
              muted
              loop
              preload="metadata"
              @loadeddata="handleVideoLoaded"
            >
              <source
                src="/src/assets/video/eMall/AIRec.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <div class="section-description">
            <p>{{ currentContent.features.feature1.description }}</p>
          </div>
        </section>

        <!-- Feature 2 -->
        <section class="content-section">
          <h2 class="section-title">
            {{ currentContent.features.feature2.title }}
          </h2>
          <div class="section-video">
            <video
              ref="video2"
              controls
              muted
              loop
              preload="metadata"
              @loadeddata="handleVideoLoaded"
            >
              <source
                src="/src/assets/video/eMall/PRassistanceBlack.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <div class="section-description">
            <p>{{ currentContent.features.feature2.description }}</p>
          </div>
        </section>

        <!-- Feature 3 -->
        <section class="content-section">
          <h2 class="section-title">
            {{ currentContent.features.feature3.title }}
          </h2>
          <div class="section-video">
            <video
              ref="video3"
              controls
              muted
              loop
              preload="metadata"
              @loadeddata="handleVideoLoaded"
            >
              <source
                src="/src/assets/video/eMall/Message2.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <div class="section-description">
            <p>{{ currentContent.features.feature3.description }}</p>
          </div>
        </section>

        <!-- More features indicator -->
        <div class="more-features">
          <p>...</p>
        </div>

        <!-- Call to action -->
        <div class="cta-section">
          <p class="cta-text">
            {{ currentContent.cta.text1 }}
            <a href="mailto:ashleyzz10969@outlook.com" class="cta-link">{{
              currentContent.cta.linkText
            }}</a>
            {{ currentContent.cta.text2 }}
          </p>
        </div>
      </div>
    </main>

    <!-- Footer -->
    <div class="footer">
      <p>{{ currentContent.footer }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";
import Header from "../Header.vue";

// Language state
const currentLanguage = ref("english");

// Video refs
const video1 = ref(null);
const video2 = ref(null);
const video3 = ref(null);

// Video autoplay management
const videosLoaded = ref(new Set());
const observers = ref([]);
let firstVideoPlayed = false;

// Translation data
const translations = {
  english: {
    title: "eMall Redesign",
    date: "2024.10-2025.7",
    description1:
      "eMall is the company's internal procurement system and also the platform with the loudest complaints within the company.",
    description2:
      "My responsibility is to help the product manager identify pain points in platform usage and uncover highlight design scenarios.",
    features: {
      feature1: {
        title: "Product Recommendation",
        description:
          "Procura leverages AI to recommend the most suitable products based on user needs and budget. Once a recommendation is made, it automatically redirects users to a detailed comparison page with tailored parameters, helping them make smarter and faster purchasing decisions.",
      },
      feature2: {
        title: "Auto-Generate Purchase Requests from Product Sheets",
        description:
          "Seamlessly converts product sheet Excel files into structured Purchase Requests with a single click. Along the process, it intelligently recommends alternatives for unavailable items, automatically maps products to custom categories, and generates clear product descriptions — making procurement faster, smarter, and more reliable.",
      },
      feature3: {
        title: "Real-Time Progress and Risk Updates in Chat",
        description:
          "All procurement-related updates, including purchase request status, purchase order status, and logistics status, will be real-time notified in the company's most frequently used chat software, eliminating the need for procurement staff to log into the system daily to check statuses.",
      },
    },
    cta: {
      text1: "Please feel free to",
      linkText: "reach out",
      text2: "to explore the entire workflow and discover all the features!",
    },
    footer: "@2025YINGZHANG",
  },
  chinese: {
    title: "eMall 重新设计",
    date: "2024.10-2025.7",
    description1: "eMall是公司的内部采购系统，也是公司内投诉最多的平台。",
    description2:
      "我的职责是帮助产品经理识别平台使用中的痛点，并发现亮点设计场景。",
    features: {
      feature1: {
        title: "产品智能推荐",
        description:
          "Procura利用AI根据用户需求和预算推荐最合适的产品。一旦做出推荐，它会自动将用户重定向到具有定制参数的详细比较页面，帮助他们做出更智能、更快速的购买决策。",
      },
      feature2: {
        title: "一键从产品表格生成采购请求",
        description:
          "一键将产品表格（Excel）轻松转为结构化采购请求。在此过程中，系统会智能推荐缺货商品的替代选项，自动将产品归类到自定义类别，并生成清晰的产品描述——让采购流程更快速、更智能、更可靠。",
      },
      feature3: {
        title: "在聊天中即时查看进度与风险",
        description:
          "所有采购相关的更新——包括采购请求、订单以及物流状态——都会通过公司常用的聊天软件实时推送，让采购人员无需每天登录系统查看状态",
      },
    },
    cta: {
      text1: "请随时",
      linkText: "联系我们",
      text2: "探索整个工作流程并发现所有功能！",
    },
    footer: "@2025张颖",
  },
};

// Computed properties for current language content
const currentContent = computed(() => translations[currentLanguage.value]);

// Handle language change
const handleLanguageChange = (language) => {
  currentLanguage.value = language;
};

// Video loading handler
const handleVideoLoaded = (event) => {
  const video = event.target;
  videosLoaded.value.add(video);

  // Play first video immediately when loaded
  if (!firstVideoPlayed && video === video1.value) {
    video.play().catch((e) => console.log("Auto-play prevented:", e));
    firstVideoPlayed = true;
  }
};

// Intersection Observer for lazy video playback
const createVideoObserver = (video) => {
  if (!video || !("IntersectionObserver" in window)) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
          // Video is 50% visible, try to play
          if (videosLoaded.value.has(video)) {
            video.play().catch((e) => console.log("Auto-play prevented:", e));
          }
        } else {
          // Video is not visible, pause to save resources
          video.pause();
        }
      });
    },
    {
      threshold: [0, 0.5, 1],
      rootMargin: "50px",
    }
  );

  observer.observe(video);
  observers.value.push(observer);
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

  // Setup video observers after DOM is ready
  setTimeout(() => {
    [video1.value, video2.value, video3.value].forEach((video) => {
      if (video) {
        createVideoObserver(video);
      }
    });
  }, 100);
});

// Cleanup observers on unmount
onUnmounted(() => {
  observers.value.forEach((observer) => observer.disconnect());
  observers.value = [];
});
</script>

<style scoped>
@import "../../assets/subpage-styles.css";

/* eMallPage specific overrides */
.page-title {
  font-weight: 500;
  margin: 0 0 8px 0;
  line-height: normal;
}

.project-description {
  margin-bottom: 64px;
}

.project-description p {
  color: var(--text-secondary, #595959);
  line-height: normal;
  margin: 0 0 16px 0;
}

.project-description p:last-child {
  margin-bottom: 0;
}

.section-title {
  font-family: "Poppins", sans-serif;
  font-size: 24px;
  font-weight: 600;
  color: #000000;
  margin: 0;
  line-height: 1.3;
}

.section-description p {
  color: var(--text-secondary, #595959);
  line-height: normal;
  margin: 0;
}

.more-features p {
  color: var(--text-secondary, #595959);
}

.cta-text {
  line-height: normal;
}

.cta-link {
  color: #000000 !important;
  text-decoration: underline !important;
  transition: all 0.2s ease;
}

.cta-link:hover {
  color: #363636 !important;
  text-decoration: underline !important;
}

.cta-link:focus {
  outline: none !important; /* Remove black focus outline */
}

.cta-link:active {
  color: #666666 !important;
  transform: translateY(1px);
}

.footer p {
  line-height: normal;
}

.section-video {
  width: 100%;
  max-width: 1000px;
  aspect-ratio: 1920 / 1080;
  overflow: hidden;
  position: relative;
}

.section-video video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
</style>
