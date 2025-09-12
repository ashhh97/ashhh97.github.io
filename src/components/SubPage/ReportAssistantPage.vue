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

        <!-- Project Info Card -->
        <div class="project-info-card">
          <div class="info-section">
            <h3 class="info-title">
              {{ currentContent.projectInfo.team.title }}
            </h3>
            <div class="info-content">
              <p
                v-for="member in currentContent.projectInfo.team.members"
                :key="member"
              >
                {{ member }}
              </p>
            </div>
          </div>
          <div class="info-section">
            <h3 class="info-title">
              {{ currentContent.projectInfo.role.title }}
            </h3>
            <div class="info-content">
              <p>{{ currentContent.projectInfo.role.description }}</p>
            </div>
          </div>
          <div class="info-section">
            <h3 class="info-title">
              {{ currentContent.projectInfo.job.title }}
            </h3>
            <div class="info-content">
              <ol>
                <li
                  v-for="task in currentContent.projectInfo.job.tasks"
                  :key="task"
                >
                  {{ task }}
                </li>
              </ol>
            </div>
          </div>
        </div>

        <!-- Notice -->
        <div class="notice-section">
          <p class="notice-text" v-html="currentContent.notice"></p>
        </div>

        <!-- Problem Analysis Section -->
        <div class="problem-analysis-section">
          <h2 class="problem-title">
            {{ currentContent.problemAnalysis.title }}
          </h2>

          <!-- User Feedback with Head Icon -->
          <div class="user-feedback-section">
            <div class="feedback-icon-container">
              <img
                src="/src/assets/video/AI Assistant/head.png"
                alt="User feedback"
                class="feedback-icon"
              />
            </div>
            <p class="feedback-text">
              {{ currentContent.problemAnalysis.feedback }}
            </p>
          </div>

          <!-- Pie Chart Image -->
          <div class="pie-chart-container">
            <img
              src="/src/assets/video/AI Assistant/piechart.png"
              alt="Problem Analysis Pie Chart"
              class="pie-chart-image"
            />
          </div>
        </div>

        <!-- Content Sections -->
        <div class="content-sections">
          <!-- Problems and Design Solutions Section -->
          <section class="problems-solutions-section">
            <h2 class="problems-solutions-title">
              {{ currentContent.sections.problemsAndSolutions.title }}
            </h2>

            <!-- Problem Section -->
            <div class="problem-section">
              <h3 class="problem-subtitle">
                {{ currentContent.sections.problemsAndSolutions.problemTitle }}
              </h3>
              <div class="problem-description">
                <p>
                  {{
                    currentContent.sections.problemsAndSolutions
                      .problemDescription
                  }}
                </p>
              </div>
            </div>

            <!-- Solution Section -->
            <div class="solution-section">
              <h3 class="solution-subtitle">
                {{ currentContent.sections.section1.title }}
              </h3>
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
                    src="/src/assets/video/AI%20Assistant/大宗行情.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div class="solution-description">
                <p>{{ currentContent.sections.section1.description1 }}</p>
              </div>
            </div>
          </section>

          <!-- Section 2: Smart Connected Price Lookup -->
          <section class="problems-solutions-section">
            <!-- Problem Section -->
            <div class="problem-section">
              <h3 class="problem-subtitle">
                {{ currentContent.sections.section2.problemTitle }}
              </h3>
              <div class="problem-description">
                <p>{{ currentContent.sections.section2.problemDescription }}</p>
              </div>
            </div>

            <!-- Solution Section -->
            <div class="solution-section">
              <h3 class="solution-subtitle">
                {{ currentContent.sections.section2.title }}
              </h3>
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
                    src="/src/assets/video/AI%20Assistant/价格查询.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div class="solution-description">
                <p>{{ currentContent.sections.section2.description1 }}</p>
              </div>
            </div>
          </section>

          <!-- Section 3: Intelligent Report Checking -->
          <section class="problems-solutions-section">
            <!-- Problem Section -->
            <div class="problem-section">
              <h3 class="problem-subtitle">
                {{ currentContent.sections.section3.problemTitle }}
              </h3>
              <div class="problem-description">
                <p>{{ currentContent.sections.section3.problemDescription }}</p>
              </div>
            </div>

            <!-- Solution Section -->
            <div class="solution-section">
              <h3 class="solution-subtitle">
                {{ currentContent.sections.section3.title }}
              </h3>
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
                    src="/src/assets/video/AI%20Assistant/价格查询.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div class="solution-description">
                <p>{{ currentContent.sections.section3.description1 }}</p>
              </div>
            </div>
          </section>
        </div>

        <!-- Result Section -->
        <div class="result-section">
          <h2 class="result-title">{{ currentContent.result.title }}</h2>
          <div class="metrics-grid">
            <!-- Report Quality -->
            <div class="metric-item">
              <div class="metric-value">
                <span class="metric-number">{{
                  currentContent.result.qualityImprovement
                }}</span>
                <span class="metric-label">{{
                  currentContent.result.qualityLabel
                }}</span>
              </div>
              <p class="metric-description">
                {{ currentContent.result.qualityDescription }}
              </p>
            </div>

            <!-- Report Covered -->
            <div class="metric-item">
              <div class="metric-value">
                <span class="metric-number">{{
                  currentContent.result.reportCount
                }}</span>
                <span class="metric-label">{{
                  currentContent.result.reportLabel
                }}</span>
              </div>
              <p class="metric-description">
                {{ currentContent.result.reportDescription }}
              </p>
            </div>

            <!-- Efficiency -->
            <div class="metric-item">
              <div class="metric-value">
                <span class="metric-number">{{
                  currentContent.result.efficiencyImprovement
                }}</span>
                <span class="metric-label">{{
                  currentContent.result.efficiencyLabel
                }}</span>
              </div>
              <p class="metric-description">
                {{ currentContent.result.efficiencyDescription }}
              </p>
            </div>
          </div>
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

        <!-- Footer -->
        <div class="page-footer">
          <p>{{ currentContent.footer }}</p>
        </div>
      </div>
    </main>
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

// Translation object
const translations = {
  english: {
    title: "Report Assistant Design",
    description:
      "Each time CEG selects a specific supplier, a deck report explaining the selection rationale must be prepared. Gathering and analyzing the necessary data for the report is time-consuming. The Report Assistant is designed to streamline this process and improve report-writing efficiency.",
    date: "2025.4",
    projectInfo: {
      team: {
        title: "Team：",
        members: [
          "1 Main Product Manager",
          "1 Project Manger",
          "1 User Representative",
          "1 UI Designer",
          "1 Lead Developer",
        ],
      },
      role: {
        title: "My Role：",
        description: "Product consultant & end-to-end product designer",
      },
      job: {
        title: "My Job：",
        tasks: [
          "Discover User Paint Points",
          "Propose design solutions to the Product Manage",
          "Deliver end-to-end design",
        ],
      },
    },
    notice:
      "<strong>Notice:</strong> Due to the confidential nature of the project, all data and business logic have been <strong>anonymized</strong>, and the design mockups have been <strong>completely reconstructed</strong> by me.",
    problemAnalysis: {
      title: "It takes 3 days to write a supplier selection report",
      feedback:
        '"The main pain point is data collection and analysis — frequently gathering data across different systems and platforms, manually analyzing and summarizing it, and then writing it into reports."',
    },
    sections: {
      problemsAndSolutions: {
        title: "Problems and design solutions",
        problemTitle: "Inefficient Raw Material Price Analysis",
        problemDescription:
          "The user has to manually search for price charts, independently review reports, and manually summarize conclusions on raw material price trends.",
      },
      section1: {
        title: "Intelligent Data Lookup and Report Generation",
        description1:
          "The system matches data based on query criteria and generates trend forecasts, with full control over the data.",
      },
      section2: {
        title: "Smart Connected Price Lookup",
        problemTitle: "Inefficient Raw Material Price Sourcing",
        problemDescription:
          "The user has to manually search for raw material prices on multiple e-commerce platforms like JD.com, Alibaba, and Taobao, while also having to ask other product managers for historical pricing data.",
        description1:
          "CEG only needs to ask Procura for raw material prices. Procura searches online and provides CEG with the average price.",
      },
      section3: {
        title: "Intelligent Report Checking",
        problemTitle: "Manual Report Review",
        problemDescription:
          "Check the report page by page. which needs an hour",
        description1:
          "Intelligent report checking can identify discrepancies between the report and system data, as well as inconsistencies of the same data type across pages, ensuring high report quality",
      },
    },
    result: {
      title: "Result",
      qualityImprovement: "50%+",
      qualityLabel: "Report Quality",
      qualityDescription:
        "With the help of intelligent report validation, the quality of the reports has improved.",
      reportCount: "200+",
      reportLabel: "Report Covered",
      reportDescription: "Covering over 200+ supplier selection reports",
      efficiencyImprovement: "30%",
      efficiencyLabel: "Efficiency",
      efficiencyDescription: "Report Writing efficiency improved by 30%.",
    },
    cta: {
      text1: "Please feel free to",
      linkText: "reach out",
      text2: "to explore the entire workflow and discover all the features!",
    },
    footer: "@2025YINGZHANG",
  },
  chinese: {
    title: "报告助手设计",
    description:
      "CEG在每次选择特定供应商时，都需要准备一份PPT报告来说明选择理由。但在撰写过程中，数据的查找与分析往往耗时较长。报告助手的目标就是简化这一流程，提升报告撰写的效率。",
    date: "2025.4",
    projectInfo: {
      team: {
        title: "Team：",
        members: [
          "1 Main Product Manager",
          "1 Project Manger",
          "1 User Representative",
          "1 UI Designer",
          "1 Lead Developer",
        ],
      },
      role: {
        title: "My Role：",
        description: "Product consultant & end-to-end product designer",
      },
      job: {
        title: "My Job：",
        tasks: [
          "Discover User Paint Points",
          "Propose design solutions to the Product Manage",
          "Deliver end-to-end design",
        ],
      },
    },
    notice:
      "<strong>注意：</strong>由于项目的保密性质，所有数据和业务逻辑都已被<strong>匿名化</strong>，设计稿已由我<strong>完全重新构建</strong>。",
    problemAnalysis: {
      title: "撰写供应商选择报告需要3天时间",
      feedback:
        '"主要痛点是数据收集和分析——经常需要从不同系统和平台收集数据，手动分析和总结，然后写入报告。"',
    },
    sections: {
      problemsAndSolutions: {
        title: "问题与设计解决方案",
        problemTitle: "低效的原材料价格分析",
        problemDescription:
          "用户必须手动搜索价格图表，独立审查报告，并手动总结原材料价格趋势的结论。",
      },
      section1: {
        title: "智能数据查询与报告生成",
        description1:
          "系统会根据查询条件匹配相应数据，并生成趋势预测，数据全程可控。",
      },
      section2: {
        title: "联网智能报价查询",
        problemTitle: "低效的原材料价格采购",
        problemDescription:
          "用户必须在多个电商平台（如京东、阿里巴巴、淘宝）上手动搜索原材料价格，同时还需要向其他产品经理询问历史价格数据。",
        description1:
          "CEG只需要向Procura询问原材料价格。Procura在线搜索并为CEG提供平均价格。",
      },
      section3: {
        title: "智能报告检测",
        problemTitle: "手动报告审查",
        problemDescription: "逐页检查报告，需要一个小时",
        description1:
          "智能报告检查可以识别报告与系统数据之间的差异，以及同一数据类型在页面间的不一致，确保高质量报告",
      },
    },
    result: {
      title: "结果",
      qualityImprovement: "50%+",
      qualityLabel: "报告质量",
      qualityDescription: "通过智能报告验证的帮助，报告质量得到了提升。",
      reportCount: "200+",
      reportLabel: "报告覆盖",
      reportDescription: "涵盖超过200+份供应商选择报告",
      efficiencyImprovement: "30%",
      efficiencyLabel: "效率",
      efficiencyDescription: "报告撰写效率提升了30%。",
    },
    cta: {
      text1: "请随时",
      linkText: "联系我",
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

/* Override project description margin */
.project-description {
  margin: 0 0 32px 0 !important;
}

/* Project Info Card Styles */
.project-info-card {
  background: white;
  border-radius: 16px;
  box-shadow: 3px 6px 14px 3px rgba(0, 0, 0, 0.08);
  padding: 16px 24px;
  margin: 0 0 32px 0;
  display: flex;
  gap: 60px;
  width: 100%;
  max-width: 1000px;
}

.info-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 0;
}

.info-title {
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #595959;
  margin: 0;
  line-height: normal;
  white-space: nowrap;
}

.info-content {
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #595959;
  line-height: normal;
}

.info-content p {
  margin: 0 0 2px 0;
  line-height: normal;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.info-content p:last-child {
  margin-bottom: 0;
}

/* Team section (first) keeps nowrap */
.info-section:first-child .info-content p {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Role and Job sections (second and third) allow wrapping */
.info-section:nth-child(2) .info-content p,
.info-section:nth-child(3) .info-content p {
  white-space: normal;
  overflow: visible;
  text-overflow: initial;
}

.info-content ol {
  margin: 0;
  padding-left: 20px;
  list-style-type: decimal;
}

.info-content ol li {
  margin: 0 0 2px 0;
  line-height: normal;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Job section (third) list items allow wrapping */
.info-section:nth-child(3) .info-content ol li {
  white-space: normal;
  overflow: visible;
  text-overflow: initial;
}

.info-content ol li:last-child {
  margin-bottom: 0;
}

/* Notice section styles */
.notice-section {
  margin: 32px 0 0 0;
  width: 100%;
}

/* Problem Analysis section styles */
.problem-analysis-section {
  margin: 160px 0 0 0;
  width: 100%;
}

.problem-title {
  font-family: "Poppins", sans-serif;
  font-size: 24px;
  font-weight: 600;
  color: #000000;
  margin: 0 0 32px 0;
  line-height: normal;
}

.user-feedback-section {
  display: flex;
  align-items: flex-start;
  gap: 24px;
  margin-bottom: 32px;
}

.feedback-icon-container {
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.feedback-icon {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.feedback-text {
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  font-weight: 500;
  color: #595959;
  line-height: 1.34;
  margin: 0;
  flex: 1;
}

.pie-chart-container {
  width: 100%;
  display: flex;
  justify-content: center;
}

.pie-chart-image {
  width: 100%;
  max-width: 800px;
  height: auto;
}

/* Problems and Solutions section styles */
.problems-solutions-section {
  margin: 0;
  width: 100%;
}

/* First problems-solutions-section should have margin-top to separate from problem-analysis-section */
.problems-solutions-section:first-child {
  margin-top: 160px;
}

.problems-solutions-title {
  font-family: "Poppins", sans-serif;
  font-size: 24px;
  font-weight: 600;
  color: #000000;
  margin: 0 0 32px 0;
  line-height: normal;
}

.problem-section {
  margin-bottom: 32px;
}

.problem-subtitle {
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  font-weight: 600;
  color: #000000;
  margin: 0 0 32px 0;
  line-height: normal;
}

.problem-description p {
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  font-weight: 400;
  color: #595959;
  line-height: normal;
  margin: 0;
}

.solution-section {
  margin-top: 0;
}

.solution-subtitle {
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  font-weight: 600;
  color: #000000;
  margin: 0 0 32px 0;
  line-height: normal;
}

.solution-description p {
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  font-weight: 400;
  color: #595959;
  line-height: normal;
  margin: 0;
}

/* Override section-video margin for this page */
.section-video {
  margin: 32px 0;
  border-radius: 16px;
  overflow: hidden;
}

/* Ensure video has 16px border-radius */
.section-video video {
  border-radius: 16px;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Result section styles */
.result-section {
  margin: 160px 0 0 0;
  width: 100%;
}

.result-title {
  font-family: "Poppins", sans-serif;
  font-size: 24px;
  font-weight: 600;
  color: #000000;
  margin: 0 0 32px 0;
  line-height: normal;
  text-align: left;
}

.metrics-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 48px;
  width: 100%;
}

.metric-item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
}

.metric-value {
  display: flex;
  align-items: baseline;
  gap: 8px;
  margin-bottom: 8px;
}

.metric-number {
  font-family: "Poppins", sans-serif;
  font-size: 48px;
  font-weight: 700;
  color: #000000;
  line-height: 1.2;
  letter-spacing: -1.056px;
}

.metric-arrow {
  font-family: "Poppins", sans-serif;
  font-size: 24px;
  font-weight: 600;
  color: #000000;
  line-height: normal;
}

.metric-label {
  font-family: "Poppins", sans-serif;
  font-size: 12px;
  font-weight: 400;
  color: #666666;
  line-height: 1.34;
  letter-spacing: -0.08px;
  margin-left: 8px;
  white-space: nowrap;
}

.metric-description {
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #000000;
  line-height: 1.4;
  margin: 0;
  text-align: left;
}

.notice-text {
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  font-weight: 400;
  color: #595959;
  line-height: normal;
  margin: 0;
}

/* Force override all strong tags in notice section - using :deep() for v-html content */
:deep(.notice-text strong) {
  font-weight: 600 !important;
  color: #595959 !important;
}

/* Global strong override for notice text */
.notice-text :deep(strong) {
  font-weight: 600 !important;
  color: #595959 !important;
}

/* Responsive design */
@media (max-width: 768px) {
  .project-info-card {
    flex-direction: column;
    gap: 20px;
    padding: 16px;
  }

  .info-content p,
  .info-content ol li {
    white-space: normal;
  }

  .problem-analysis-section {
    margin: 80px 0;
  }

  .problem-title {
    font-size: 20px;
    margin-bottom: 24px;
  }

  .user-feedback-section {
    gap: 16px;
    margin-bottom: 24px;
  }

  .feedback-icon-container {
    width: 32px;
    height: 32px;
  }

  .feedback-text {
    font-size: 16px;
  }

  .problems-solutions-section {
    margin: 0;
  }

  .problems-solutions-section:first-child {
    margin-top: 80px;
  }

  .problems-solutions-title {
    font-size: 20px;
    margin-bottom: 32px;
  }

  .problem-section {
    margin-bottom: 32px;
  }

  .problem-subtitle,
  .solution-subtitle {
    font-size: 18px;
    margin-bottom: 24px;
  }

  .problem-description p,
  .solution-description p {
    font-size: 16px;
  }

  .result-section {
    margin: 80px 0;
  }

  .result-title {
    font-size: 20px;
    margin-bottom: 24px;
  }

  .metrics-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .metric-number {
    font-size: 36px;
  }

  .metric-arrow {
    font-size: 20px;
  }

  .metric-label {
    font-size: 12px;
  }

  .metric-description {
    font-size: 12px;
  }
}
</style>
