<template>
  <div class="social-icon-component" :data-name="name" :id="id">
    <a
      v-if="isLink"
      :href="href"
      class="social-link"
      @click.prevent="handleClick"
      @mouseenter="isHovered = true"
      @mouseleave="isHovered = false"
    >
      <div
        :class="['social-button', { hover: isHovered }]"
        :data-name="`Property 1=${isHovered ? 'Hover' : 'Default'}`"
      >
        <div class="icon-wrapper">
          <img
            :src="isHovered ? hoverIcon : defaultIcon"
            :alt="`${name} icon`"
            class="icon-image"
          />
        </div>
      </div>
    </a>

    <div
      v-else
      :class="['social-button', { hover: isHovered }]"
      @mouseenter="isHovered = true"
      @mouseleave="isHovered = false"
      :data-name="`Property 1=${isHovered ? 'Hover' : 'Default'}`"
    >
      <div class="icon-wrapper">
        <img
          :src="isHovered ? hoverIcon : defaultIcon"
          :alt="`${name} icon`"
          class="icon-image"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Props for customization
const props = defineProps({
  name: {
    type: String,
    required: true,
    default: "SocialIcon",
  },
  id: {
    type: String,
    default: "social-icon",
  },
  defaultIcon: {
    type: String,
    required: true,
  },
  hoverIcon: {
    type: String,
    required: true,
  },
  href: {
    type: String,
    default: "#",
  },
  isLink: {
    type: Boolean,
    default: true,
  },
  onClick: {
    type: Function,
    default: null,
  },
});

const isHovered = ref(false);

// Handle click events
const handleClick = () => {
  if (props.onClick) {
    props.onClick();
  } else if (props.href && props.href !== "#") {
    window.open(props.href, "_blank");
  } else {
    console.log(`${props.name} clicked - add actual URL or click handler`);
  }
};
</script>

<style scoped>
.social-icon-component {
  width: 100%;
  height: 100%;
}

.social-link {
  text-decoration: none;
  display: block;
  width: 100%;
  height: 100%;
  outline: none; /* Remove focus outline */
}

.social-link:focus {
  outline: none; /* Remove focus outline */
}

.social-button {
  background-color: #f6f7fb;
  border: 1px solid transparent;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: center;
  padding: 9px;
  position: relative;
  border-radius: 100px;
  width: 40px;
  height: 40px;
  transition: all 0.3s ease;
  cursor: pointer;
  outline: none; /* Remove focus outline */
  /* Prevent break points during zoom/shrink */
  transform-origin: center;
  will-change: transform;
  backface-visibility: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.social-button:focus {
  outline: none; /* Remove focus outline */
}

.social-button.hover {
  background-color: #000000;
}

.icon-wrapper {
  position: relative;
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-image {
  display: block;
  width: 20px;
  height: 20px;
  object-fit: contain;
}

/* Hover state specific styles */
.social-button.hover .icon-image {
  filter: brightness(0) invert(1); /* Makes the icon white on black background */
}
</style>
