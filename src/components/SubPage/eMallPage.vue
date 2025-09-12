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

      <!-- Project Overview Container -->
      <div class="project-overview-container">
        <!-- Project Description -->
        <div class="project-description">
          <p>{{ currentContent.description1 }}</p>
          <p>{{ currentContent.description2 }}</p>
        </div>

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
      </div>

      <!-- Challenge & Solution -->
      <div class="challenge-solution-section">
        <h2 class="challenge-title">
          {{ currentContent.challengeSection.title }}
        </h2>

        <!-- Data Tracking Issue -->
        <div class="challenge-content">
          <p class="challenge-subtitle">
            <strong>{{
              currentContent.challengeSection.dataTracking.subtitle
            }}</strong>
            {{ currentContent.challengeSection.dataTracking.description }}
          </p>
        </div>

        <!-- Data Image -->
        <div class="data-image-container">
          <img
            src="/src/assets/video/eMall/datapic.png"
            alt="eMall Data Analytics"
            class="data-image"
          />
        </div>

        <!-- Analysis -->
        <div class="analysis-content">
          <p
            class="analysis-text"
            v-html="currentContent.challengeSection.analysis"
          ></p>
        </div>
      </div>

      <!-- Classified User Groups -->
      <div class="user-groups-section">
        <h2 class="user-groups-title">
          {{ currentContent.userGroups.title }}
        </h2>

        <div class="user-groups-description">
          <p>{{ currentContent.userGroups.description }}</p>
        </div>

        <!-- User Types Image -->
        <div class="user-types-image-container">
          <img
            src="/src/assets/video/eMall/user group.png"
            alt="User Types Classification"
            class="user-types-image"
          />
        </div>
      </div>

      <!-- Journey Mapping Section -->
      <div class="journey-mapping-section">
        <h2 class="journey-title">
          {{ currentContent.journeyMapping.title }}
        </h2>

        <div class="journey-description">
          <p>{{ currentContent.journeyMapping.description1 }}</p>
        </div>

        <!-- Journey Map Image -->
        <div class="journey-image-container">
          <img
            src="/src/assets/video/eMall/Journey.png"
            alt="User Journey Map"
            class="journey-image"
          />
        </div>

        <!-- Research Description -->
        <div class="journey-research">
          <p
            class="journey-research-text"
            v-html="currentContent.journeyMapping.description2"
          ></p>
        </div>
      </div>

      <!-- Problems and Design Solutions -->
      <div class="problems-solutions-section">
        <h2 class="problems-solutions-title">
          {{ currentContent.problemsAndSolutions.title }}
        </h2>

        <!-- Challenges Section -->
        <div class="challenges-section">
          <h3 class="challenges-subtitle">
            {{ currentContent.problemsAndSolutions.challengesTitle }}
          </h3>

          <!-- User Journey for Product Selection -->
          <div class="product-selection-journey">
            <img
              src="/src/assets/video/eMall/ptoductSelection.png"
              alt="Product Selection Journey"
              class="journey-image"
            />
          </div>

          <!-- Problem Context -->
          <div class="problem-context">
            <p>{{ currentContent.problemsAndSolutions.context }}</p>
          </div>

          <!-- User Feedback -->
          <div class="user-feedback-section">
            <div class="feedback-item">
              <img
                src="/src/assets/chat.svg"
                alt="User feedback"
                class="feedback-icon"
              />
              <p>{{ currentContent.problemsAndSolutions.feedback1 }}</p>
            </div>
            <div class="feedback-item">
              <img
                src="/src/assets/chat.svg"
                alt="User feedback"
                class="feedback-icon"
              />
              <p>{{ currentContent.problemsAndSolutions.feedback2 }}</p>
            </div>
          </div>
        </div>

        <!-- Smart Product Recommendation Solution -->
        <div class="smart-recommendation-section">
          <h3 class="solution-subtitle">
            {{ currentContent.problemsAndSolutions.solutionTitle }}
          </h3>

          <div class="solution-video">
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

          <div class="solution-description">
            <p>{{ currentContent.problemsAndSolutions.solutionDescription }}</p>
          </div>
        </div>
      </div>

      <!-- Key Features -->
      <div class="content-sections">
        <!-- Feature 2 -->
        <section class="content-section">
          <!-- Tedious Manual Entry Section -->
          <div class="tedious-manual-section">
            <h3 class="tedious-subtitle">
              {{ currentContent.features.feature2.tediousTitle }}
            </h3>

            <!-- Copy Item Image -->
            <div class="copy-item-image">
              <img
                src="/src/assets/video/eMall/copyItem.png"
                alt="Copy Item Interface"
                class="copy-image"
              />
            </div>

            <!-- Problem Context -->
            <div class="problem-context">
              <p>{{ currentContent.features.feature2.context }}</p>
            </div>

            <!-- User Feedback -->
            <div class="user-feedback-section">
              <div class="feedback-item">
                <img
                  src="/src/assets/chat.svg"
                  alt="User feedback"
                  class="feedback-icon"
                />
                <p>{{ currentContent.features.feature2.feedback1 }}</p>
              </div>
              <div class="feedback-item">
                <img
                  src="/src/assets/chat.svg"
                  alt="User feedback"
                  class="feedback-icon"
                />
                <p>{{ currentContent.features.feature2.feedback2 }}</p>
              </div>
            </div>
          </div>

          <!-- Auto-Generate Solution Section -->
          <div class="auto-generate-section">
            <h3 class="solution-subtitle">
              {{ currentContent.features.feature2.solutionTitle }}
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
                  src="/src/assets/video/eMall/PRassistanceBlack.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>

            <div class="solution-description">
              <p>{{ currentContent.features.feature2.description }}</p>
            </div>
          </div>
        </section>

        <!-- Feature 3 -->
        <section class="content-section">
          <!-- Manual Tracking & Overdue Risk Section -->
          <div class="manual-tracking-section">
            <h3 class="manual-tracking-subtitle">
              {{ currentContent.features.feature3.manualTrackingTitle }}
            </h3>

            <!-- Manual Tracking Image -->
            <div class="manual-tracking-image">
              <img
                src="/src/assets/video/eMall/message.png"
                alt="Manual Tracking Interface"
                class="tracking-image"
              />
            </div>

            <!-- Problem Context -->
            <div class="problem-context">
              <p>{{ currentContent.features.feature3.context }}</p>
            </div>

            <!-- User Feedback -->
            <div class="user-feedback-section">
              <div class="feedback-item">
                <img
                  src="/src/assets/chat.svg"
                  alt="User feedback"
                  class="feedback-icon"
                />
                <p>{{ currentContent.features.feature3.feedback1 }}</p>
              </div>
              <div class="feedback-item">
                <img
                  src="/src/assets/chat.svg"
                  alt="User feedback"
                  class="feedback-icon"
                />
                <p>{{ currentContent.features.feature3.feedback2 }}</p>
              </div>
            </div>
          </div>

          <!-- Real-Time Progress and Risk Updates Solution Section -->
          <div class="real-time-updates-section">
            <h3 class="solution-subtitle">
              {{ currentContent.features.feature3.solutionTitle }}
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
                  src="/src/assets/video/eMall/Message2.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>

            <div class="solution-description">
              <p>{{ currentContent.features.feature3.description }}</p>
            </div>
          </div>
        </section>

        <!-- Feature 4 - Manual Data Reporting & Order Analytics Dashboard -->
        <section class="content-section">
          <!-- Manual Data Reporting Section -->
          <div class="manual-data-reporting-section">
            <h3 class="manual-data-reporting-subtitle">
              {{ currentContent.features.feature4.manualDataReportingTitle }}
            </h3>

            <!-- Data Report Image -->
            <div class="data-report-image">
              <img
                src="/src/assets/video/eMall/data report.png"
                alt="Data Report Interface"
                class="report-image"
              />
            </div>

            <!-- Problem Context -->
            <div class="problem-context">
              <p>{{ currentContent.features.feature4.dataReportingContext }}</p>
            </div>

            <!-- User Feedback -->
            <div class="user-feedback-section">
              <div class="feedback-item">
                <img
                  src="/src/assets/chat.svg"
                  alt="User feedback"
                  class="feedback-icon"
                />
                <p>
                  {{ currentContent.features.feature4.dataReportingFeedback }}
                </p>
              </div>
            </div>
          </div>

          <!-- Order Analytics Dashboard Section -->
          <div class="order-analytics-dashboard-section">
            <h3 class="dashboard-subtitle">
              {{ currentContent.features.feature4.dashboardTitle }}
            </h3>

            <!-- Dashboard Image -->
            <div class="dashboard-image">
              <img
                src="/src/assets/video/eMall/dashboard.png"
                alt="Order Analytics Dashboard"
                class="dashboard-img"
              />
            </div>

            <!-- Solution Description -->
            <div class="solution-description">
              <p>{{ currentContent.features.feature4.dashboardDescription }}</p>
            </div>
          </div>
        </section>

        <!-- Result Section -->
        <section class="result-section">
          <h2 class="result-title">
            {{ currentContent.result.title }}
          </h2>

          <!-- UI Image -->
          <div class="result-image-container">
            <img
              src="/src/assets/video/eMall/UI.png"
              alt="eMall UI Design"
              class="result-image"
            />
          </div>

          <!-- Metrics Grid -->
          <div class="metrics-grid">
            <!-- User Satisfaction Score -->
            <div class="metric-item">
              <div class="metric-value">
                <span class="metric-number">{{
                  currentContent.result.satisfactionScore
                }}</span>
                <span class="metric-label">{{
                  currentContent.result.satisfactionLabel
                }}</span>
              </div>
              <p class="metric-description">
                {{ currentContent.result.satisfactionDescription }}
              </p>
            </div>

            <!-- Steps Reduction -->
            <div class="metric-item">
              <div class="metric-value">
                <span class="metric-number">{{
                  currentContent.result.stepsReduction
                }}</span>
                <span class="metric-arrow">→</span>
                <span class="metric-number">{{
                  currentContent.result.stepsAfter
                }}</span>
                <span class="metric-label">{{
                  currentContent.result.stepsLabel
                }}</span>
              </div>
              <p class="metric-description">
                {{ currentContent.result.stepsDescription }}
              </p>
            </div>

            <!-- Efficiency Improvement -->
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
      "My responsibility is to help the product manager identify pain points (Not caused by business processes) in platform usage and uncover highlight design scenarios.",
    features: {
      feature1: {
        title: "Product Recommendation",
        problem:
          "How might we help users quickly find the most suitable products from thousands of options without spending hours browsing?",
        feedback1:
          '"I spend too much time comparing similar products. It\'s overwhelming with so many choices."',
        feedback2:
          '"I need recommendations that fit our budget and specific requirements, not just popular items."',
        description:
          "Procura leverages AI to recommend the most suitable products based on user needs and budget. The system analyzes user requirements, budget constraints, and usage patterns to provide personalized recommendations, automatically redirecting users to a detailed comparison page with tailored parameters for smarter and faster purchasing decisions.",
      },
      feature2: {
        title: "Auto-Generate Purchase Requests from Product Sheets",
        tediousTitle: "Tedious Manual Entry",
        context:
          "Buyers have to manually enter each line item from a table into the PR, a process that can take up to two hours for a large order. This is complicated by the need to customize item categories and descriptions.",
        feedback1:
          '"Manually adding each line item to the PR is a pain and takes up to 2 hours."',
        feedback2:
          '"Customizing the item categories and descriptions is also challenging."',
        solutionTitle: "Auto-Generate Purchase Requests from Product Sheets",
        description:
          "Seamlessly converts product sheet Excel files into structured Purchase Requests with a single click. Along the process, it intelligently recommends alternatives for unavailable items, automatically maps products to custom categories, and generates clear product descriptions — making procurement faster, smarter, and more reliable.",
      },
      feature3: {
        title: "Real-Time Progress and Risk Updates in Chat",
        manualTrackingTitle: "Manual Tracking & Overdue Risk",
        context:
          "Buyers have to manually check the status of a purchase request (PR) every day to see if it's been converted into a purchase order (PO), facing the risk of it becoming overdue after three days.",
        feedback1:
          '"I have to check the system every day to see if my PR has been converted to a PO, and I\'m always worried about missing deadlines."',
        feedback2:
          "\"It's frustrating when a PR becomes overdue because I didn't check the system in time.\"",
        solutionTitle: "Real-Time Progress and Risk Updates in Chat",
        description:
          "All procurement-related updates, including purchase request status, purchase order status, and logistics status, will be real-time notified in the company's most frequently used chat software, eliminating the need for procurement staff to log into the system daily to check statuses.",
      },
      feature4: {
        title: "Manual Data Reporting & Order Analytics Dashboard",
        manualDataReportingTitle: "Manual Data Reporting",
        dataReportingContext:
          "The user spends half to a full day every two weeks manually exporting, filtering, and analyzing order data in Excel to create reports for their manager.",
        dataReportingFeedback:
          '"Every two weeks, I export all orders, filter for categories my manager cares about, analyze pending PO, inspection, and receipt data, create charts in Excel, and report — it takes half to a full day"',
        dashboardTitle: "Order Analytics Dashboard",
        dashboardDescription:
          "The Order Dashboard clearly visualizes budget usage and the status of each product category, including items pending a purchase order (PO), pending receipt, and pending inspection. The dashboard also supports customizable metrics, allowing users to arrange the display as they wish.",
      },
    },
    projectInfo: {
      team: {
        title: "Team：",
        members: [
          "1 Main Product Manager",
          "4 Section Product Managers",
          "1 Lead Developer",
          "3+ Section Developers",
          "1 UI Designer",
          "1 AI Researcher",
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
    challengeSection: {
      title: "Challenge & solution",
      dataTracking: {
        subtitle: "The data tracking for eMall is incomplete：",
        description:
          " Unlike a traditional e-commerce site, we don't extensively track user retention and conversion or build a full funnel model, as we don't encourage employees to spend heavily. Currently, I can only analyze user behavior using basic data like the number of active users per department, average pageviews per user, and average time on page.",
      },
      analysis:
        "<strong>Preliminary data analysis and in-depth user interviews：</strong> Data shows <strong>Manufacturing</strong> and <strong>Procurement departments have a significant lead</strong> in average pageviews and time on page, suggesting they have <strong>professional buyers</strong>. <strong>NextLab</strong> users also have a significant lead in numbers but low time on page, possibly indicating they are <strong>goal-oriented</strong>. The Consumer <strong>Devices department</strong> ranks high in user count, but their <strong>low usage</strong> suggests many are <strong>new users</strong>. I will conduct in-depth interviews with users from these four departments.",
    },
    userGroups: {
      title: "Classified user groups",
      description:
        "After conducting in-depth interviews with users from four departments, I've categorized them into three user types. I found that the professional buyer's behavioral model can encompass the behaviors of the other two user types.",
    },
    journeyMapping: {
      title: "Pinpointing time-intensive stages and brainstorming",
      description1:
        "Based on this, I used the professional buyer as the core user persona to create a universal user journey map that accommodates all three user types. This helped me identify the time-consuming key steps.",
      description2:
        "With questions about each step of the user journey, I researched B2B platforms like SAP Ariba and IBM Procurement, as well as B2C e-commerce sites like Amazon and JD.com. I found that B2B procurement processes were very similar to our company's, and that <strong>many platforms were already using AI to solve problems in certain workflows.</strong> Since product intelligence is one of our company's digital development goals for the year, I decided to explore how AI could help our users.",
    },
    problemsAndSolutions: {
      title: "Problems and design solutions",
      challengesTitle: "Challenges in product selection",
      context:
        "During this step, professional buyers select equipment for their departments. They often encounter two major challenges: not knowing how to effectively choose products and struggling with complex parameter comparisons.",
      feedback1:
        '"I\'m struggling to choose the right equipment for the department staff. What computer is best for a UX designer?"',
      feedback2:
        '"I have to open multiple browser windows to compare product specifications, which takes over 30 minutes."',
      solutionTitle: "Smart product recommendation",
      solutionDescription:
        "Procura leverages AI to recommend the most suitable products based on user needs and budget. After a recommendation is made, it automatically redirects users to a detailed comparison page with tailored parameters, which solves both the product selection and parameter comparison problems.",
    },
    result: {
      title: "Result",
      satisfactionScore: "86.39",
      satisfactionLabel: "User Satisfaction Score",
      satisfactionDescription:
        "Collected 995 valid responses covering 26 questions across 8 modules; average redesign satisfaction scored using the SUS standard.",
      stepsReduction: "7",
      stepsAfter: "5",
      stepsLabel: "Steps",
      stepsDescription: "Reduced the search-to-purchase steps from 7 to 5. ",
      efficiencyImprovement: "20%",
      efficiencyLabel: "Efficiency",
      efficiencyDescription: "Overall procurement efficiency improved by 20%.",
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
      "我的职责是帮助产品经理识别平台使用中的痛点（非业务流程导致），并发现亮点设计场景。",
    features: {
      feature1: {
        title: "产品智能推荐",
        problem:
          "我们如何帮助用户从数千种选择中快速找到最合适的产品，而不需要花费数小时浏览？",
        feedback1: '"我花费太多时间比较类似的产品。选择太多让人不知所措。"',
        feedback2: '"我需要符合我们预算和具体要求的推荐，而不仅仅是热门商品。"',
        description:
          "Procura利用AI根据用户需求和预算推荐最合适的产品。系统分析用户需求、预算约束和使用模式，提供个性化推荐，自动将用户重定向到具有定制参数的详细比较页面，帮助做出更智能、更快速的购买决策。",
      },
      feature2: {
        title: "一键从产品表格生成采购请求",
        tediousTitle: "繁琐的采购申请录入",
        context:
          "采购人员需手动将表格数据逐项录入采购申请单，单次操作耗时可达两小时，同时还要面临自定义品类和描述的难题。",
        feedback1: '"手动添加每个项目到采购请求中很痛苦，需要2个小时。"',
        feedback2: '"自定义项目类别和描述也很难。"',
        solutionTitle: "一键从产品表格生成采购请求",
        description:
          "一键将产品表格（Excel）轻松转为结构化采购请求。在此过程中，系统会智能推荐缺货商品的替代选项，自动将产品归类到自定义类别，并生成清晰的产品描述——让采购流程更快速、更智能、更可靠。",
      },
      feature3: {
        title: "在聊天中即时查看进度与风险",
        manualTrackingTitle: "手动跟踪逾期风险",
        context:
          "采购人员必须每天手动检查采购请求（PR）的状态，看它是否已转换为采购订单（PO），面临三天后逾期的风险。",
        feedback1:
          '"我必须每天检查系统，看我的PR是否已转换为PO，我总是担心错过截止日期。"',
        feedback2: '"当PR因为我没有及时检查系统而逾期时，这很令人沮丧。"',
        solutionTitle: "在聊天中即时查看进度与风险",
        description:
          "所有采购相关的更新——包括采购请求、订单以及物流状态——都会通过公司常用的聊天软件实时推送，让采购人员无需每天登录系统查看状态",
      },
      feature4: {
        title: "手动数据报告与订单分析仪表板",
        manualDataReportingTitle: "手动分析数据并制作报告",
        dataReportingContext:
          "用户每两周花费半天到一整天的时间手动导出、筛选和分析Excel中的订单数据，为领导创建报告。",
        dataReportingFeedback:
          '"每两周，我导出所有订单，筛选领导关心的类别，分析待处理的采购订单、检验和收货数据，在Excel中创建图表并报告——这需要半天到一整天的时间"',
        dashboardTitle: "订单数据看板",
        dashboardDescription:
          "订单仪表板清晰地可视化预算使用情况和每个产品类别的状态，包括待处理采购订单（PO）、待收货和待检验的项目。仪表板还支持可自定义的指标，允许用户自由编排展示内容。",
      },
    },
    projectInfo: {
      team: {
        title: "团队：",
        members: [
          "1名主产品经理",
          "4名部门产品经理",
          "1名首席开发人员",
          "3+名部门开发人员",
          "1名UI设计师",
          "1名AI研究员",
        ],
      },
      role: {
        title: "我的角色：",
        description: "产品顾问和端到端产品设计师",
      },
      job: {
        title: "我的工作：",
        tasks: ["发现用户痛点", "向产品经理提出设计解决方案", "交付端到端设计"],
      },
    },
    notice:
      "<strong>注意：</strong>由于项目的保密性质，所有数据和业务逻辑都已被<strong>匿名化</strong>，设计稿已由我<strong>完全重新构建</strong>。",
    challengeSection: {
      title: "挑战与解决方案",
      dataTracking: {
        subtitle: "eMall的数据跟踪不完整：",
        description:
          " 与传统的电子商务网站不同，我们不广泛跟踪用户留存和转化率，也不建立完整的漏斗模型，因为我们不鼓励员工大量消费。目前，我只能使用基本数据来分析用户行为，如每个部门的活跃用户数、每个用户的平均页面浏览次数和平均页面停留时间。",
      },
      analysis:
        "<strong>初步数据分析和深度用户访谈：</strong>数据显示<strong>制造部门</strong>和<strong>采购部门在人均浏览和停留时长上断层领先</strong>，可能存在<strong>专业采购员</strong>。<strong>NextLab</strong>用户在数量上也断层领先，但页面停留时间较短，可能是有<strong>明确购买目标的用户</strong>。<strong>消费者终端部门</strong>在用户数量方面排名很高，但<strong>使用不频繁</strong>可能存在<strong>新手用户</strong>。我将从这四个部门入手，进行深入访谈。",
    },
    userGroups: {
      title: "用户群体分类",
      description:
        "在对四个部门的用户进行深度访谈后，我将用户分为三类。我发现，专业采购员的行为模式可以涵盖其他两类用户的行为模式。",
    },
    journeyMapping: {
      title: "定位耗时环节并展开头脑风暴",
      description1:
        "于是，我以专业买手为核心用户画像，绘制了一张能涵盖所有三类用户的通用旅程图，并从中识别出了耗时较长的关键环节。",
      description2:
        "带着对旅程图上各环节的疑问，我调研了 SAP Ariba、IBM Procurement 等 ToB 商城，以及亚马逊、京东等 ToC 电商平台。我发现 ToB 商城的采购流程与我们公司的流程高度相似，<strong>且在一些关键环节已采用 AI 解决方案。</strong>同时，产品智能化也是公司本年度数字化发展的重要目标。因此，我决定将解决方案重点放在 AI 能如何赋能用户。",
    },
    problemsAndSolutions: {
      title: "问题与设计解决方案",
      challengesTitle: "产品选型困难",
      context:
        "在这一阶段，专业采购人员负责为部门员工挑选设备。他们经常面临两大挑战：不知道如何进行有效选型，以及难以进行复杂的参数对比。",
      feedback1:
        '"我在为部门员工选择合适的设备时很困扰。什么电脑最适合UX设计师？"',
      feedback2: '"我必须打开多个浏览器窗口来比较产品规格，这需要超过30分钟。"',
      solutionTitle: "智能产品推荐",
      solutionDescription:
        "Procura利用AI根据用户需求和预算推荐最合适的产品。做出推荐后，它会自动将用户重定向到具有定制参数的详细比较页面，这解决了产品选择和参数比较的问题。",
    },
    result: {
      title: "结果",
      satisfactionScore: "86.39",
      satisfactionLabel: "用户满意度评分",
      satisfactionDescription:
        "收集了996份有效回复，涵盖8个业务模块的26个问题；使用SUS标准对设计满意度进行评分。",
      stepsReduction: "7",
      stepsAfter: "5",
      stepsLabel: "步骤",
      stepsDescription: "从搜索到下单，将步骤从7个减少到5个。",
      efficiencyImprovement: "20%",
      efficiencyLabel: "效率",
      efficiencyDescription: "采购整体效率提升20%",
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

/* Force override all strong tags in specific sections - using :deep() for v-html content */
:deep(.notice-text strong),
:deep(.challenge-subtitle strong),
:deep(.analysis-text strong),
:deep(.journey-research-text strong) {
  font-weight: 600 !important;
  color: #595959 !important;
}

/* Global strong override for gray text areas */
.notice-text :deep(strong),
.challenge-subtitle :deep(strong),
.analysis-text :deep(strong),
.journey-research-text :deep(strong) {
  font-weight: 600 !important;
  color: #595959 !important;
}

/* eMallPage specific overrides */
.page-title {
  font-weight: 500;
  margin: 0 0 8px 0;
  line-height: normal;
}

/* Project Overview Container */
.project-overview-container {
  margin-bottom: 64px;
}

.project-description {
  margin-bottom: 0;
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

.cta-section {
  margin-top: 128px; /* 160px - 32px (more-features margin-top) */
  margin-bottom: 0; /* Footer has its own padding */
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

/* Project Info Card Styles */
.project-info-card {
  background: white;
  border-radius: 16px;
  box-shadow: 3px 6px 14px 3px rgba(0, 0, 0, 0.08);
  padding: 16px 24px;
  margin: 32px 0;
  display: flex;
  gap: 60px;
  width: 100%;
  max-width: 1144px;
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
  margin: 0;
  width: 100%;
}

.notice-text {
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  font-weight: 400;
  color: #595959;
  line-height: normal;
  margin: 0;
}

/* Challenge & Solution section styles */
.challenge-solution-section {
  margin: 160px 0;
  width: 100%;
}

.challenge-title {
  font-family: "Poppins", sans-serif;
  font-size: 24px;
  font-weight: 600;
  color: #000000;
  margin: 0 0 32px 0;
  line-height: normal;
}

.challenge-content {
  margin-bottom: 32px;
}

.challenge-subtitle {
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  font-weight: 400;
  color: #595959;
  line-height: normal;
  margin: 0;
}

.data-image-container {
  margin: 32px 0;
  width: 100%;
  display: flex;
  justify-content: center;
}

.data-image {
  width: 100%;
  max-width: 100%;
  height: auto;
}

.analysis-content {
  margin-top: 32px;
}

.analysis-text {
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  font-weight: 400;
  color: #595959;
  line-height: normal;
  margin: 0;
}

/* User Groups section styles */
.user-groups-section {
  margin: 160px 0;
  width: 100%;
}

.user-groups-title {
  font-family: "Poppins", sans-serif;
  font-size: 24px;
  font-weight: 600;
  color: #000000;
  margin: 0 0 32px 0;
  line-height: normal;
}

.user-groups-description {
  margin-bottom: 32px;
}

.user-groups-description p {
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  font-weight: 400;
  color: #595959;
  line-height: normal;
  margin: 0;
}

.user-types-image-container {
  margin: 32px 0;
  width: 100%;
  display: flex;
  justify-content: center;
}

.user-types-image {
  width: 100%;
  max-width: 100%;
  height: auto;
}

/* Problems and Solutions section styles */
.problems-solutions-section {
  margin: 160px 0;
  width: 100%;
}

.problems-solutions-title {
  font-family: "Poppins", sans-serif;
  font-size: 24px;
  font-weight: 600;
  color: #000000;
  margin: 0 0 64px 0;
  line-height: normal;
}

.challenges-section {
  margin-bottom: 64px;
}

.challenges-subtitle {
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  font-weight: 600;
  color: #000000;
  margin: 0 0 32px 0;
  line-height: normal;
}

.product-selection-journey {
  margin: 32px 0;
  width: 100%;
  display: flex;
  justify-content: center;
}

.journey-image {
  width: 100%;
  max-width: 100%;
  height: auto;
}

.problem-context {
  margin: 32px 0 8px 0;
}

.problem-context p {
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  font-weight: 400;
  color: #595959;
  line-height: normal;
  margin: 0;
}

.user-feedback-section {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 0;
}

.user-feedback-section .feedback-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}

.user-feedback-section .feedback-icon {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  margin-top: 2px;
  opacity: 0.7;
}

.user-feedback-section .feedback-item p {
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #595959;
  line-height: normal;
  margin: 0;
  font-style: italic;
}

.smart-recommendation-section {
  margin-top: 64px;
}

.solution-subtitle {
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  font-weight: 600;
  color: #000000;
  margin: 0 0 32px 0;
  line-height: normal;
}

.solution-video {
  width: 100%;
  max-width: 1000px;
  aspect-ratio: 1920 / 1080;
  overflow: hidden;
  position: relative;
  margin: 32px 0;
}

.solution-video video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.solution-description {
  margin-top: 32px;
}

.solution-description p {
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  font-weight: 400;
  color: #595959;
  line-height: normal;
  margin: 0;
}

/* Feature Insights section styles */
.feature-insights {
  margin: 32px 0;
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.problem-description p {
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  font-weight: 400;
  color: #595959;
  line-height: normal;
  margin: 0;
}

.user-feedback {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.feedback-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}

.feedback-icon {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  margin-top: 2px;
  opacity: 0.7;
}

.feedback-item p {
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #595959;
  line-height: normal;
  margin: 0;
  font-style: italic;
}

.copy-item-image {
  margin: 32px 0;
  width: 100%;
  display: flex;
  justify-content: center;
}

.copy-image {
  width: 100%;
  max-width: 100%;
  height: auto;
}

/* Tedious Manual Entry section styles */
.tedious-manual-section {
  margin-bottom: 32px;
}

.tedious-subtitle {
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  font-weight: 600;
  color: #000000;
  margin: 0 0 32px 0;
  line-height: normal;
}

/* Auto-Generate Solution section styles */
.auto-generate-section {
  margin-top: 0;
}

/* Manual Tracking section styles */
.manual-tracking-section {
  margin-bottom: 32px;
}

.manual-tracking-subtitle {
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  font-weight: 600;
  color: #000000;
  margin: 0 0 32px 0;
  line-height: normal;
}

.manual-tracking-image {
  margin: 32px 0;
  width: 100%;
  display: flex;
  justify-content: center;
}

.tracking-image {
  width: 100%;
  max-width: 100%;
  height: auto;
}

/* Real-Time Updates Solution section styles */
.real-time-updates-section {
  margin-top: 0;
}

/* Manual Data Reporting section styles */
.manual-data-reporting-section {
  margin-bottom: 32px;
}

.manual-data-reporting-subtitle {
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  font-weight: 600;
  color: #000000;
  margin: 0 0 32px 0;
  line-height: normal;
}

.data-report-image {
  margin: 32px 0;
  width: 100%;
  display: flex;
  justify-content: center;
}

.report-image {
  width: 100%;
  max-width: 100%;
  height: auto;
}

/* Order Analytics Dashboard section styles */
.order-analytics-dashboard-section {
  margin-bottom: 32px;
}

.dashboard-subtitle {
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  font-weight: 600;
  color: #000000;
  margin: 0 0 32px 0;
  line-height: normal;
}

.dashboard-image {
  margin: 32px 0;
  width: 100%;
  display: flex;
  justify-content: center;
}

.dashboard-img {
  width: 100%;
  max-width: 100%;
  height: auto;
}

/* Result section styles */
.result-section {
  margin: 0;
  width: 100%;
}

.result-title {
  font-family: "Poppins", sans-serif;
  font-size: 24px;
  font-weight: 600;
  color: #000000;
  margin: 0 0 32px 0;
  line-height: normal;
}

.result-image-container {
  margin: 32px 0 48px 0;
  width: 100%;
  display: flex;
  justify-content: center;
}

.result-image {
  width: 100%;
  max-width: 1200px;
  height: auto;
}

.metrics-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 48px;
  width: 100%;
  max-width: 1200px;
}

.metric-item {
  display: flex;
  flex-direction: column;
  gap: 8px;
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
  font-size: 48px;
  font-weight: 700;
  color: #000000;
  line-height: 1.2;
  letter-spacing: -1.056px;
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
}

/* Journey Mapping section styles */
.journey-mapping-section {
  margin: 160px 0;
  width: 100%;
}

.journey-title {
  font-family: "Poppins", sans-serif;
  font-size: 24px;
  font-weight: 600;
  color: #000000;
  margin: 0 0 32px 0;
  line-height: normal;
}

.journey-description {
  margin-bottom: 32px;
}

.journey-description p {
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  font-weight: 400;
  color: #595959;
  line-height: normal;
  margin: 0;
}

.journey-image-container {
  margin: 32px 0;
  width: 100%;
  display: flex;
  justify-content: center;
}

.journey-image {
  width: 100%;
  max-width: 100%;
  height: auto;
}

.journey-research {
  margin-top: 32px;
}

.journey-research-text {
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  font-weight: 400;
  color: #595959;
  line-height: normal;
  margin: 0;
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

  .challenge-solution-section {
    margin: 80px 0;
  }

  .challenge-title {
    font-size: 20px;
    margin-bottom: 24px;
  }

  .challenge-subtitle,
  .analysis-text {
    font-size: 16px;
  }

  .user-groups-section {
    margin: 80px 0;
  }

  .user-groups-title {
    font-size: 20px;
    margin-bottom: 24px;
  }

  .user-groups-description p {
    font-size: 16px;
  }

  .journey-mapping-section {
    margin: 80px 0;
  }

  .journey-title {
    font-size: 20px;
    margin-bottom: 24px;
  }

  .journey-description p,
  .journey-research-text {
    font-size: 16px;
  }

  .problems-solutions-section {
    margin: 80px 0;
  }

  .problems-solutions-title {
    font-size: 20px;
    margin-bottom: 48px;
  }

  .challenges-subtitle,
  .solution-subtitle {
    font-size: 18px;
    margin-bottom: 24px;
  }

  .problem-context p,
  .solution-description p {
    font-size: 16px;
  }

  .user-feedback-section .feedback-item p {
    font-size: 14px;
  }

  .user-feedback-section .feedback-icon {
    width: 16px;
    height: 16px;
  }

  .problem-description p {
    font-size: 16px;
  }

  .feedback-item p {
    font-size: 14px;
  }

  .feedback-icon {
    width: 16px;
    height: 16px;
  }

  .tedious-subtitle {
    font-size: 18px;
    margin-bottom: 24px;
  }

  .manual-tracking-subtitle {
    font-size: 18px;
    margin-bottom: 24px;
  }

  .manual-data-reporting-subtitle,
  .dashboard-subtitle {
    font-size: 18px;
    margin-bottom: 24px;
  }

  .result-section {
    margin: 80px 0;
  }

  .cta-section {
    margin-top: 48px; /* 80px - 32px (more-features margin-top) */
    margin-bottom: 0; /* Footer has its own padding */
  }

  .result-title {
    font-size: 20px;
    margin-bottom: 24px;
  }

  .metrics-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .metric-number,
  .metric-arrow {
    font-size: 36px;
  }

  .metric-description {
    font-size: 12px;
  }
}
</style>
