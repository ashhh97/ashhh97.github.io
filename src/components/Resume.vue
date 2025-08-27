<template>
  <SocialIcon
    name="Resume"
    id="node-526_4603"
    :default-icon="defaultIcon"
    :hover-icon="hoverIcon"
    :is-link="true"
    href="/YZ resume2025.pdf"
  />
</template>

<script setup>
import SocialIcon from "./SocialIcon.vue";

// Image assets from Figma
import resumeIcon from "../assets/resume-icon.svg";
const defaultIcon = resumeIcon;
const hoverIcon = resumeIcon;
</script>

<style scoped>
.resume-component {
  width: 100%;
  height: 100%;
}

.resume-link {
  text-decoration: none;
  display: block;
  width: 100%;
  height: 100%;
}

.resume-button {
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
}

.resume-button.hover {
  background-color: #000000;
}

.resume-icon {
  width: 20px;
  height: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  shape-rendering: geometricPrecision;
  text-rendering: optimizeLegibility;
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;
}

/* Hover state specific styles */
.resume-button.hover .icon-image {
  filter: brightness(0) invert(1); /* Makes the icon white on black background */
}
</style>
