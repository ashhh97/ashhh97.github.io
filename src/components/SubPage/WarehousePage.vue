<template>
  <div class="warehouse-page">
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
          <!-- Section 1: Warehouse Overview -->
          <section class="content-section">
            <h2 class="section-title">
              {{ currentContent.sections.section1.title }}
            </h2>
            <div class="section-image">
              <img
                src="../../assets/warehouse/map.jpg"
                alt="Warehouse Map Overview"
                class="feature-image"
              />
            </div>
            <div class="section-description">
              <p>
                {{ currentContent.sections.section1.description1 }}
              </p>
            </div>
          </section>

          <!-- Section 2: Warehouse Workflow Design -->
          <section class="content-section">
            <h2 class="section-title">
              {{ currentContent.sections.section2.title }}
            </h2>
            <div class="section-image">
              <img
                src="../../assets/warehouse/warehouseDesign.jpg"
                alt="Warehouse Workflow Design"
                class="feature-image"
              />
            </div>
            <div class="section-description">
              <p>
                {{ currentContent.sections.section2.description1 }}
              </p>
            </div>
          </section>

          <!-- Section 3: Warehouse Workflow Simulation -->
          <section class="content-section">
            <h2 class="section-title">
              {{ currentContent.sections.section3.title }}
            </h2>
            <div class="section-image">
              <img
                src="../../assets/warehouse/Workflow%20Simulation.jpg"
                alt="Workflow Simulation"
                class="feature-image"
              />
            </div>
            <div class="section-description">
              <p>
                {{ currentContent.sections.section3.description1 }}
              </p>
            </div>
          </section>

          <!-- Section 4: Warehouse Workflow Simulation 2 -->
          <section class="content-section">
            <h2 class="section-title">
              {{ currentContent.sections.section4.title }}
            </h2>
            <div class="section-image">
              <img
                src="../../assets/warehouse/Workflow%20Simulation2.jpg"
                alt="Workflow Simulation Analysis"
                class="feature-image"
              />
            </div>
            <div class="section-description">
              <p>
                {{ currentContent.sections.section4.description1 }}
              </p>
            </div>
          </section>

          <!-- Section 5: Simulation Score -->
          <section class="content-section">
            <h2 class="section-title">
              {{ currentContent.sections.section5.title }}
            </h2>
            <div class="section-image">
              <img
                src="../../assets/warehouse/Score.jpg"
                alt="Simulation Score"
                class="feature-image"
              />
            </div>
            <div class="section-description">
              <p>
                {{ currentContent.sections.section5.description1 }}
              </p>
            </div>
          </section>

          <!-- Section 6: Digital Mirror -->
          <section class="content-section">
            <h2 class="section-title">
              {{ currentContent.sections.section6.title }}
            </h2>
            <div class="section-image">
              <img
                src="../../assets/warehouse/Digital%20Mirror.jpg"
                alt="Digital Mirror"
                class="feature-image"
              />
            </div>
            <div class="section-description">
              <p>
                {{ currentContent.sections.section6.description1 }}
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
    title: "Warehouse Simulation & Design System",
    description:
      "The Warehouse Simulation & Design System is an end-to-end solution that integrates warehouse layout design, operational simulation, and online monitoring. It enables users to plan, visualize, and optimize warehouse operations efficiently, providing a comprehensive platform for design, simulation, and real-time supervision.",
    date: "2024.4",
    sections: {
      section1: {
        title: "Warehouse Overview",
        description1:
          "The warehouse panorama provides an overview of the company's global warehouses, showing their quantity, types, distribution, and operational health status.",
      },
      section2: {
        title: "Warehouse Workflow Design",
        description1:
          "Click a warehouse to enter the design page and build production lines with flowcharts.",
      },
      section3: {
        title: "Warehouse Workflow Simulation",
        description1:
          "After simulating warehouse processes, bottlenecks in the workflow can be identified and evaluated for severity. A line chart displays the peaks and lows of task accumulation.",
      },
      section4: {
        title: "Warehouse Workflow Simulation",
        description1:
          "The most congested step is highlighted, with task queue counts shown beside each node.",
      },
      section5: {
        title: "Simulation Score",
        description1:
          "The warehouse simulation score reflects the strengths and weaknesses of a warehouse design plan.",
      },
      section6: {
        title: "Digital Mirror",
        description1:
          "The digital twin mirrors the warehouse in real time, tracking key metrics, forecasting order waves, and monitoring performance. Intelligent cameras detect unauthorized access and fire hazards, enabling efficient remote management and ensuring safety at all times.",
      },
    },
    footer: "@2025YINGZHANG",
  },
  chinese: {
    title: "仓库仿真与设计系统",
    description:
      "仓库仿真与设计系统是一个端到端的解决方案，集成了仓库布局设计、运营仿真和在线监控。它使用户能够高效地规划、可视化和优化仓库运营，为设计、仿真和实时监督提供综合平台。",
    date: "2024.4",
    sections: {
      section1: {
        title: "仓库概览",
        description1:
          "仓库全景图提供了公司全球仓库的概览，显示其数量、类型、分布和运营健康状态。",
      },
      section2: {
        title: "仓库工作流设计",
        description1: "点击仓库进入设计页面，使用流程图构建生产线。",
      },
      section3: {
        title: "仓库工作流仿真",
        description1:
          "仿真仓库流程后，可以识别和评估工作流中的瓶颈及其严重程度。折线图显示任务累积的高峰和低谷。",
      },
      section4: {
        title: "仓库工作流仿真",
        description1: "最拥堵的步骤被高亮显示，每个节点旁边显示任务队列计数。",
      },
      section5: {
        title: "仿真评分",
        description1: "仓库仿真评分反映了仓库设计计划的优势和劣势。",
      },
      section6: {
        title: "数字镜像",
        description1:
          "数字孪生实时镜像仓库，跟踪关键指标，预测订单波次，监控性能。智能摄像头检测未授权访问和火灾隐患，实现高效远程管理并确保全天候安全。",
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
