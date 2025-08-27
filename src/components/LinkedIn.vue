<template>
  <SocialIcon
    name="LinkedIn"
    id="node-526_4628"
    :default-icon="defaultIcon"
    :hover-icon="hoverIcon"
    :is-link="true"
    :href="linkedInUrl"
  />
</template>

<script setup>
import SocialIcon from "./SocialIcon.vue";

// Image assets from Figma design
const defaultIcon = "/src/assets/linkedin-icon.svg";
const hoverIcon = "/src/assets/linkedin-icon.svg";

// LinkedIn profile URL
const linkedInUrl =
  "https://www.linkedin.com/in/ying-zhang-38354321a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app";
</script>

<style scoped>
.linkedin-component {
  width: 100%;
  height: 100%;
}

.linkedin-link {
  text-decoration: none;
  display: block;
  width: 100%;
  height: 100%;
}

.linkedin-button {
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

.linkedin-button.hover {
  background-color: #000000;
}

.linkedin-icon {
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
.linkedin-button.hover .icon-image {
  filter: brightness(0) invert(1); /* Makes the icon white on black background */
}
</style>
