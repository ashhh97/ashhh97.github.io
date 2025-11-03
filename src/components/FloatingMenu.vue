<template>
  <!-- Compact Menu Button (for screens < 1600px) -->
  <div
    v-if="showCompactButton"
    class="floating-menu-compact"
    @click="toggleMenuExpanded"
  >
    <div class="menu-icon-button">
      <svg
        v-if="!isMenuExpanded"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.5 5H17.5M2.5 10H17.5M2.5 15H17.5"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
        />
      </svg>
      <svg
        v-else
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15 5L5 15M5 5L15 15"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  </div>

  <!-- Full Menu (for screens >= 1600px) -->
  <div
    v-if="shouldShowMenu"
    class="floating-menu"
    ref="floatingMenu"
    :class="{ collapsed: isCollapsed }"
  >
    <!-- Hover Zone (matches menu content size) -->
    <div
      ref="hoverZone"
      class="hover-zone"
      :style="hoverZoneStyle"
      @mouseenter="handleHoverEnter"
      @mouseleave="handleHoverLeave"
    ></div>

    <!-- Menu Content -->
    <div
      ref="menuContent"
      class="menu-content"
      :class="{ collapsed: isCollapsed }"
      @mouseenter="handleHoverEnter"
      @mouseleave="handleHoverLeave"
    >
      <nav class="menu-nav">
        <ul class="menu-list">
          <li
            v-for="item in menuItems"
            :key="item.id"
            class="menu-item"
            :class="{
              active: activeSection === item.id,
              'has-children': item.children && item.children.length > 0,
              expanded: item.expanded,
            }"
          >
            <!-- Main menu item -->
            <div class="menu-item-content">
              <a
                v-if="item.id && (!item.children || item.children.length === 0)"
                :href="`#${item.id}`"
                class="menu-link"
                @click.prevent="scrollToSection(item.id)"
              >
                {{ item.label }}
              </a>
              <button
                v-else-if="item.children && item.children.length > 0"
                class="menu-link menu-link-button"
                @click="toggleExpand(item)"
              >
                {{ item.label }}
                <svg
                  class="expand-icon-inline"
                  :class="{ expanded: item.expanded }"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.5 3L7.5 6L4.5 9"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
              <span v-else class="menu-link menu-link-disabled">
                {{ item.label }}
              </span>
            </div>

            <!-- Submenu items -->
            <ul
              v-if="item.children && item.children.length > 0"
              class="submenu-list"
              :class="{ expanded: item.expanded }"
            >
              <li
                v-for="child in item.children"
                :key="child.id"
                class="submenu-item"
                :class="{ active: activeSection === child.id }"
              >
                <a
                  v-if="child.id"
                  :href="`#${child.id}`"
                  class="submenu-link"
                  @click.prevent="scrollToSection(child.id)"
                >
                  {{ child.label }}
                </a>
                <span v-else class="submenu-link submenu-link-disabled">
                  {{ child.label }}
                </span>

                <!-- Third level items -->
                <ul
                  v-if="child.children && child.children.length > 0"
                  class="submenu-list level-3"
                >
                  <li
                    v-for="grandchild in child.children"
                    :key="grandchild.id"
                    class="submenu-item level-3"
                    :class="{ active: activeSection === grandchild.id }"
                  >
                    <a
                      v-if="grandchild.id"
                      :href="`#${grandchild.id}`"
                      class="submenu-link level-3"
                      @click.prevent="scrollToSection(grandchild.id)"
                    >
                      {{ grandchild.label }}
                    </a>
                    <span
                      v-else
                      class="submenu-link submenu-link-disabled level-3"
                    >
                      {{ grandchild.label }}
                    </span>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  </div>

  <!-- Compact Menu Content (for screens < 1600px) -->
  <div
    v-if="showCompactButton && isMenuExpanded"
    class="floating-menu-compact-content"
    ref="compactMenuContent"
  >
    <div class="menu-content-compact">
      <nav class="menu-nav">
        <ul class="menu-list">
          <li
            v-for="item in menuItems"
            :key="item.id"
            class="menu-item"
            :class="{
              active: activeSection === item.id,
              'has-children': item.children && item.children.length > 0,
              expanded: item.expanded,
            }"
          >
            <!-- Main menu item -->
            <div class="menu-item-content">
              <a
                v-if="item.id && (!item.children || item.children.length === 0)"
                :href="`#${item.id}`"
                class="menu-link"
                @click.prevent="scrollToSection(item.id)"
              >
                {{ item.label }}
              </a>
              <button
                v-else-if="item.children && item.children.length > 0"
                class="menu-link menu-link-button"
                @click="toggleExpand(item)"
              >
                {{ item.label }}
                <svg
                  class="expand-icon-inline"
                  :class="{ expanded: item.expanded }"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.5 3L7.5 6L4.5 9"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
              <span v-else class="menu-link menu-link-disabled">
                {{ item.label }}
              </span>
            </div>

            <!-- Submenu items -->
            <ul
              v-if="item.children && item.children.length > 0"
              class="submenu-list"
              :class="{ expanded: item.expanded }"
            >
              <li
                v-for="child in item.children"
                :key="child.id"
                class="submenu-item"
                :class="{ active: activeSection === child.id }"
              >
                <a
                  v-if="child.id"
                  :href="`#${child.id}`"
                  class="submenu-link"
                  @click.prevent="scrollToSection(child.id)"
                >
                  {{ child.label }}
                </a>
                <span v-else class="submenu-link submenu-link-disabled">
                  {{ child.label }}
                </span>

                <!-- Third level items -->
                <ul
                  v-if="child.children && child.children.length > 0"
                  class="submenu-list level-3"
                >
                  <li
                    v-for="grandchild in child.children"
                    :key="grandchild.id"
                    class="submenu-item level-3"
                    :class="{ active: activeSection === grandchild.id }"
                  >
                    <a
                      v-if="grandchild.id"
                      :href="`#${grandchild.id}`"
                      class="submenu-link level-3"
                      @click.prevent="scrollToSection(grandchild.id)"
                    >
                      {{ grandchild.label }}
                    </a>
                    <span
                      v-else
                      class="submenu-link submenu-link-disabled level-3"
                    >
                      {{ grandchild.label }}
                    </span>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from "vue";

// Props
const props = defineProps({
  menuItems: {
    type: Array,
    required: true,
    // Expected format: [{ id: 'section-id', label: 'Section Name' }, ...]
  },
});

// State
const activeSection = ref("");
const floatingMenu = ref(null);
const menuContent = ref(null);
const hoverZone = ref(null);
const isCollapsed = ref(false);
const isHovered = ref(false);
const shouldShowMenu = ref(true);
const showCompactButton = ref(false);
const isMenuExpanded = ref(false);
const isToggleInProgress = ref(false);
const windowWidth = ref(window.innerWidth);
const hoverZoneStyle = ref({});
const compactMenuContent = ref(null);

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const offset = 150; // Offset for header
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });

    // Update active section immediately
    activeSection.value = sectionId;

    // Don't auto-close compact menu - user must close manually via button
  }
};

// Toggle expand/collapse for menu items
const toggleExpand = async (item) => {
  const wasExpanded = item.expanded;
  item.expanded = !wasExpanded;

  // Wait for DOM update
  await nextTick();

  // If expanding and has children, scroll to first child
  if (!wasExpanded && item.children && item.children.length > 0) {
    // Small delay to ensure DOM is updated
    setTimeout(() => {
      const firstChild = item.children[0];
      if (firstChild && firstChild.id) {
        scrollToSection(firstChild.id);
      }
    }, 100);
  }
};

// Intersection Observer for active section tracking
const observeSections = () => {
  const options = {
    root: null,
    rootMargin: "-20% 0px -70% 0px",
    threshold: 0,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        activeSection.value = entry.target.id;
      }
    });
  }, options);

  // Observe all sections
  props.menuItems.forEach((item) => {
    const element = document.getElementById(item.id);
    if (element) {
      observer.observe(element);
    }
  });

  return observer;
};

// Check if menu would overlap with content
const checkContentOverlap = () => {
  if (!floatingMenu.value || isHovered.value) return;

  const menuRect = floatingMenu.value.getBoundingClientRect();
  const menuTop = menuRect.top;
  const menuLeft = menuRect.left;

  // Check if any section is near the bottom right corner where menu is located
  let shouldCollapse = false;

  props.menuItems.forEach((item) => {
    const element = document.getElementById(item.id);
    if (element) {
      const rect = element.getBoundingClientRect();
      const elementBottom = rect.bottom;
      const elementRight = rect.right;

      // If content extends into the menu's area (with some margin), collapse
      // Check if content's bottom-right corner is near menu's top-left corner
      if (
        elementBottom > menuTop - 50 &&
        elementRight > menuLeft - 50 &&
        elementBottom < menuTop + menuRect.height + 100
      ) {
        shouldCollapse = true;
      }
    }
  });

  isCollapsed.value = shouldCollapse;
};

// Handle hover enter on hover zone
const handleHoverEnter = () => {
  isHovered.value = true;
  isCollapsed.value = false;
  // Update hover zone size when expanding (menu content might have changed)
  requestAnimationFrame(() => {
    updateHoverZoneSize();
  });
};

// Handle hover leave
const handleHoverLeave = () => {
  isHovered.value = false;
  // Small delay before checking overlap again
  setTimeout(() => {
    if (!isHovered.value) {
      checkContentOverlap();
    }
  }, 200);
};

// Update hover zone size to match menu content
const updateHoverZoneSize = () => {
  if (!menuContent.value) return;

  const rect = menuContent.value.getBoundingClientRect();
  hoverZoneStyle.value = {
    width: `${rect.width}px`,
    height: `${rect.height}px`,
    bottom: "32px",
    right: "32px",
  };
};

// Check window width and update menu visibility
const checkWindowWidth = () => {
  windowWidth.value = window.innerWidth;
  const isMobile = windowWidth.value < 768;
  shouldShowMenu.value = windowWidth.value >= 1600;
  showCompactButton.value = !isMobile && windowWidth.value < 1600;

  if (shouldShowMenu.value && menuContent.value) {
    nextTick(() => {
      updateHoverZoneSize();
    });
  }
};

// Toggle compact menu expanded state
const toggleMenuExpanded = (event) => {
  if (event) {
    event.stopPropagation();
    event.preventDefault();
  }
  isToggleInProgress.value = true;
  isMenuExpanded.value = !isMenuExpanded.value;

  // Reset flag after a short delay
  setTimeout(() => {
    isToggleInProgress.value = false;
  }, 100);
};

// Close menu when clicking outside (disabled for compact menu - user must close manually)
const handleClickOutside = (event) => {
  // Don't interfere with full menu clicks (> 1600px)
  if (shouldShowMenu.value && floatingMenu.value) {
    if (floatingMenu.value.contains(event.target)) {
      return;
    }
  }

  // Compact menu (< 1600px) should only close via button click, not via clicking outside
  // So we don't auto-close it here
};

// Lifecycle
let observer = null;
let scrollHandler = null;
let resizeHandler = null;
let clickOutsideHandler = null;

onMounted(() => {
  // Check initial window width
  checkWindowWidth();

  // Small delay to ensure DOM is ready
  setTimeout(() => {
    observer = observeSections();
    checkContentOverlap();
    updateHoverZoneSize();
  }, 500);

  // Listen to scroll and resize events
  scrollHandler = () => {
    checkContentOverlap();
  };
  resizeHandler = () => {
    checkWindowWidth();
    checkContentOverlap();
    if (shouldShowMenu.value) {
      // Use requestAnimationFrame to ensure DOM is updated
      requestAnimationFrame(() => {
        updateHoverZoneSize();
      });
    }
  };

  window.addEventListener("scroll", scrollHandler, { passive: true });
  window.addEventListener("resize", resizeHandler);

  // Add click outside listener for compact menu (using capture phase and delay)
  clickOutsideHandler = (e) => {
    // Use setTimeout to ensure this runs after toggleMenuExpanded
    setTimeout(() => {
      handleClickOutside(e);
    }, 10);
  };

  document.addEventListener("click", clickOutsideHandler, true);
});

onUnmounted(() => {
  if (observer) {
    observer.disconnect();
  }
  if (scrollHandler) {
    window.removeEventListener("scroll", scrollHandler);
  }
  if (resizeHandler) {
    window.removeEventListener("resize", resizeHandler);
  }

  // Remove click outside listener
  if (clickOutsideHandler) {
    document.removeEventListener("click", clickOutsideHandler, true);
    clickOutsideHandler = null;
  }
});
</script>

<style scoped>
.floating-menu {
  position: fixed;
  bottom: 32px;
  right: 32px;
  z-index: 100;
}

/* Hover Zone - matches menu content size */
.hover-zone {
  position: fixed;
  z-index: 99;
  cursor: pointer;
  pointer-events: auto;
}

.floating-menu.collapsed .hover-zone {
  z-index: 100;
}

.floating-menu:not(.collapsed) .hover-zone {
  pointer-events: none;
}

/* Menu Content */
.menu-content {
  background: white;
  border-radius: 12px;
  padding: 16px;
  min-width: 240px;
  max-width: 280px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.12);
  border: 1px solid #e5e5e5;
  max-height: 70vh;
  overflow-y: auto;
  animation: fadeIn 0.2s ease-out;
  user-select: none;
  transition: opacity 0.3s ease, transform 0.3s ease, visibility 0.3s ease;
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.menu-content.collapsed {
  opacity: 0;
  visibility: hidden;
  transform: translateY(10px);
  pointer-events: none;
}

.floating-menu.collapsed .menu-content {
  opacity: 0;
  visibility: hidden;
  transform: translateY(10px);
  pointer-events: none;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateX(-10px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Menu Navigation */
.menu-nav {
  width: 100%;
}

.menu-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.menu-item {
  transition: all 0.2s ease;
}

.menu-item-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.menu-link {
  display: block;
  padding: 10px 12px;
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #595959;
  text-decoration: none;
  border-radius: 6px;
  transition: all 0.2s ease;
  line-height: 1.4;
  position: relative;
  flex: 1;
}

.menu-link-disabled {
  cursor: default;
  color: #999999;
}

.menu-link-button {
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  text-align: left;
}

.menu-link-button:hover {
  background: #f5f5f5;
  color: #000000;
  transform: translateX(-2px);
}

.menu-link:hover:not(.menu-link-disabled) {
  background: #f5f5f5;
  color: #000000;
  transform: translateX(-2px);
}

.menu-item.active .menu-link {
  background: #f4f7ff;
  color: #000000;
  font-weight: 500;
}

.menu-item.active .menu-link::before {
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 3px;
  height: 60%;
  background: #1853dd;
  border-radius: 2px;
}

/* Expand/Collapse Button - Removed as we now use inline button */

.expand-icon {
  transition: transform 0.2s ease;
}

.expand-icon.expanded {
  transform: rotate(90deg);
}

.expand-icon-inline {
  transition: transform 0.2s ease;
  margin-left: 8px;
  flex-shrink: 0;
}

.expand-icon-inline.expanded {
  transform: rotate(90deg);
}

/* Submenu Styles */
.submenu-list {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
  list-style: none;
  margin: 0;
  padding: 0;
  transform-origin: bottom;
}

.submenu-list.expanded {
  max-height: 500px;
}

.submenu-item {
  margin: 0;
}

.submenu-link {
  display: block;
  padding: 8px 12px 8px 24px;
  font-family: "Poppins", sans-serif;
  font-size: 13px;
  font-weight: 400;
  color: #666666;
  text-decoration: none;
  border-radius: 4px;
  transition: all 0.2s ease;
  line-height: 1.4;
  position: relative;
  margin-bottom: 2px;
}

.submenu-link-disabled {
  cursor: default;
  color: #999999;
}

.submenu-link:hover:not(.submenu-link-disabled) {
  background: #f5f5f5;
  color: #000000;
  transform: translateX(-2px);
}

.submenu-item.active .submenu-link {
  background: #f4f7ff;
  color: #000000;
  font-weight: 500;
}

.submenu-item.active .submenu-link::before {
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 2px;
  height: 60%;
  background: #4285f4;
  border-radius: 1px;
}

/* Level 3 submenu */
.submenu-list.level-3 {
  margin-left: 12px;
}

.submenu-link.level-3 {
  padding-left: 20px;
  font-size: 12px;
  color: #777777;
}

/* Scrollbar Styling */
.menu-content::-webkit-scrollbar {
  width: 4px;
}

.menu-content::-webkit-scrollbar-track {
  background: transparent;
}

.menu-content::-webkit-scrollbar-thumb {
  background: #d9d9d9;
  border-radius: 2px;
}

.menu-content::-webkit-scrollbar-thumb:hover {
  background: #bfbfbf;
}

/* Link styles to prevent text selection during drag */
.menu-link {
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .menu-content {
    min-width: 200px;
    max-width: 240px;
    padding: 14px;
  }
}

/* Compact Menu Button (for screens < 1600px) */
.floating-menu-compact {
  position: fixed;
  bottom: 32px;
  right: 32px;
  z-index: 100;
  display: none;
}

.menu-icon-button {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: white;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.12);
  border: 1px solid #e5e5e5;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #595959;
}

.menu-icon-button:hover {
  background: #f5f5f5;
  color: #000000;
  transform: scale(1.05);
}

/* Compact Menu Content */
.floating-menu-compact-content {
  position: fixed;
  bottom: 100px;
  right: 32px;
  z-index: 99;
  max-width: 280px;
  animation: slideUp 0.3s ease-out;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.menu-content-compact {
  background: white;
  border-radius: 12px;
  padding: 16px;
  min-width: 240px;
  max-width: 280px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.12);
  border: 1px solid #e5e5e5;
  max-height: 70vh;
  overflow-y: auto;
}

/* Show compact button on screens < 1600px, hide on mobile */
@media (min-width: 768px) and (max-width: 1599px) {
  .floating-menu-compact {
    display: block;
  }
}

@media (max-width: 768px) {
  .floating-menu {
    display: none;
  }

  .floating-menu-compact {
    display: none;
  }

  .floating-menu-compact-content {
    display: none;
  }
}
</style>
