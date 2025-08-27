<template>
  <SocialIcon
    name="GitHub"
    id="node-541_3951"
    :default-icon="defaultIcon"
    :hover-icon="hoverIcon"
    :is-link="true"
    :href="gitHubUrl"
  />
</template>

<script setup>
import SocialIcon from "./SocialIcon.vue";

// Image assets from Figma design
import githubIcon from "../assets/github-icon.svg";
const defaultIcon = githubIcon;
const hoverIcon = githubIcon;

// GitHub profile URL
const gitHubUrl = "https://github.com/ashhh97";
</script>

<style scoped>
.github-component {
  width: 100%;
  height: 100%;
}

.github-link {
  text-decoration: none;
  display: block;
  width: 100%;
  height: 100%;
}

.github-button {
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

.github-button.hover {
  background-color: #000000;
}

.github-icon {
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
.github-button.hover .icon-image {
  filter: brightness(0) invert(1); /* Makes the icon white on black background */
}
</style>
