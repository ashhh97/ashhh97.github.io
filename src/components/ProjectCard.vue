<template>
  <div
    class="project-card"
    :class="cardClasses"
    @click="handleCardClick"
    ref="cardRef"
  >
    <!-- Project Image Container -->
    <div class="project-image-container">
      <div
        class="project-image"
        :style="{ backgroundImage: `url(${imageUrl})` }"
      >
        <!-- Disabled Overlay -->
        <div v-if="isDisabled" class="disabled-overlay">
          <span>Coming Soon</span>
        </div>
      </div>
    </div>

    <!-- Project Info -->
    <div class="project-info">
      <div class="project-header">
        <!-- Password Input Area (shown when locked card is clicked) -->
        <div v-if="showPasswordInput" class="password-input-area">
          <div class="password-input-container">
            <input
              v-model="password"
              type="password"
              placeholder="Please enter the password..."
              @keyup.enter="submitPassword"
              ref="passwordInput"
              class="password-input-field"
            />
            <button @click="submitPassword" class="enter-button">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        <!-- Project Info (shown when not entering password) -->
        <div v-else class="project-title-section">
          <div class="title-with-lock">
            <img
              v-if="isLocked"
              :src="lockIcon"
              alt="Lock"
              class="inline-lock-icon"
            />
            <h3 class="project-title">{{ title }}</h3>
          </div>
          <span class="project-year">{{ year }}</span>
          <p class="project-tags">{{ tags }}</p>
        </div>
      </div>
    </div>

    <!-- Password Modal for Locked Cards -->
    <div v-if="showPasswordModal" class="password-modal" @click.stop>
      <div class="password-content">
        <h3>Enter Password</h3>
        <p>This project is password protected</p>
        <div class="password-input-group">
          <input
            v-model="password"
            type="password"
            placeholder="Enter password"
            @keyup.enter="submitPassword"
            ref="passwordInput"
            class="password-input"
          />
          <button @click="submitPassword" class="submit-btn">Submit</button>
        </div>
        <button @click="closePasswordModal" class="close-btn">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, nextTick } from "vue";
import { onMounted, onUnmounted } from "vue";
import lockIcon from "../assets/lock.svg";

// Props
const props = defineProps({
  imageUrl: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  tags: {
    type: String,
    required: true,
  },
  isLocked: {
    type: Boolean,
    default: false,
  },
  isDisabled: {
    type: Boolean,
    default: false,
  },
  password: {
    type: String,
    default: "",
  },
});

// Emits
const emit = defineEmits(["cardClick", "passwordSubmit"]);

// Local state
const showPasswordModal = ref(false);
const showPasswordInput = ref(false);
const password = ref("");
const passwordInput = ref(null);
const cardRef = ref(null);

// Computed classes
const cardClasses = computed(() => ({
  locked: props.isLocked,
  disabled: props.isDisabled,
  hover: false, // Will be handled by CSS
}));

// Methods
const handleCardClick = () => {
  if (props.isDisabled) return;

  if (props.isLocked) {
    showPasswordInput.value = true;
    nextTick(() => {
      passwordInput.value?.focus();
    });
  } else {
    emit("cardClick", {
      title: props.title,
      year: props.year,
      tags: props.tags,
    });
  }
};

const handleClickOutside = (event) => {
  if (cardRef.value && !cardRef.value.contains(event.target)) {
    if (showPasswordInput.value) {
      closePasswordInput();
    }
  }
};

const submitPassword = () => {
  if (password.value.trim()) {
    emit("passwordSubmit", {
      title: props.title,
      password: password.value,
    });
    closePasswordInput();
  }
};

const closePasswordInput = () => {
  showPasswordInput.value = false;
  password.value = "";
};

const closePasswordModal = () => {
  showPasswordModal.value = false;
  password.value = "";
};

// Lifecycle hooks
onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<style scoped>
.project-card {
  background: #ffffff;
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  border-radius: 0;
  border: none;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.project-card:hover {
  transform: none;
  box-shadow: none;
}

.project-card.disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.project-card.disabled:hover {
  transform: none;
  box-shadow: none;
}

.project-image-container {
  width: 100%;
  height: 392px;
  border-radius: 16px;
  overflow: hidden;
  flex-shrink: 0;
}

.project-image {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  border-radius: 0;
  transition: all 0.3s ease;
  overflow: hidden;
}

.project-image:hover {
  transform: scale(1.02);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.6, 1);
}

.project-image:hover::after {
  display: none;
}

.lock-icon {
  position: absolute;
  top: 16px;
  left: 16px;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);
  z-index: 2;
}

.lock-icon svg {
  width: 16px;
  height: 16px;
}

.disabled-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #f6f7fb;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0;
  z-index: 1;
}

.disabled-overlay span {
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 18px;
  color: #8e8e93;
  text-align: center;
}

.project-info {
  padding: 0;
  background: transparent;
  width: 100%;
}

.project-header {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
}

.project-title-section {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  gap: 8px;
  cursor: default;
}

.title-with-lock {
  display: flex;
  align-items: center;
  gap: 8px;
}

.inline-lock-icon {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
}

.project-title {
  font-family: "Poppins", sans-serif;
  font-size: 24px;
  font-weight: 600;
  color: #000000;
  margin: 0;
  line-height: normal;
  cursor: default;
}

.project-year {
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #8e8e93;
  margin: 0;
  line-height: normal;
  cursor: default;
}

.project-tags {
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #8e8e93;
  margin: 0;
  line-height: normal;
  white-space: pre-wrap;
  cursor: default;
}

/* Inline Password Input Area */
.password-input-area {
  width: 100%;
}

.password-input-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #ffffff;
  border-radius: 100px;
  padding: 16px 24px;
  box-shadow: 0px 3px 8.1px 0px rgba(0, 0, 0, 0.08);
  gap: 16px;
}

.password-input-field {
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  color: #000000;
  font-weight: 400;
}

.password-input-field::placeholder {
  color: #a6a6a6;
}

.enter-button {
  width: 40px;
  height: 40px;
  border: 0.5px solid #000000;
  border-radius: 100px;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  flex-shrink: 0;
}

.enter-button:hover {
  background: #000000;
  border-color: #000000;
}

.enter-button:hover svg {
  color: #ffffff;
}

/* Password Modal */
.password-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(10px);
}

.password-content {
  background: #ffffff;
  border-radius: 16px;
  padding: 32px;
  max-width: 400px;
  width: 90%;
  text-align: center;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.password-content h3 {
  font-family: "Poppins", sans-serif;
  font-size: 24px;
  font-weight: 600;
  color: #000000;
  margin: 0 0 12px 0;
}

.password-content p {
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  color: #666666;
  margin: 0 0 24px 0;
  line-height: 1.5;
}

.password-input-group {
  display: flex;
  gap: 12px;
  margin-bottom: 20px;
}

.password-input {
  flex: 1;
  padding: 12px 16px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s ease;
}

.password-input:focus {
  border-color: #000000;
}

.submit-btn {
  padding: 12px 24px;
  background: #000000;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.submit-btn:hover {
  background: #333333;
  transform: translateY(-2px);
}

.close-btn {
  padding: 12px 24px;
  background: transparent;
  color: #666666;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.close-btn:hover {
  background: #f0f0f0;
  border-color: #cccccc;
}

/* Responsive Design */
@media (max-width: 768px) {
  .project-card {
    width: 100%;
  }

  .project-image-container {
    width: 100%;
    height: 300px;
  }

  .password-content {
    margin: 20px;
    padding: 24px;
  }

  .password-input-group {
    flex-direction: column;
  }
}
</style>
