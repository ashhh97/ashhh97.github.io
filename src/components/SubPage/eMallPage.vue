<template>
  <div class="emall-page">
    <!-- Header -->
    <Header @language-change="handleLanguageChange" />

    <!-- Floating Menu -->
    <FloatingMenu
      :menuItems="floatingMenuItems"
      :menuTitle="currentContent.menuTitle"
    />

    <!-- Main Content -->
    <main class="main-content animate-fade-in-up">
      <!-- Page Title -->
      <div id="project-overview" class="page-title-section">
        <h1 class="page-title">{{ currentContent.title }}</h1>
        <p class="page-date">{{ currentContent.date }}</p>
      </div>

      <!-- Project Overview Container -->
      <div class="project-overview-container">
        <!-- UI Design Showcase -->
        <div class="ui-showcase-section">
          <div class="ui-image-container image-clickable">
            <div class="image-wrapper" @click="openFullscreenImage(uiImg)">
              <img
                :src="uiImg"
                alt="eMall UI Design"
                class="ui-showcase-image"
                loading="eager"
              />
              <div class="image-overlay">
                <img
                  :src="eyeIcon"
                  alt="View fullscreen"
                  class="eye-icon-overlay"
                />
              </div>
            </div>
          </div>
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

      <!-- Background Section -->
      <div id="background" class="background-section">
        <h2 class="background-title">{{ currentContent.background.title }}</h2>

        <!-- Background Content -->
        <div class="background-content">
          <!-- Background Description -->
          <div class="background-description">
            <h3 class="background-subtitle">
              {{ currentContent.background.backgroundSubtitle }}
            </h3>
            <p class="background-text">
              {{ currentContent.background.backgroundText1 }}
            </p>
            <p class="background-text">
              {{ currentContent.background.backgroundText2 }}
            </p>
          </div>

          <!-- Old UI Image -->
          <div class="old-ui-container image-clickable">
            <div class="image-wrapper" @click="openFullscreenImage(oldUIImg)">
              <img
                :src="oldUIImg"
                alt="Old UI Design"
                class="old-ui-image"
                loading="lazy"
              />
              <div class="image-overlay">
                <img
                  :src="eyeIcon"
                  alt="View fullscreen"
                  class="eye-icon-overlay"
                />
              </div>
            </div>
          </div>

          <!-- Product Goals Section -->
          <div class="product-goals-section">
            <h3 class="product-goals-title">
              {{ currentContent.background.productGoalsTitle }}
            </h3>
            <div class="product-goals-list">
              <div
                v-for="(goal, index) in currentContent.background.productGoals"
                :key="index"
                class="product-goal-card"
              >
                <div class="product-goal-icon">
                  <img
                    v-if="goal.icon === 'refresh'"
                    :src="refreshIcon"
                    alt="Refresh"
                    class="goal-icon-img"
                    loading="lazy"
                  />
                  <img
                    v-else-if="goal.icon === 'satisfied'"
                    :src="satisfiedIcon"
                    alt="Satisfied"
                    class="goal-icon-img"
                    loading="lazy"
                  />
                  <img
                    v-else-if="goal.icon === 'intelligence-ai'"
                    :src="intelligenceAiIcon"
                    alt="Intelligence AI"
                    class="goal-icon-img"
                    loading="lazy"
                  />
                </div>
                <p class="product-goal-text">{{ goal.text }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Challenge & Solution -->
      <div id="challenge" class="challenge-solution-section">
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
        <div class="data-image-container image-clickable">
          <div class="image-wrapper" @click="openFullscreenImage(dataPic)">
            <img
              :src="dataPic"
              alt="eMall Data Analytics"
              class="data-image"
              loading="lazy"
            />
            <div class="image-overlay">
              <img
                :src="eyeIcon"
                alt="View fullscreen"
                class="eye-icon-overlay"
              />
            </div>
          </div>
        </div>

        <!-- Analysis -->
        <div class="analysis-content">
          <ol class="analysis-list">
            <li v-html="currentContent.challengeSection.analysis.item1"></li>
            <li v-html="currentContent.challengeSection.analysis.item2"></li>
            <li v-html="currentContent.challengeSection.analysis.item3"></li>
          </ol>
        </div>
      </div>

      <!-- Classified User Groups -->
      <div id="user-groups" class="user-groups-section">
        <h2 class="user-groups-title">
          {{ currentContent.userGroups.title }}
        </h2>

        <div class="user-groups-description">
          <p>{{ currentContent.userGroups.description }}</p>
        </div>

        <!-- User Types Image -->
        <div class="user-types-image-container image-clickable">
          <div
            class="image-wrapper"
            @click="openFullscreenImage(userGroupImage)"
          >
            <img
              :src="userGroupImage"
              alt="User Types Classification"
              class="user-types-image"
              loading="lazy"
            />
            <div class="image-overlay">
              <img
                :src="eyeIcon"
                alt="View fullscreen"
                class="eye-icon-overlay"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Time-consuming Process Analysis & Goal Conversion -->
      <div
        id="time-analysis"
        class="time-analysis-section"
        :class="{ 'chinese-font': currentLanguage === 'chinese' }"
      >
        <h2 class="time-analysis-title">
          {{ currentContent.timeAnalysis.title }}
        </h2>

        <!-- Subtitle -->
        <p class="time-analysis-subtitle">
          {{ currentContent.timeAnalysis.subtitle }}
        </p>

        <!-- Time-consuming Process Analysis -->
        <div class="process-analysis">
          <div class="process-steps-list">
            <div
              v-for="(step, index) in currentContent.timeAnalysis.steps"
              :key="index"
              class="step-row"
            >
              <p class="step-name">{{ step.label }}</p>
              <div class="step-time-badge" :class="step.timeClass">
                <p class="time-text">{{ step.time }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Opportunities Section -->
        <div class="opportunities-section">
          <div class="opportunities-content">
            <div class="bullet-icon">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="8" cy="8" r="8" fill="#1853DD" />
              </svg>
            </div>
            <p class="opportunities-text">
              {{ currentContent.timeAnalysis.opportunities }}
            </p>
          </div>
        </div>

        <!-- Goal Conversion -->
        <div class="goals-conversion">
          <div class="goal-item left-goal">
            <div class="goal-header">
              <div class="arrow-icon up-arrow">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 35V5"
                    stroke="black"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M30 15L20 5L10 15"
                    stroke="black"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <h3 class="goal-title">
                {{ currentContent.timeAnalysis.leftGoalTitle }}
              </h3>
            </div>
            <p class="goal-description">
              {{ currentContent.timeAnalysis.productGoal }}
            </p>
          </div>

          <!-- Center Arrow -->
          <div class="center-arrow">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 12H19"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 5L19 12L12 19"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>

          <div class="goal-item right-goal">
            <div class="goal-header">
              <div class="arrow-icon down-arrow">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 5V35"
                    stroke="black"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10 25L20 35L30 25"
                    stroke="black"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <h3 class="goal-title">
                {{ currentContent.timeAnalysis.rightGoalTitle }}
              </h3>
            </div>
            <p class="goal-description">
              {{ currentContent.timeAnalysis.designGoal }}
            </p>
          </div>
        </div>

        <!-- View Detail Link -->
        <div class="view-detail-link" @click="toggleDetailImage">
          <div class="eye-icon">
            <img :src="eyeIcon" alt="Eye" class="eye-image" loading="eager" />
          </div>
          <p class="view-detail-text">
            {{ currentContent.timeAnalysis.viewDetail }}
          </p>
        </div>

        <!-- Detail Image -->
        <div v-if="showDetailImage" class="detail-image-container">
          <img
            :src="cjImg"
            alt="Detail Image"
            class="detail-image"
            loading="lazy"
          />
        </div>
      </div>

      <!-- Problem Analysis Section -->
      <div
        id="problem-analysis"
        class="problem-analysis-section"
        :class="{ 'chinese-font': currentLanguage === 'chinese' }"
      >
        <h2 class="problem-analysis-title">
          {{ currentContent.problemAnalysis.title }}
        </h2>
        <div class="problem-analysis-items">
          <div
            v-for="(item, index) in currentContent.problemAnalysis.items"
            :key="index"
            class="problem-analysis-item"
            :class="{ 'reference-row': index === 1 }"
          >
            <div
              ref="problemBoxRefs"
              class="problem-box"
              :class="{ 'auto-width': index === 1 }"
            >
              <p class="problem-text">{{ item.problem }}</p>
            </div>
            <div class="arrow-container">
              <svg
                width="48"
                height="24"
                viewBox="0 0 48 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M44 12H4"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M36 6L44 12L36 18"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div
              ref="solutionBoxRefs"
              class="solution-box"
              :class="{ 'auto-width': index === 1 }"
            >
              <p class="solution-text">{{ item.solution }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Problems and Design Solutions -->
      <div id="solutions" class="problems-solutions-section">
        <!-- Problem 1 -->
        <div
          v-for="(problem, problemIndex) in currentContent.problemsAndSolutions
            .problems"
          :key="problemIndex"
          :id="`problem-${problemIndex + 1}`"
          class="problem-container"
        >
          <h3 class="problem-title">{{ problem.title }}</h3>

          <div
            v-for="(step, stepIndex) in problem.steps"
            :key="stepIndex"
            class="problem-step"
          >
            <!-- Challenge Group -->
            <div v-if="hasChallengeContent(step)" class="challenge-group">
              <!-- Problem Description -->
              <p v-if="step.problemDescription" class="problem-description">
                {{ step.problemDescription }}
              </p>

              <!-- Step Header -->
              <div v-if="step.stepTime && step.stepTitle" class="step-header">
                <div
                  class="step-time-badge"
                  :class="{
                    'step7-badge':
                      step.stepTitle.includes('Step 7') ||
                      step.stepTitle.includes('Step7'),
                  }"
                >
                  <p class="time-text">{{ step.stepTime }}</p>
                </div>
                <h4 class="step-title">{{ step.stepTitle }}</h4>
              </div>

              <!-- Manual Title (for dashboard step in challenge) -->
              <h4
                v-if="step.manualTitle && !step.stepTime"
                class="manual-title"
              >
                {{ step.manualTitle }}
              </h4>

              <!-- User Feedback in Challenge -->
              <div
                v-if="step.feedback && !step.timeImprovement"
                class="user-feedback-section"
              >
                <p class="feedback-text">{{ step.feedback }}</p>
              </div>

              <!-- Challenge Image -->
              <div
                v-if="step.challengeImg"
                class="challenge-image-container image-clickable"
              >
                <div
                  class="image-wrapper"
                  @click="
                    openFullscreenImage(
                      getChallengeImage(step.challengeImg) || dataReportImg
                    )
                  "
                >
                  <img
                    :src="getChallengeImage(step.challengeImg) || dataReportImg"
                    alt="Challenge"
                    class="challenge-image"
                    loading="lazy"
                  />
                  <div class="image-overlay">
                    <img
                      :src="eyeIcon"
                      alt="View fullscreen"
                      class="eye-icon-overlay"
                      loading="eager"
                    />
                  </div>
                </div>
              </div>
            </div>

            <!-- Solution Group -->
            <div v-if="hasSolutionContent(step)" class="solution-group">
              <!-- Solution Title -->
              <h3 v-if="step.solutionTitle" class="solution-subtitle">
                {{ step.solutionTitle }}
              </h3>

              <!-- Satisfaction Score -->
              <p v-if="step.satisfactionScore" class="satisfaction-score">
                {{ step.satisfactionScore }}
              </p>

              <!-- Time Improvement -->
              <h3 v-if="step.timeImprovement" class="time-improvement-title">
                {{ step.timeImprovement }}
              </h3>

              <!-- Dashboard Title -->
              <h3 v-if="step.dashboardTitle" class="dashboard-subtitle">
                {{ step.dashboardTitle }}
              </h3>

              <!-- Solution Video -->
              <div v-if="step.solutionVideo" class="solution-video">
                <!-- Vimeo Embed for PR Assistant Video -->
                <div
                  v-if="step.solutionVideo === 'prAssistanceVideo'"
                  class="vimeo-embed-container"
                >
                  <div class="vimeo-wrapper">
                    <iframe
                      src="https://player.vimeo.com/video/1125080990?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                      frameborder="0"
                      allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                      referrerpolicy="strict-origin-when-cross-origin"
                      title="PR_Assistant"
                    ></iframe>
                  </div>
                </div>
              </div>

              <!-- Solution Video Code (for AI Rec Video) -->
              <div
                v-if="step.solutionVideoCode === 'airRecVideo'"
                class="solution-video vimeo-embed-container"
              >
                <div class="vimeo-wrapper">
                  <iframe
                    src="https://player.vimeo.com/video/1125080931?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                    frameborder="0"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    title="AIRec"
                  ></iframe>
                </div>
              </div>

              <!-- Solution Image -->
              <div
                v-if="step.solutionImg"
                class="solution-image-container image-clickable"
              >
                <div
                  class="image-wrapper"
                  @click="
                    openFullscreenImage(
                      step.solutionImg === 'riskMessageImg'
                        ? riskMessageImg
                        : null
                    )
                  "
                >
                  <img
                    v-if="step.solutionImg === 'riskMessageImg'"
                    :src="riskMessageImg"
                    loading="lazy"
                    alt="Solution"
                    class="solution-image"
                  />
                  <div class="image-overlay">
                    <img
                      :src="eyeIcon"
                      alt="View fullscreen"
                      class="eye-icon-overlay"
                      loading="eager"
                    />
                  </div>
                </div>
              </div>

              <!-- Solution Description -->
              <div v-if="step.solutionDescription" class="solution-description">
                <p>{{ step.solutionDescription }}</p>
              </div>

              <!-- Solution Images (first group - after solutionDescription) -->
              <template
                v-if="step.solutionImages && step.solutionImages.length"
              >
                <div
                  v-for="(imageKey, imgIndex) in step.solutionImages"
                  :key="imgIndex"
                  class="solution-image-container image-clickable"
                >
                  <div
                    class="image-wrapper"
                    @click="openFullscreenImage(getSolutionImage(imageKey))"
                  >
                    <img
                      :src="getSolutionImage(imageKey)"
                      alt="Solution"
                      class="solution-image"
                      loading="lazy"
                    />
                    <div class="image-overlay">
                      <img
                        :src="eyeIcon"
                        alt="View fullscreen"
                        class="eye-icon-overlay"
                      />
                    </div>
                  </div>
                </div>
              </template>

              <!-- Solution Description 2 -->
              <div
                v-if="step.solutionDescription2"
                class="solution-description"
              >
                <p>{{ step.solutionDescription2 }}</p>
              </div>

              <!-- Solution Images 2 (second group - after solutionDescription2) -->
              <template
                v-if="step.solutionImages2 && step.solutionImages2.length"
              >
                <div
                  v-for="(imageKey, imgIndex) in step.solutionImages2"
                  :key="imgIndex"
                  class="solution-image-container image-clickable"
                >
                  <div
                    class="image-wrapper"
                    @click="openFullscreenImage(getSolutionImage(imageKey))"
                  >
                    <img
                      :src="getSolutionImage(imageKey)"
                      alt="Solution"
                      class="solution-image"
                      loading="lazy"
                    />
                    <div class="image-overlay">
                      <img
                        :src="eyeIcon"
                        alt="View fullscreen"
                        class="eye-icon-overlay"
                      />
                    </div>
                  </div>
                </div>
              </template>

              <!-- Dashboard Image -->
              <div
                v-if="step.dashboardImg && step.dashboardImg.trim() !== ''"
                class="dashboard-image image-clickable"
              >
                <div
                  class="image-wrapper"
                  @click="openFullscreenImage(dashboardImg)"
                >
                  <img
                    :src="dashboardImg"
                    alt="Dashboard"
                    class="dashboard-img"
                    loading="lazy"
                  />
                  <div class="image-overlay">
                    <img
                      :src="eyeIcon"
                      alt="View fullscreen"
                      class="eye-icon-overlay"
                      loading="eager"
                    />
                  </div>
                </div>
              </div>

              <!-- Dashboard Description -->
              <div
                v-if="step.dashboardDescription"
                class="solution-description"
              >
                <p>{{ step.dashboardDescription }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Result Section -->
      <section id="result" class="result-section">
        <h2 class="result-title">
          {{ currentContent.result.title }}
        </h2>

        <!-- UI Image -->
        <div class="result-image-container image-clickable">
          <div class="image-wrapper" @click="openFullscreenImage(resultImage)">
            <img
              :src="resultImage"
              alt="eMall UI Design"
              class="result-image"
              loading="lazy"
            />
            <div class="image-overlay">
              <img
                :src="eyeIcon"
                alt="View fullscreen"
                class="eye-icon-overlay"
              />
            </div>
          </div>
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
    </main>

    <!-- Fullscreen Image Modal -->
    <div
      v-if="showFullscreenImage"
      class="fullscreen-modal"
      @click="closeFullscreenImage"
    >
      <div class="fullscreen-modal-content" @click.stop>
        <button class="close-button" @click="closeFullscreenImage">×</button>
        <img
          :src="fullscreenImage"
          alt="Fullscreen view"
          class="fullscreen-image"
          loading="eager"
        />
      </div>
    </div>

    <!-- Footer -->
    <div class="footer">
      <p>{{ currentContent.footer }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed, watch, nextTick } from "vue";
import Header from "../Header.vue";
import FloatingMenu from "../FloatingMenu.vue";

// Import images
import arrowUpIcon from "../../assets/arrowup.svg";
import dataPic from "../../assets/video/eMall/datapic.png";
import userGroupImg from "../../assets/video/eMall/user group.png";
import userGroupCNImg from "../../assets/video/eMall/user groupCN.png";
import journeyImg from "../../assets/video/eMall/Journey.png";
import brandsImg from "../../assets/video/eMall/brands.png";
import productSelectionImg from "../../assets/video/eMall/ptoductSelection.png";
import psUserImg from "../../assets/video/eMall/psUser.png";
import similarItemsImg from "../../assets/video/eMall/similarItems.png";
import cardRenewImg from "../../assets/video/eMall/cardRenew.png";
import copyItemImg from "../../assets/video/eMall/copyItem.png";
import tmeImg from "../../assets/video/eMall/TME.png";
import messageImg from "../../assets/video/eMall/message.png";
import mtorImg from "../../assets/video/eMall/MTOR.png";
import dataReportImg from "../../assets/video/eMall/data report.png";
import mdrImg from "../../assets/video/eMall/MDR.png";
import dashboardImg from "../../assets/video/eMall/dashboard.png";
import uiImg from "../../assets/video/eMall/UI.png";
import resultImg from "../../assets/video/eMall/result.png";
import resultCNImg from "../../assets/video/eMall/resultCN.png";
import meImg from "../../assets/video/eMall/Me.png";
import leadPMImg from "../../assets/video/eMall/LeadPM.png";
import oldUIImg from "../../assets/video/eMall/oldUI.png";
import cjLabelImg from "../../assets/video/eMall/cjLabel.png";
import eyeIcon from "../../assets/eye.svg";
import cjImg from "../../assets/video/eMall/CJ.jpg";
import pc1Img from "../../assets/video/eMall/pc1.jpg";
import pc2Img from "../../assets/video/eMall/pc2.jpg";
import reorderImg from "../../assets/video/eMall/reorder.png";
import s3problemImg from "../../assets/video/eMall/S3problem.png";
import refreshIcon from "../../assets/video/eMall/refresh.svg";
import satisfiedIcon from "../../assets/video/eMall/satisfied.svg";
import intelligenceAiIcon from "../../assets/video/eMall/intelligence-ai.svg";
import submitPRStepsImg from "../../assets/video/eMall/submitPRSteps.png";
import submitPRStepsCNImg from "../../assets/video/eMall/submitPRStepsCN.png";
import trackOrderStepsImg from "../../assets/video/eMall/trackOrderSteps.png";
import trackOrderStepsCNImg from "../../assets/video/eMall/trackOrderStepsCN.png";
import riskMessageImg from "../../assets/video/eMall/RiskMessage.png";
import analyzeOrderStepsImg from "../../assets/video/eMall/AnalyzeOrderSteps.png";
import analyzeOrderStepsCNImg from "../../assets/video/eMall/AnalyzeOrderStepsCN.png";
import productSelectionStepsImg from "../../assets/video/eMall/productSelectionSteps.png";
import productSelectionStepsCNImg from "../../assets/video/eMall/productSelectionStepsCN.png";
import pathImg from "../../assets/video/eMall/path.png";
import path1CNImg from "../../assets/video/eMall/path1CN.png";
import path2Img from "../../assets/video/eMall/path2.png";
import path2CNImg from "../../assets/video/eMall/path2CN.png";
import pathResultImg from "../../assets/video/eMall/pathResult.png";

// Language state
const currentLanguage = ref("english");

// View detail state
const showDetailImage = ref(false);

// Toggle detail image
const toggleDetailImage = () => {
  showDetailImage.value = !showDetailImage.value;
};

// Fullscreen image viewer state
const fullscreenImage = ref(null);
const showFullscreenImage = ref(false);

// Open image in fullscreen
const openFullscreenImage = (imageSrc) => {
  fullscreenImage.value = imageSrc;
  showFullscreenImage.value = true;
  document.body.style.overflow = "hidden";
};

// Close fullscreen image
const closeFullscreenImage = () => {
  showFullscreenImage.value = false;
  fullscreenImage.value = null;
  document.body.style.overflow = "";
};

// Handle ESC key to close fullscreen
const handleEscapeKey = (event) => {
  if (event.key === "Escape" && showFullscreenImage.value) {
    closeFullscreenImage();
  }
};

// Helper functions to check if step has challenge or solution content
const hasChallengeContent = (step) => {
  return (
    !!step.problemDescription ||
    !!(step.stepTime && step.stepTitle) ||
    !!step.challengeImg ||
    (step.manualTitle && !step.stepTime)
  );
};

const hasSolutionContent = (step) => {
  return (
    !!step.timeImprovement ||
    !!step.solutionTitle ||
    !!step.dashboardTitle ||
    !!step.solutionVideo ||
    !!step.solutionVideoCode ||
    !!step.solutionImg ||
    !!step.solutionImages ||
    !!step.solutionImages2 ||
    !!step.dashboardImg ||
    !!step.solutionDescription ||
    !!step.solutionDescription2 ||
    !!step.satisfactionScore
  );
};

const observers = ref([]);

// Problem analysis box refs
const problemBoxRefs = ref([]);
const solutionBoxRefs = ref([]);

// Computed property for floating menu items
const floatingMenuItems = computed(() => {
  const menuData = currentContent.value.menuItems || {};
  return [
    {
      id: "project-overview",
      label: menuData.projectOverview || "Project Overview",
      expanded: false,
    },
    {
      id: "background",
      label: menuData.background || "Background",
      expanded: false,
    },
    {
      id: "challenge",
      label: menuData.challenge || "Challenge",
      expanded: false,
    },
    {
      id: "user-groups",
      label: menuData.userGroups || "User Groups",
      expanded: false,
    },
    {
      id: "time-analysis",
      label: menuData.timeAnalysis || "Process & Goal Alignment",
      expanded: false,
    },
    {
      id: "problem-analysis",
      label: menuData.problemAnalysis || "Problem Analysis & Design Strategy",
      expanded: false,
    },
    {
      id: "problem-1",
      label: menuData.problem1 || "Problem1 & Solution 1",
      expanded: false,
    },
    {
      id: "problem-2",
      label: menuData.problem2 || "Problem2 & Solution 2",
      expanded: false,
    },
    {
      id: "problem-3",
      label: menuData.problem3 || "Problem3 & Solution 3",
      expanded: false,
    },
    {
      id: "result",
      label: menuData.result || "Result",
      expanded: false,
    },
  ];
});

// Translation data
const translations = {
  english: {
    title: "eMall Redesign",
    date: "2024.10-2025.7",
    menuTitle: "Contents",
    menuItems: {
      projectOverview: "Project Overview",
      background: "Background & Goal",
      challenge: "User positioning",
      userGroups: "User Groups",
      timeAnalysis: "Process & Goal Alignment",
      problemAnalysis: "Problem Analysis & Design Strategy",
      problem1: "Problem1 & Solution 1",
      problem2: "Problem2 & Solution 2",
      problem3: "Problem3 & Solution 3",
      result: "Result",
    },
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
        feedback1:
          '"After the table is reviewed, I have to add each item into the PR one by one — sometimes 10 lines, sometimes 200, Sometimes the items are even taken off the shelves from the store, I need to find substitutes again — which takes up to two hours. Customizing the item categories and descriptions is also challenging"',
        timeImprovement: "2 hours →  mins",
        solutionTitle: "Auto-Generate Purchase Requests from Product Sheets",
        description:
          "Seamlessly converts product sheet Excel files into structured Purchase Requests with a single click. Along the process, it intelligently recommends alternatives for unavailable items, automatically maps products to custom categories, and generates clear product descriptions — making procurement faster, smarter, and more reliable.",
      },
      feature3: {
        title: "Real-Time Progress and Risk Updates in Chat",
        manualTrackingTitle: "Manual Tracking & Overdue Risk",
        feedback1:
          "\"I have to check the system every day to see if my PR has been converted to a PO, and I'm always worried about missing deadlines. It's frustrating when a PR becomes overdue because I didn't check the system in time.\"",
        timeImprovement: "15 mins → No login required to view",
        solutionTitle: "Real-Time Progress and Risk Updates in Chat",
        description:
          "All procurement-related updates, including purchase request status, purchase order status, and logistics status, will be real-time notified in the company's most frequently used chat software, eliminating the need for procurement staff to log into the system daily to check statuses.",
      },
      feature4: {
        title: "Manual Data Reporting & Order Analytics Dashboard",
        manualDataReportingTitle: "Manual Data Reporting",
        dataReportingFeedback:
          '"Every two weeks, I export all orders, filter for categories my manager cares about, analyze pending PO, inspection, and receipt data, create charts in Excel, and report — it takes half to a full day."',
        timeImprovement: "4-8 hours → No analysis needed",
        dashboardTitle: "Order Analytics Dashboard",
        dashboardDescription:
          "The Order Dashboard clearly visualizes budget usage and the status of each product category, including items pending a purchase order (PO), pending receipt, and pending inspection. The dashboard also supports customizable metrics, allowing users to arrange the display as they wish.",
      },
    },
    projectInfo: {
      team: {
        title: "Team：",
        members: [
          "1 Lead Product Manager",
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
          "Propose design solutions to the Product Manager",
          "Deliver end-to-end design",
        ],
      },
    },
    notice:
      "<strong>Notice:</strong> Due to the confidential nature of the project, all data and business logic have been <strong>anonymized</strong>, and the design mockups have been <strong>completely reconstructed</strong> by me.",
    challengeSection: {
      title: "User positioning",
      dataTracking: {
        subtitle: "eMall's data tracking is lacking: ",
        description:
          "Currently, I can only analyze basic data such as active users per department, average pageviews per user, and average time on page.",
      },
      analysis: {
        item1:
          "Data shows <strong>Manufacturing</strong> and <strong>Procurement departments have a significant lead</strong> in average pageviews and time on page, suggesting they have <strong>professional buyers</strong>.",
        item2:
          "<strong>NextLab</strong> users also have a significant lead in numbers but low time on page, possibly indicating they are <strong>goal-oriented</strong>.",
        item3:
          "The Consumer <strong>Devices department</strong> ranks high in user count, but their <strong>low usage</strong> suggests many are <strong>new users</strong>.",
      },
      followUp: {
        speaker: "Me",
        message:
          "Time to conduct <strong>in-depth User Interviews</strong> from these 4 departments",
      },
    },
    userGroups: {
      title: "Classified user groups",
      description:
        "By distributing questionnaires among the user group, we identified 10 users and conducted in-depth interviews. I've categorized them into three user types. I found that the professional buyer's behavioral model can encompass the behaviors of the other two user types.",
    },
    timeAnalysis: {
      title: "Time Analysis & Goal Conversion",
      subtitle: "8-12 hours to complete the work",
      steps: [
        {
          label: "Step1: Reordering",
          time: ">10min",
          timeClass: "time-84px",
        },
        {
          label: "Step2: Product Selection",
          time: ">2h30min",
          timeClass: "time-139px",
        },
        {
          label: "Step3: Requirement Gathering",
          time: "1 week",
          timeClass: "time-344px",
        },
        {
          label: "Step4: Requirements Review",
          time: "2 weeks",
          timeClass: "time-698px",
        },
        {
          label: "Step5: Submit PR",
          time: ">2h",
          timeClass: "time-117px",
        },
        { label: "Step6: Track Order", time: ">15min", timeClass: "time-91px" },
        {
          label: "Step7: Analyze Order",
          time: "4-8h",
          timeClass: "time-213px",
        },
      ],
      opportunities: "Opportunities for experience enhancement",
      leftGoalTitle: "User Satisfaction",
      rightGoalTitle: "Reduce step time.",
      productGoal: "Product Goal: Enhance User Satisfaction",
      designGoal: "Design Goal: Minimize user time on steps.",
      viewDetail: "View Full Detail",
    },
    problemAnalysis: {
      title:
        "What causes such a long time to complete the work, and how can we address it?",
      items: [
        {
          problem: "The process is outdated.",
          solution: "Optimizing Processes & AI for Efficiency",
        },
        {
          problem: "Missing key information and features.",
          solution: "Extract key info, complete features & AI summarize.",
        },
        {
          problem: "Some operations have a long path.",
          solution: "Shorten Click Path",
        },
      ],
    },
    problemsAndSolutions: {
      title: "Problems and design solutions",
      problems: [
        {
          title: "Problem1: The process is outdated.",
          steps: [
            {
              stepTime: ">2 hour",
              stepTitle: "Step5: Submit PR",
              challengeImg: "submitPRStepsImg",
              timeImprovement: "2 hours →20 mins",
              solutionTitle:
                "Auto-Generate Purchase Requests from Product Sheets",
              solutionVideo: "prAssistanceVideo",
              solutionDescription:
                "Seamlessly converts product sheet Excel files into structured Purchase Requests with a single click. Along the process, it intelligently recommends alternatives for unavailable items, automatically maps products to custom categories, and generates clear product descriptions — making procurement faster, smarter, and more reliable.",
            },
            {
              stepTime: "> 15 min",
              stepTitle: "Step6: Manual Tracking & Overdue Risk",
              challengeImg: "trackOrderStepsImg",
              timeImprovement: "15 mins → No login required to view",
              solutionTitle: "Real-Time Progress and Risk Updates in Chat",
              solutionImg: "riskMessageImg",
              solutionDescription:
                "All procurement-related updates, including purchase request status, purchase order status, and logistics status, will be real-time notified in the company's most frequently used chat software, eliminating the need for procurement staff to log into the system daily to check statuses.",
            },
            {
              stepTime: "4-8 hour",
              stepTitle: "Step 7: Manually Analyze the Orders",
              challengeImg: "analyzeOrderStepsImg",
              timeImprovement: "4-8 hours → No analysis needed",
              dashboardImg: "dashboardImg",
              dashboardDescription:
                "The Order Dashboard clearly visualizes budget usage and the status of each product category, including items pending a purchase order (PO), pending receipt, and pending inspection. The dashboard also supports customizable metrics, allowing users to arrange the display as they wish.",
            },
          ],
        },
        {
          title: "Problem2: Missing key information and features.",
          steps: [
            {
              stepTime: ">2h30min",
              stepTitle: "Step2: Product Selection",
              challengeImg: "productSelectionStepsImg",
              timeImprovement: "Product Selection: 15 min/item → 8 min/item",
              satisfactionScore:
                "83.74% user satisfaction/indifference to modification plans",
              solutionDescription:
                "Simplify the non-clickable immediate purchase button, make key parameters more visible, and clearly display important indicators such as delivery time and product status labels. Add a product comparison feature.",
              solutionImages: ["cardRenew"],
              solutionDescription2:
                "Similar recommendations will display products with similar parameters, reducing the time users spend switching back to the search results page or re-entering keywords for another search, thereby improving the efficiency of locating products.",
              solutionImages2: ["similarItems"],
            },
            {
              timeImprovement: "Product Comparison: 30min → 5min",
              solutionImages: ["pc1", "pc2"],
            },
            {
              timeImprovement:
                "2h30min → mins: What if AI can address all the problems?",
              solutionVideoCode: "airRecVideo",
            },
          ],
        },
        {
          title: "Problem3: Some operations have a long path.",
          steps: [
            {
              problemDescription:
                "❌ The old version's path for adding shelf products has changed, which can easily confuse users.",
              challengeImg: "pathImg",
              solutionTitle:
                "✅ Redesign Proposal: Slide-out Simple Search Panel",
              timeImprovement: "5 steps → 3 steps",
              solutionDescription:
                "This plan has a moderate development volume, no page transitions, and intuitive interactions, making it suitable for the final launch.",
              solutionImages: ["pathResult"],
            },
            {
              problemDescription:
                "❌ The click path is too long, making it too complicated to locate the product.",
              challengeImg: "path2Img",
              solutionTitle:
                "✅ Move purchased items to the homepage module, reducing the click path for historical products",
              timeImprovement: "5 steps → 3 steps, 10 min → 2 min.",
              solutionImages: ["reorder"],
            },
          ],
        },
      ],
    },
    result: {
      title: "Result",
      satisfactionScore: "86.39",
      satisfactionLabel: "User Satisfaction Score",
      satisfactionDescription:
        "Collected feedback from 996 users, with the questionnaire covering 8 modules and 26 questions; the score is calculated using the SUS standard.",
      stepsReduction: "7",
      stepsAfter: "5",
      stepsLabel: "Steps",
      stepsDescription:
        "The ordering process has been reduced from 7 steps to 5 steps.",
      efficiencyImprovement: "20%",
      efficiencyLabel: "Minimum Efficiency Boost",
      efficiencyDescription:
        "Minimum order processing efficiency has increased by 20%.",
    },
    background: {
      title: "Background & Goal",
      backgroundSubtitle: "Background:",
      backgroundText1:
        "eMall serves 130,000 Huawei employees for purchasing office supplies and equipment. It has faced criticism on internal forums.",
      backgroundText2:
        "In 2025, the eMall backend will migrate databases, taking this opportunity, the product team to refresh the UI and enhance the frontend user experience.",
      productGoalsTitle: "Product Goal:",
      productGoals: [
        {
          icon: "refresh",
          text: "Refresh the UI",
        },
        {
          icon: "satisfied",
          text: "Enhance the User Satisfaction ",
        },
        {
          icon: "intelligence-ai",
          text: "Transforming company tools with AI.",
        },
      ],
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
    menuTitle: "目录",
    menuItems: {
      projectOverview: "项目概述",
      background: "背景与目标",
      challenge: "用户定位",
      userGroups: "用户群体分类",
      timeAnalysis: "流程与目标对齐",
      problemAnalysis: "问题分析与设计策略",
      problem1: "问题1与解决方案1",
      problem2: "问题2与解决方案2",
      problem3: "问题3与解决方案3",
      result: "结果",
    },
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
        feedback1:
          '"表格审核后，我必须逐项将每个项目添加到采购请求中——有时10行，有时200行，有时商品甚至从商店下架，我需要再次寻找替代品——这需要长达两个小时。自定义项目类别和描述也很困难"',
        timeImprovement: "2小时 → 20分钟",
        solutionTitle: "一键从产品表格生成采购请求",
        description:
          "一键将产品表格（Excel）轻松转为结构化采购请求。在此过程中，系统会智能推荐缺货商品的替代选项，自动将产品归类到自定义类别，并生成清晰的产品描述——让采购流程更快速、更智能、更可靠。",
      },
      feature3: {
        title: "在聊天中即时查看进度与风险",
        manualTrackingTitle: "手动跟踪逾期风险",
        feedback1:
          '"我必须每天检查系统，看我的PR是否已转换为PO，我总是担心错过截止日期。当PR因为我没有及时检查系统而逾期时，这很令人沮丧。"',
        timeImprovement: "15分钟 → 无需登录查看",
        solutionTitle: "在聊天中即时查看进度与风险",
        description:
          "所有采购相关的更新——包括采购请求、订单以及物流状态——都会通过公司常用的聊天软件实时推送，让采购人员无需每天登录系统查看状态",
      },
      feature4: {
        title: "手动数据报告与订单分析仪表板",
        manualDataReportingTitle: "手动分析数据并制作报告",
        dataReportingFeedback:
          '"每两周，我导出所有订单，筛选领导关心的类别，分析待处理的采购订单、检验和收货数据，在Excel中创建图表并报告——这需要半天到一整天的时间。"',
        timeImprovement: "4-8小时 → 无需分析",
        dashboardTitle: "订单数据看板",
        dashboardDescription:
          "订单仪表板清晰地可视化预算使用情况和每个产品类别的状态，包括待处理采购订单（PO）、待收货和待检验的项目。仪表板还支持可自定义的指标，允许用户自由编排展示内容。",
      },
    },
    projectInfo: {
      team: {
        title: "团队：",
        members: [
          "1名首席产品经理",
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
      title: "用户定位",
      dataTracking: {
        subtitle: "eMall的数据跟踪不足：",
        description:
          "目前，我只能分析基本数据，如每个部门的活跃用户数、每个用户的平均页面浏览次数和平均页面停留时间。",
      },
      analysis: {
        item1:
          "数据显示<strong>制造部门</strong>和<strong>采购部门在人均浏览和停留时长上断层领先</strong>，可能存在<strong>专业采购员</strong>。",
        item2:
          "<strong>NextLab</strong>用户在数量上也断层领先，但页面停留时间较短，可能是有<strong>明确购买目标的用户</strong>。",
        item3:
          "<strong>消费者终端部门</strong>在用户数量方面排名很高，但<strong>使用不频繁</strong>可能存在<strong>新手用户</strong>。",
      },
      followUp: {
        speaker: "我",
        message: "是时候从这4个部门进行<strong>深度用户访谈</strong>了",
      },
    },
    userGroups: {
      title: "用户群体分类",
      description:
        "通过在用户群体中分发问卷，我们识别了10个用户并进行了深度访谈。我将他们分为三类用户类型。我发现，专业采购员的行为模式可以涵盖其他两类用户的行为模式。",
    },
    timeAnalysis: {
      title: "问题分析与目标转化",
      subtitle: "耗时过长，完成工作需要8-12小时。",
      steps: [
        {
          label: "Step1: 重新订购",
          time: ">10min",
          timeClass: "time-84px",
        },
        {
          label: "Step2: 产品选择",
          time: ">2h30min",
          timeClass: "time-139px",
        },
        {
          label: "Step3: 需求收集",
          time: "1 week",
          timeClass: "time-344px",
        },
        {
          label: "Step4: 需求审查",
          time: "2 weeks",
          timeClass: "time-698px",
        },
        {
          label: "Step5: 提交采购申请",
          time: ">2h",
          timeClass: "time-117px",
        },
        { label: "Step6: 跟踪订单", time: ">15min", timeClass: "time-91px" },
        {
          label: "Step7: 分析订单",
          time: "4-8h",
          timeClass: "time-213px",
        },
      ],
      opportunities: "体验优化机会",
      leftGoalTitle: "用户满意度",
      rightGoalTitle: "减少步骤时间。",
      productGoal: "产品目标：提升用户满意度",
      designGoal: "设计目标：减少用户在每个步骤上花费的时间。",
      viewDetail: "查看完整详情",
    },
    problemAnalysis: {
      title: "造成耗时的主要原因是什么，以及我们如何解决？",
      items: [
        {
          problem: "流程过于老旧。",
          solution: "优化流程并引入AI提高效率",
        },
        {
          problem: "缺少关键信息和功能。",
          solution: "提取关键信息，完善功能并由AI总结。",
        },
        {
          problem: "某些操作路径较长。",
          solution: "缩短点击路径",
        },
      ],
    },
    problemsAndSolutions: {
      title: "问题与设计解决方案",
      problems: [
        {
          title: "问题1：流程过于老旧。",
          steps: [
            {
              stepTime: ">2小时",
              stepTitle: "Step5: 提交采购申请",
              challengeImg: "submitPRStepsImg",
              timeImprovement: "2小时 → 20分钟",
              solutionTitle: "一键从产品表格生成采购请求",
              solutionVideo: "prAssistanceVideo",
              solutionDescription:
                "一键将产品表格（Excel）轻松转为结构化采购请求。在此过程中，系统会智能推荐缺货商品的替代选项，自动将产品归类到自定义类别，并生成清晰的产品描述——让采购流程更快速、更智能、更可靠。",
            },
            {
              stepTime: ">15分钟",
              stepTitle: "Step6: 手动跟踪与逾期风险",
              challengeImg: "trackOrderStepsImg",
              timeImprovement: "15分钟 → 无需登录查看",
              solutionTitle: "在聊天中即时查看进度与风险",
              solutionImg: "riskMessageImg",
              solutionDescription:
                "所有采购相关的更新——包括采购请求、订单以及物流状态——都会通过公司常用的聊天软件实时推送，让采购人员无需每天登录系统查看状态",
            },
            {
              stepTime: "4-8小时",
              stepTitle: "Step 7: 手动分析订单",
              challengeImg: "analyzeOrderStepsImg",
              timeImprovement: "4-8小时 → 无需分析",
              dashboardImg: "dashboardImg",
              dashboardDescription:
                "订单仪表板清晰地可视化预算使用情况和每个产品类别的状态，包括待处理采购订单（PO）、待收货和待检验的项目。仪表板还支持可自定义的指标，允许用户自由编排展示内容。",
            },
          ],
        },
        {
          title: "问题2：缺少关键信息和功能。",
          steps: [
            {
              stepTime: ">2小时30分钟",
              stepTitle: "Step2：产品选择",
              challengeImg: "productSelectionStepsImg",
              timeImprovement: "产品选择: 15 分钟/项 → 8 分钟/项",
              satisfactionScore: "83.74% 用户满意度/对修改方案表示无异议",
              solutionDescription:
                "简化不可点击的立即购买按钮，使关键参数更明显，并清晰显示重要指标，如交货时间和产品状态标签。添加产品对比功能。",
              solutionImages: ["cardRenew"],
              solutionDescription2:
                "相似推荐将显示具有相似参数的产品，减少用户切换回搜索结果页面或重新输入关键词进行另一次搜索的时间，从而提高定位产品的效率。",
              solutionImages2: ["similarItems"],
            },
            {
              timeImprovement: "产品对比: 30分钟 → 5分钟",
              solutionImages: ["pc1", "pc2"],
            },
            {
              timeImprovement: "2小时30分钟 → 分钟: 如果AI能够解决所有问题呢？",
              solutionVideoCode: "airRecVideo",
            },
          ],
        },
        {
          title: "问题3：某些操作路径较长。",
          steps: [
            {
              problemDescription:
                "❌ 旧版本的货架产品添加路径发生了变化，容易让用户感到困惑。",
              challengeImg: "pathImg",
              solutionTitle: "✅ 重新设计提案：滑出式简单搜索面板",
              timeImprovement: "5步 → 3步",
              solutionDescription:
                "该方案开发量适中，无页面跳转，交互直观，适合最终上线。",
              solutionImages: ["pathResult"],
            },
            {
              problemDescription: "❌ 点击路径过长，使定位产品变得过于复杂。",
              challengeImg: "path2Img",
              solutionTitle:
                "✅ 将已购买的商品移至首页模块，减少历史产品的点击路径",
              timeImprovement: "5步 → 3步，10分钟 → 2分钟。",
              solutionImages: ["reorder"],
            },
          ],
        },
      ],
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
      efficiencyLabel: "最低效率提升",
      efficiencyDescription: "订单处理效率最低提升了20%。",
    },
    background: {
      title: "背景与目标",
      backgroundSubtitle: "背景：",
      backgroundText1:
        "eMall为13万华为员工提供办公用品和设备采购服务。在内部论坛上受到了大量批评。",
      backgroundText2:
        "2025年，eMall后端将进行数据库迁移，借此机会，产品团队将刷新UI并提升前端用户体验。",
      productGoalsTitle: "产品目标：",
      productGoals: [
        {
          icon: "refresh",
          text: "刷新UI界面",
        },
        {
          icon: "satisfied",
          text: "提升用户满意度",
        },
        {
          icon: "intelligence-ai",
          text: "顺应公司内部工具智能化转型趋势，探索AI机会。",
        },
      ],
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

// Computed properties for challenge images based on language
const challengeImages = computed(() => {
  if (currentLanguage.value === "chinese") {
    return {
      submitPRStepsImg: submitPRStepsCNImg,
      trackOrderStepsImg: trackOrderStepsCNImg,
      analyzeOrderStepsImg: analyzeOrderStepsCNImg,
      productSelectionStepsImg: productSelectionStepsCNImg,
      pathImg: path1CNImg,
      path2Img: path2CNImg,
    };
  } else {
    return {
      submitPRStepsImg: submitPRStepsImg,
      trackOrderStepsImg: trackOrderStepsImg,
      analyzeOrderStepsImg: analyzeOrderStepsImg,
      productSelectionStepsImg: productSelectionStepsImg,
      pathImg: pathImg,
      path2Img: path2Img,
    };
  }
});

// Computed property for result image based on language
const resultImage = computed(() => {
  return currentLanguage.value === "chinese" ? resultCNImg : resultImg;
});

// Computed property for user group image based on language
const userGroupImage = computed(() => {
  return currentLanguage.value === "chinese" ? userGroupCNImg : userGroupImg;
});

const getChallengeImage = (imageKey) => {
  return challengeImages.value[imageKey] || null;
};

// Function to get solution image by key
const getSolutionImage = (imageKey) => {
  // Check if it's a language-aware challenge image
  if (imageKey === "path2Img") {
    return challengeImages.value[imageKey] || null;
  }

  const imageMap = {
    ptoductSelection: productSelectionImg,
    psUser: psUserImg,
    similarItems: similarItemsImg,
    cardRenew: cardRenewImg,
    pc1: pc1Img,
    pc2: pc2Img,
    pathResult: pathResultImg,
    reorder: reorderImg,
    riskMessageImg: riskMessageImg,
    dashboardImg: dashboardImg,
  };
  return imageMap[imageKey] || null;
};

// Handle language change
const handleLanguageChange = (language) => {
  currentLanguage.value = language;
};


// Initialize language from localStorage on mount
// Load Vimeo player script if not already loaded
const loadVimeoScript = () => {
  if (
    document.querySelector(
      'script[src="https://player.vimeo.com/api/player.js"]'
    )
  ) {
    return;
  }
  const script = document.createElement("script");
  script.src = "https://player.vimeo.com/api/player.js";
  script.async = true;
  document.body.appendChild(script);
};

onMounted(() => {
  const savedLanguage = localStorage.getItem("portfolioLanguage");
  if (
    savedLanguage &&
    (savedLanguage === "english" || savedLanguage === "chinese")
  ) {
    currentLanguage.value = savedLanguage;
  }

  // Load Vimeo script for embedded videos
  loadVimeoScript();

  // Add ESC key listener for closing fullscreen
  document.addEventListener("keydown", handleEscapeKey);

  // Sync problem analysis box widths
  setTimeout(() => {
    syncProblemAnalysisWidths();
  }, 200);

  // Listen for window resize to resync widths
  window.addEventListener("resize", syncProblemAnalysisWidths);
});

// Function to sync problem and solution box widths
const syncProblemAnalysisWidths = () => {
  // Only sync on desktop (check if items are in row layout)
  const firstItem = problemBoxRefs.value[0];
  if (!firstItem) return;

  const itemParent = firstItem.closest(".problem-analysis-item");
  if (!itemParent) return;

  const computedStyle = window.getComputedStyle(itemParent);
  if (computedStyle.flexDirection === "column") {
    // Mobile layout, don't sync widths
    return;
  }

  if (problemBoxRefs.value.length < 3 || solutionBoxRefs.value.length < 3) {
    return;
  }

  // Get reference row (index 1) widths
  const referenceProblemBox = problemBoxRefs.value[1];
  const referenceSolutionBox = solutionBoxRefs.value[1];

  if (!referenceProblemBox || !referenceSolutionBox) {
    return;
  }

  const problemWidth = referenceProblemBox.offsetWidth;
  const solutionWidth = referenceSolutionBox.offsetWidth;

  // Apply widths to other rows (index 0 and 2)
  if (problemBoxRefs.value[0]) {
    problemBoxRefs.value[0].style.width = `${problemWidth}px`;
  }
  if (problemBoxRefs.value[2]) {
    problemBoxRefs.value[2].style.width = `${problemWidth}px`;
  }

  if (solutionBoxRefs.value[0]) {
    solutionBoxRefs.value[0].style.width = `${solutionWidth}px`;
  }
  if (solutionBoxRefs.value[2]) {
    solutionBoxRefs.value[2].style.width = `${solutionWidth}px`;
  }
};

// Watch for language changes and resync widths
watch(currentLanguage, () => {
  nextTick(() => {
    setTimeout(() => {
      syncProblemAnalysisWidths();
    }, 100);
  });
});

// Cleanup observers on unmount
onUnmounted(() => {
  observers.value.forEach((observer) => observer.disconnect());
  observers.value = [];
  document.removeEventListener("keydown", handleEscapeKey);
  window.removeEventListener("resize", syncProblemAnalysisWidths);
  // Cleanup body overflow in case modal is still open
  if (showFullscreenImage.value) {
    document.body.style.overflow = "";
  }
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
  margin-bottom: 32px;
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

/* UI Showcase Section */
.ui-showcase-section {
  width: 100%;
}

.ui-image-container {
  width: 100%;
  display: flex;
  justify-content: center;
}

.ui-showcase-image {
  width: 100%;
  max-width: 1202px;
  height: auto;
  display: block;
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
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

/* Project Info Card Styles */
.project-info-card {
  background: white;
  display: flex;
  gap: 60px;
  width: 100%;
  max-width: 1144px;
  margin-top: 32px;
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
  display: block;
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

.analysis-list {
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  font-weight: 400;
  color: #595959;
  line-height: normal;
  margin: 0;
  padding-left: 27px;
  list-style-type: decimal;
}

.analysis-list li {
  margin: 0 0 8px 0;
  line-height: normal;
}

.analysis-list li:last-child {
  margin-bottom: 0;
}

.analysis-list li strong {
  font-weight: 600;
  color: #595959;
}

/* Follow-up Message styles */
.follow-up-message {
  display: flex;
  align-items: center;
  gap: 32px;
  justify-content: flex-end;
  margin-top: 32px;
  width: 100%;
}

.follow-up-bubble {
  background-color: #f4f7ff;
  border: none;
  max-width: 1088px;
  flex: 1;
}

.follow-up-bubble p {
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  font-weight: 400;
  color: #595959;
  margin: 0;
  line-height: 1.4;
}

.follow-up-bubble p strong {
  font-weight: 600;
  color: #595959;
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
  display: block;
}

/* Time Analysis section styles */
.time-analysis-section {
  margin: 160px 0;
  width: 100%;
}

/* Chinese font styles */
.time-analysis-section.chinese-font .step-label,
.time-analysis-section.chinese-font .step-time,
.time-analysis-section.chinese-font .goal-description {
  font-family: "PingFang SC", sans-serif;
}

.problem-analysis-section.chinese-font .problem-text,
.problem-analysis-section.chinese-font .solution-text {
  font-family: "PingFang SC", sans-serif;
}

.time-analysis-title {
  font-family: "Poppins", sans-serif;
  font-size: 24px;
  font-weight: 600;
  color: #000000;
  margin: 0 0 16px 0;
  line-height: normal;
}

.time-analysis-subtitle {
  font-family: "Poppins", sans-serif;
  font-size: 48px;
  font-weight: 600;
  color: #000000;
  margin: 0 0 32px 0;
  line-height: normal;
}

/* Process Analysis Styles */
.process-analysis {
  margin-bottom: 48px;
}

.process-steps-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
}

.step-row {
  display: flex;
  gap: 16px;
  align-items: center;
  width: 100%;
}

.step-name {
  font-family: "Poppins", "Noto Sans JP", sans-serif;
  font-size: 18px;
  font-weight: 400;
  color: #030303;
  margin: 0;
  line-height: normal;
  width: 300px;
  flex-shrink: 0;
}

.step-time-badge {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 0;
  border-radius: 100px;
  flex-shrink: 0;
}

.time-text {
  font-family: "PingFang SC", sans-serif;
  font-size: 18px;
  font-weight: 600;
  color: white;
  margin: 0;
  line-height: normal;
  white-space: nowrap;
  text-align: right;
}

/* Time class styles */
.time-blue {
  background-color: #1853dd;
}

.time-blue .time-text {
  color: white;
}

/* Specific width classes based on design */
.time-139px {
  background-color: #1853dd !important;
  width: 139px !important;
}

.time-344px {
  background-color: #efefef !important;
  width: 344px !important;
}

.time-344px .time-text {
  color: #030303 !important;
}

.time-84px {
  background-color: #1853dd !important;
  width: 84px !important;
}

.time-698px {
  background-color: #efefef !important;
  width: 698px !important;
}

.time-698px .time-text {
  color: #030303 !important;
}

.time-117px {
  background-color: #1853dd !important;
  width: 117px !important;
}

.time-91px {
  background-color: #1853dd !important;
  width: 91px !important;
}

.time-213px {
  background-color: #0638ae !important;
  width: 213px !important;
}

/* Opportunities Section Styles */
.opportunities-section {
  margin: 32px 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.opportunities-content {
  display: flex;
  gap: 10px;
  align-items: center;
}

.bullet-icon {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.opportunities-text {
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  font-weight: 400;
  color: #000000;
  margin: 0;
  line-height: 1.32;
  letter-spacing: -0.4px;
  white-space: nowrap;
}

/* Goals Conversion Styles */
.goals-conversion {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 32px;
  margin-bottom: 32px;
}

.view-detail-link {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-bottom: 32px;
}

.goal-item {
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
}

.goal-header {
  display: flex;
  align-items: center;
  gap: 32px;
  margin-bottom: 8px;
}

.arrow-icon {
  flex-shrink: 0;
}

.arrow-icon svg {
  width: 40px;
  height: 40px;
}

.goal-title {
  font-family: "Poppins", sans-serif;
  font-size: 48px;
  font-weight: 600;
  color: #000000;
  margin: 0;
  line-height: 1.2;
  letter-spacing: -1.056px;
  white-space: nowrap;
}

.goal-description {
  font-family: "Poppins", "Noto Sans JP", sans-serif;
  font-size: 18px;
  font-weight: 400;
  color: #000000;
  line-height: 1.4;
  margin: 0;
}

.center-arrow {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}

.center-arrow svg {
  width: 24px;
  height: 24px;
}

.view-detail-link:hover {
  background-color: #f5f5f5;
  border-radius: 4px;
}

.eye-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 14px;
  height: 14px;
}

.eye-image {
  width: 14px;
  height: 14px;
  object-fit: contain;
}

.view-detail-text {
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #000000;
  margin: 0;
  line-height: 16px;
  white-space: nowrap;
}

.detail-image-container {
  margin-top: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  animation: fadeIn 0.3s ease-in-out;
}

/* Responsive Design for Time Analysis */
@media (max-width: 1024px) {
  .goals-conversion {
    flex-direction: column;
    gap: 40px;
  }

  .goal-header {
    justify-content: center;
    text-align: center;
  }

  .center-arrow {
    transform: rotate(90deg);
    margin: 20px 0;
  }

  .goal-title {
    font-size: 36px;
  }

  .step-name {
    width: 250px;
    font-size: 16px;
  }

  .time-text {
    font-size: 16px;
  }

  .opportunities-text {
    font-size: 18px;
  }

  .step-time-badge {
    width: 100px;
  }

  .step-time-badge .time-text {
    font-size: 14px;
  }

  .step-title {
    font-size: 18px;
  }

  .feedback-text {
    font-size: 16px;
  }
}

@media (max-width: 768px) {
  .goal-header {
    flex-direction: column;
    gap: 16px;
    text-align: center;
  }

  .goal-title {
    font-size: 28px;
  }

  .goal-description {
    font-size: 16px;
  }

  .arrow-icon svg {
    width: 32px;
    height: 32px;
  }

  .step-row {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }

  .step-name {
    width: 100%;
    font-size: 14px;
  }

  .time-text {
    font-size: 14px;
  }

  .opportunities-text {
    font-size: 16px;
  }

  .step-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }

  .step-time-badge {
    width: 80px;
  }

  .step-time-badge .time-text {
    font-size: 12px;
  }

  /* Responsive time badge widths */
  .time-139px,
  .time-344px,
  .time-84px,
  .time-698px,
  .time-117px,
  .time-91px,
  .time-213px {
    width: 80px;
  }

  .step-title {
    font-size: 16px;
  }

  .feedback-text {
    font-size: 14px;
  }

  /* Scale down time badge widths for mobile */
  .time-139px,
  .time-344px,
  .time-84px,
  .time-698px,
  .time-117px,
  .time-91px,
  .time-213px {
    width: auto;
    min-width: 80px;
  }
}

@media (max-width: 480px) {
  .goal-title {
    font-size: 24px;
  }

  .goal-description {
    font-size: 14px;
  }

  .step-name {
    font-size: 12px;
  }

  .time-text {
    font-size: 12px;
  }
}

.detail-image {
  width: 100%;
  max-width: 100%;
  height: auto;
  padding: 0;
  box-shadow: none;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Problem Analysis section styles */
.problem-analysis-section {
  margin: 160px 0;
  width: 100%;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
}

.problem-analysis-title {
  font-family: "Poppins", sans-serif;
  font-size: 24px;
  font-weight: 600;
  color: #000000;
  margin: 0 0 32px 0;
  line-height: normal;
}

.problem-analysis-items {
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;
}

.problem-analysis-item {
  display: flex;
  align-items: center;
  gap: 32px;
  width: 100%;
}

.problem-box {
  background-color: #1853dd;
  border-radius: 8px;
  padding: 24px 16px;
  flex-shrink: 0;
}

.problem-box.auto-width {
  width: fit-content;
}

.problem-text {
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  font-weight: 500;
  color: #ffffff;
  margin: 0;
  line-height: 1.34;
  letter-spacing: -0.12px;
  white-space: nowrap;
}

.arrow-container {
  flex-shrink: 0;
  width: 48px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.solution-box {
  background-color: #000000;
  border-radius: 8px;
  padding: 24px 16px;
  flex-shrink: 0;
}

.solution-box.auto-width {
  width: fit-content;
}

.solution-text {
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  font-weight: 500;
  color: #ffffff;
  margin: 0;
  line-height: 1.34;
  letter-spacing: -0.12px;
  white-space: nowrap;
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

.problem-container {
  display: flex;
  flex-direction: column;
  gap: 80px;
  width: 100%;
  margin-bottom: 160px;
}

.problem-container:last-child {
  margin-bottom: 0;
}

.problem-title {
  font-family: "Poppins", sans-serif;
  font-size: 24px;
  font-weight: 600;
  color: #000000;
  margin: 0;
  line-height: normal;
}

.problem-step {
  display: flex;
  flex-direction: column;
  gap: 48px;
  width: 100%;
}

.challenge-group {
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;
}

.problem-description {
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  font-weight: 400;
  color: #595959;
  line-height: 1.2;
  letter-spacing: -0.36px;
  margin: 0;
}

.solution-group {
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;
}

/* Remove margins from solution-group children to use gap instead */
.solution-group .time-improvement-title {
  margin: 0;
}

.solution-group .satisfaction-score {
  margin: 0;
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  font-weight: 400;
  color: #030303;
  line-height: normal;
}

.solution-group .solution-subtitle {
  margin: 0;
}

.solution-group .solution-video {
  margin: 0;
}

.solution-group .solution-description {
  margin: 0;
}

.solution-group .dashboard-subtitle {
  margin: 0;
}

.solution-group .dashboard-image {
  margin: 0;
}

.solution-group .solution-image-container {
  margin: 0;
}

.challenge-image-container {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0;
  box-shadow: none;
}

.image-clickable {
  cursor: pointer;
}

.image-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  display: inline-block;
  padding: 0;
  box-shadow: none;
}

/* Ensure image-wrapper works correctly in flex containers */
.ui-image-container .image-wrapper,
.old-ui-container .image-wrapper,
.data-image-container .image-wrapper,
.user-types-image-container .image-wrapper,
.result-image-container .image-wrapper,
.video-tme-image-container .image-wrapper,
.manual-tracking-image .image-wrapper,
.mtor-image-container .image-wrapper,
.data-report-image .image-wrapper,
.mdr-image-container .image-wrapper {
  width: 100%;
  height: 100%;
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}

.image-clickable:hover .image-overlay {
  opacity: 1;
}

.eye-icon-overlay {
  width: 48px;
  height: 48px;
  filter: brightness(0) invert(1);
}

.challenge-image {
  width: 100%;
  height: auto;
  display: block;
  border: none;
  box-shadow: none;
  padding: 0;
}

.challenges-section {
  margin-bottom: 64px;
}

/* Step Header Styles */
.step-header {
  display: flex;
  gap: 8px;
  align-items: flex-start;
}

.step-time-badge {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 0;
  border-radius: 100px;
  background-color: #1853dd;
  width: 128px;
  flex-shrink: 0;
}

.step-time-badge.step7-badge {
  background-color: #0638ae;
  width: 213px;
}

.step-time-badge .time-text {
  font-family: "PingFang SC", sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: white;
  margin: 0;
  line-height: normal;
  white-space: nowrap;
  text-align: right;
}

.step-title {
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  font-weight: 600;
  color: #000000;
  margin: 0;
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

.user-selection-image-container {
  margin: 32px 0;
  width: 100%;
  display: flex;
  justify-content: center;
}

.user-selection-image {
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

/* Time Improvement Title */
.time-improvement-title {
  font-family: "Poppins", sans-serif;
  font-size: 36px;
  font-weight: 500;
  color: #1853dd;
  margin: 0 0 32px 0;
  line-height: normal;
}

.user-feedback-section {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 0 0 32px 0;
  text-align: center;
}

.feedback-text {
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  font-weight: 400;
  color: #595959;
  line-height: normal;
  margin: 0;
  font-style: italic;
}

.feedback-text .highlight {
  text-decoration: underline;
  text-decoration-skip-ink: none;
  text-underline-position: from-font;
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
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.vimeo-embed-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.vimeo-wrapper {
  width: 100%;
  height: 100%;
  position: relative;
}

.vimeo-wrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.solution-image-container {
  width: 100%;
  max-width: 1000px;
  position: relative;
  padding: 0;
  box-shadow: none;
}

.solution-image-container .image-wrapper {
  width: 100%;
  position: relative;
  padding: 0;
}

.solution-image {
  width: 100%;
  height: auto;
  display: block;
  object-fit: contain;
  border: none;
  box-shadow: none;
  padding: 0;
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

/* Product Comparison Section */
.product-comparison-section {
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: flex-start;
}

.comparison-time-improvement {
  font-family: "Poppins", sans-serif;
  font-size: 36px;
  font-weight: 500;
  color: #000000;
  line-height: normal;
  margin: 0;
  width: min-content;
  min-width: 100%;
}

.comparison-title {
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  font-weight: 500;
  color: #000000;
  line-height: normal;
  margin: 0;
  width: min-content;
  min-width: 100%;
}

.comparison-images {
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;
}

.comparison-image-container {
  position: relative;
  width: 100%;
  padding: 0;
  box-shadow: none;
}

.comparison-image-container .image-wrapper {
  width: 100%;
  position: relative;
  padding: 0;
}

.comparison-image {
  width: 100%;
  height: auto;
  object-fit: contain;
  display: block;
  border: none !important;
  outline: none !important;
  box-shadow: none !important;
  background: transparent !important;
  padding: 0 !important;
}

.view-design-link {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px;
  box-sizing: border-box;
}

.eye-icon {
  width: 14px;
  height: 14px;
  flex-shrink: 0;
}

.view-design-text {
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #000000;
  line-height: 16px;
  white-space: nowrap;
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

.video-tme-image-container {
  margin: 32px 0;
  width: 100%;
  display: flex;
  justify-content: center;
}

.video-tme-image {
  width: 100%;
  max-width: 100%;
  height: auto;
  display: block;
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
  display: block;
}

.mtor-image-container {
  margin: 32px 0;
  width: 100%;
  display: flex;
  justify-content: center;
}

.mtor-image {
  width: 100%;
  max-width: 100%;
  height: auto;
  display: block;
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
  display: block;
}

.mdr-image-container {
  margin: 32px 0;
  width: 100%;
  display: flex;
  justify-content: center;
}

.mdr-image {
  width: 100%;
  max-width: 100%;
  height: auto;
  display: block;
}

/* Order Analytics Dashboard section styles */
.order-analytics-dashboard-section {
  margin-bottom: 0;
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
  padding: 0;
  box-shadow: none;
}

.dashboard-image .image-wrapper {
  display: inline-block;
  width: 100%;
  max-width: 100%;
  padding: 0;
}

.dashboard-img {
  width: 100%;
  max-width: 100%;
  height: auto;
  display: block;
  border: none;
  box-shadow: none;
  padding: 0;
}

/* Fullscreen Modal Styles */
.fullscreen-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  cursor: pointer;
}

.fullscreen-modal-content {
  position: relative;
  max-width: 95%;
  max-height: 95%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.fullscreen-image {
  max-width: 100%;
  max-height: 95vh;
  width: auto;
  height: auto;
  object-fit: contain;
}

.close-button {
  position: absolute;
  top: -40px;
  right: 0;
  background: transparent;
  border: none;
  color: white;
  font-size: 48px;
  font-weight: 300;
  cursor: pointer;
  line-height: 1;
  padding: 0;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s ease;
}

.close-button:hover {
  opacity: 0.7;
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
  display: block;
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

/* Background section styles */
.background-section {
  margin: 160px 0;
  width: 100%;
}

.background-content {
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;
  max-width: 1200px;
}

.old-ui-container {
  width: 100%;
  height: 440px;
  overflow: hidden;
  position: relative;
  margin-top: 16px;
}

.old-ui-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  display: block;
}

.background-title {
  font-family: "Poppins", sans-serif;
  font-size: 24px;
  font-weight: 600;
  color: #000000;
  margin: 0 0 32px 0;
  line-height: normal;
  text-align: left;
}

/* Background Description Styles */
.background-description {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.background-subtitle {
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  font-weight: 600;
  color: #000000;
  margin: 0;
  line-height: normal;
}

.background-text {
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  font-weight: 400;
  color: #595959;
  margin: 0;
  line-height: normal;
}

/* Product Goals Section Styles */
.product-goals-section {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.product-goals-title {
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  font-weight: 600;
  color: #000000;
  margin: 0;
  line-height: normal;
}

.product-goals-list {
  display: flex;
  gap: 8px;
  margin: 0;
}

.product-goal-card {
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: #f4f7ff;
  border-radius: 16px;
  padding: 16px;
  flex: 1;
  height: 59px;
}

.product-goal-icon {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
}

.goal-icon-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.product-goal-text {
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  font-weight: 600;
  color: #030303;
  margin: 0;
  line-height: normal;
  white-space: pre;
}

/* Responsive design */
@media (max-width: 768px) {
  .project-info-card {
    flex-direction: column;
    gap: 20px;
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

  .analysis-list {
    font-size: 16px;
    padding-left: 20px;
  }

  .follow-up-message {
    flex-direction: column;
    gap: 16px;
    align-items: center;
    justify-content: center;
  }

  .follow-up-bubble {
    max-width: 100%;
  }

  .follow-up-bubble p {
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

  .time-analysis-section {
    margin: 80px 0;
  }

  .time-analysis-title {
    font-size: 20px;
    margin-bottom: 24px;
  }

  .timeline-image {
    max-width: 100%;
  }

  .product-goal {
    flex-direction: column;
    gap: 16px;
    text-align: center;
  }

  .goal-text {
    font-size: 16px;
    white-space: normal;
  }

  .arrow-icon {
    transform: rotate(0deg);
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

  .time-improvement-title {
    font-size: 28px;
    margin-bottom: 24px;
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
    margin: 80px 0 0 0;
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

  .background-section {
    margin: 80px 0;
  }

  .background-content {
    gap: 24px;
  }

  .old-ui-container {
    height: 300px;
    margin-top: 24px;
  }

  .background-title {
    font-size: 20px;
    margin-bottom: 24px;
  }

  .background-subtitle,
  .product-goals-title {
    font-size: 18px;
  }

  .background-text {
    font-size: 16px;
  }

  .product-goals-list {
    flex-direction: column;
    gap: 8px;
  }

  .product-goal-card {
    width: 100%;
    height: auto;
    min-height: 59px;
  }

  .product-goal-text {
    font-size: 16px;
  }

  .product-goal-icon {
    width: 18px;
    height: 18px;
  }

  /* Product Comparison responsive styles */
  .comparison-time-improvement {
    font-size: 28px;
  }

  .comparison-title {
    font-size: 18px;
  }

  .comparison-images {
    gap: 24px;
  }

  .view-design-text {
    font-size: 12px;
  }

  .problem-analysis-section {
    margin: 80px 0;
  }

  .problem-analysis-title {
    font-size: 20px;
    margin-bottom: 24px;
  }

  .problem-analysis-items {
    gap: 24px;
  }

  .problem-analysis-item {
    flex-direction: column;
    gap: 16px;
    align-items: stretch;
  }

  .problem-analysis-item:first-child .problem-box,
  .problem-box {
    width: 100%;
    min-width: 100%;
  }

  .problem-text,
  .solution-text {
    white-space: normal;
  }

  .arrow-container {
    transform: rotate(90deg);
    width: 24px;
    height: 48px;
  }

  .solution-box {
    width: 100%;
    min-width: 100%;
  }
}
</style>
