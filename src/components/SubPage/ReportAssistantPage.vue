<template>
  <div class="reportassistant-page">
    <!-- Header -->
    <Header @language-change="handleLanguageChange" />

    <!-- Main Content -->
    <main class="main-content animate-fade-in-up">
      <div class="content-container">
        <!-- Page Title -->
        <h1 class="page-title">{{ currentContent.title }}</h1>

        <!-- Project Date -->
        <p class="project-date">{{ currentContent.date }}</p>

        <!-- Project Description -->
        <p class="project-description">
          {{ currentContent.description }}
        </p>

        <!-- Content Sections -->
        <div class="content-sections">
          <!-- Section 1: Data Analysis -->
          <section class="content-section">
            <h2 class="section-title">
              {{ currentContent.sections.section1.title }}
            </h2>
            <div class="section-video">
              <video controls muted loop preload="metadata">
                <source
                  src="/src/assets/video/AI%20Assistant/大宗行情.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
            <div class="section-description">
              <p>
                {{ currentContent.sections.section1.description1 }}
              </p>
            </div>
          </section>

          <!-- Section 2: Smart Connected Price Lookup -->
          <section class="content-section">
            <h2 class="section-title">
              {{ currentContent.sections.section2.title }}
            </h2>
            <div class="section-video">
              <video controls muted loop preload="metadata">
                <source
                  src="/src/assets/video/AI%20Assistant/价格查询.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
            <div class="section-description">
              <p>
                {{ currentContent.sections.section2.description1 }}
              </p>
            </div>
          </section>

          <!-- Section 3: Intelligent Report Checking -->
          <section class="content-section">
            <h2 class="section-title">
              {{ currentContent.sections.section3.title }}
            </h2>
            <div class="section-video">
              <video controls muted loop preload="metadata">
                <source
                  src="/src/assets/video/AI%20Assistant/价格查询.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
            <div class="section-description">
              <p>
                {{ currentContent.sections.section3.description1 }}
              </p>
            </div>
          </section>
        </div>

        <!-- Footer -->
        <div class="page-footer">
          <p>{{ currentContent.footer }}</p>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import Header from "../Header.vue";

// Language state
const currentLanguage = ref("english");

// Translation object
const translations = {
  english: {
    title: "Report Assistant Design",
    description:
      "Each time CEG selects a specific supplier, a deck report explaining the selection rationale must be prepared. Gathering and analyzing the necessary data for the report is time-consuming. The Report Assistant is designed to streamline this process and improve report-writing efficiency.",
    date: "2025.4",
    sections: {
      section1: {
        title: "Intelligent Data Lookup and Report Generation",
        description1:
          "The system matches data based on query criteria and generates trend forecasts, with full control over the data.",
      },
      section2: {
        title: "Smart Connected Price Lookup",
        description1:
          "CEG only needs to ask Procura for raw material prices. Procura searches online and provides CEG with the average price.",
      },
      section3: {
        title: "Intelligent Report Checking",
        description1:
          "Intelligent report checking can identify discrepancies between the report and system data, as well as inconsistencies of the same data type across pages, ensuring high report quality",
      },
    },
    footer: "@2025YINGZHANG",
  },
  chinese: {
    title: "报告助手设计",
    description:
      "CEG在每次选择特定供应商时，都需要准备一份PPT报告来说明选择理由。但在撰写过程中，数据的查找与分析往往耗时较长。报告助手的目标就是简化这一流程，提升报告撰写的效率。",
    date: "2025.4",
    sections: {
      section1: {
        title: "智能数据查询与报告生成",
        description1:
          "系统会根据查询条件匹配相应数据，并生成趋势预测，数据全程可控。",
      },
      section2: {
        title: "联网智能报价查询",
        description1:
          "CEG只需要向Procura询问原材料价格。Procura在线搜索并为CEG提供平均价格。",
      },
      section3: {
        title: "智能报告检测",
        description1:
          "智能报告检查可以识别报告与系统数据之间的差异，以及同一数据类型在页面间的不一致，确保高质量报告",
      },
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
</style>
