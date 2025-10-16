<template>
  <div
    class="floating-menu"
    :class="{ collapsed: isCollapsed, dragging: isDragging }"
    :style="menuStyle"
    ref="floatingMenu"
  >
    <!-- Toggle Button -->
    <button
      class="menu-toggle"
      @click="toggleMenu"
      :aria-label="isCollapsed ? 'Expand menu' : 'Collapse menu'"
    >
      <svg
        class="toggle-icon"
        :class="{ rotated: !isCollapsed }"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.5 5L12.5 10L7.5 15"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>

    <!-- Menu Content -->
    <div class="menu-content" v-show="!isCollapsed">
      <div class="menu-header" @mousedown="startDrag" @touchstart="startDrag">
        <h3 class="menu-title">{{ menuTitle }}</h3>
        <div class="drag-handle" title="Drag to move">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="4" cy="4" r="1.5" fill="currentColor" />
            <circle cx="12" cy="4" r="1.5" fill="currentColor" />
            <circle cx="4" cy="8" r="1.5" fill="currentColor" />
            <circle cx="12" cy="8" r="1.5" fill="currentColor" />
            <circle cx="4" cy="12" r="1.5" fill="currentColor" />
            <circle cx="12" cy="12" r="1.5" fill="currentColor" />
          </svg>
        </div>
      </div>
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
                v-if="item.id"
                :href="`#${item.id}`"
                class="menu-link"
                @click.prevent="scrollToSection(item.id)"
              >
                {{ item.label }}
              </a>
              <span v-else class="menu-link menu-link-disabled">
                {{ item.label }}
              </span>

              <!-- Expand/Collapse button for items with children -->
              <button
                v-if="item.children && item.children.length > 0"
                class="expand-button"
                @click="toggleExpand(item)"
                :aria-label="item.expanded ? 'Collapse' : 'Expand'"
              >
                <svg
                  class="expand-icon"
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
import { ref, onMounted, onUnmounted, computed } from "vue";

// Props
const props = defineProps({
  menuItems: {
    type: Array,
    required: true,
    // Expected format: [{ id: 'section-id', label: 'Section Name' }, ...]
  },
  menuTitle: {
    type: String,
    default: "Contents",
  },
  defaultCollapsed: {
    type: Boolean,
    default: false,
  },
});

// State
const isCollapsed = ref(props.defaultCollapsed);
const activeSection = ref("");
const floatingMenu = ref(null);

// Position state
const position = ref({
  x: 0,
  y: 0,
});

const isDragging = ref(false);
const dragOffset = ref({ x: 0, y: 0 });

// Computed style for menu position
const menuStyle = computed(() => ({
  right: position.value.x ? "auto" : "32px",
  bottom: position.value.y ? "auto" : "32px",
  top: position.value.y ? `${position.value.y}px` : "auto",
  left: position.value.x ? `${position.value.x}px` : "auto",
  transform: "none",
}));

// Methods
const toggleMenu = () => {
  isCollapsed.value = !isCollapsed.value;
};

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const offset = 100; // Offset for header
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });

    // Update active section immediately
    activeSection.value = sectionId;
  }
};

// Dragging methods
const startDrag = (e) => {
  // Prevent dragging when clicking on links
  if (e.target.tagName === "A" || e.target.closest("a")) {
    return;
  }

  isDragging.value = true;

  const clientX = e.type.includes("touch") ? e.touches[0].clientX : e.clientX;
  const clientY = e.type.includes("touch") ? e.touches[0].clientY : e.clientY;

  if (floatingMenu.value) {
    const rect = floatingMenu.value.getBoundingClientRect();
    dragOffset.value = {
      x: clientX - rect.left,
      y: clientY - rect.top,
    };
  }

  document.addEventListener("mousemove", onDrag);
  document.addEventListener("mouseup", stopDrag);
  document.addEventListener("touchmove", onDrag);
  document.addEventListener("touchend", stopDrag);

  // Prevent text selection while dragging
  e.preventDefault();
};

const onDrag = (e) => {
  if (!isDragging.value) return;

  const clientX = e.type.includes("touch") ? e.touches[0].clientX : e.clientX;
  const clientY = e.type.includes("touch") ? e.touches[0].clientY : e.clientY;

  let newX = clientX - dragOffset.value.x;
  let newY = clientY - dragOffset.value.y;

  // Get menu dimensions
  const menuWidth = floatingMenu.value?.offsetWidth || 0;
  const menuHeight = floatingMenu.value?.offsetHeight || 0;

  // Constrain to viewport
  const maxX = window.innerWidth - menuWidth;
  const maxY = window.innerHeight - menuHeight;

  newX = Math.max(0, Math.min(newX, maxX));
  newY = Math.max(0, Math.min(newY, maxY));

  position.value = {
    x: newX,
    y: newY,
  };
};

const stopDrag = () => {
  isDragging.value = false;
  document.removeEventListener("mousemove", onDrag);
  document.removeEventListener("mouseup", stopDrag);
  document.removeEventListener("touchmove", onDrag);
  document.removeEventListener("touchend", stopDrag);
};

// Toggle expand/collapse for menu items
const toggleExpand = (item) => {
  item.expanded = !item.expanded;
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

// Lifecycle
let observer = null;

onMounted(() => {
  // Small delay to ensure DOM is ready
  setTimeout(() => {
    observer = observeSections();
  }, 500);
});

onUnmounted(() => {
  if (observer) {
    observer.disconnect();
  }
});
</script>

<style scoped>
.floating-menu {
  position: fixed;
  z-index: 100;
  transition: none;
  cursor: move;
}

.floating-menu.collapsed {
  cursor: default;
}

.floating-menu.dragging {
  cursor: grabbing;
  user-select: none;
}

.floating-menu.dragging .menu-content {
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.18);
  transform: scale(1.02);
}

/* Toggle Button */
.menu-toggle {
  position: absolute;
  left: -16px;
  top: 50%;
  transform: translateY(-50%);
  width: 32px;
  height: 32px;
  background: white;
  border: 1px solid #e5e5e5;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
  z-index: 101;
}

.menu-toggle:hover {
  background: #f5f5f5;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.menu-toggle:active {
  transform: translateY(-50%) scale(0.95);
}

.toggle-icon {
  color: #595959;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.toggle-icon.rotated {
  transform: rotate(180deg);
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
  transition: box-shadow 0.2s ease, transform 0.2s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateX(10px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Menu Header */
.menu-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  padding-bottom: 12px;
  border-bottom: 1px solid #e5e5e5;
  cursor: move;
}

.menu-title {
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #000000;
  margin: 0;
  line-height: normal;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.drag-handle {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999999;
  cursor: move;
  padding: 4px;
  border-radius: 4px;
  transition: all 0.2s ease;
}

.drag-handle:hover {
  color: #666666;
  background: #f5f5f5;
}

.drag-handle svg {
  display: block;
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

.menu-link:hover:not(.menu-link-disabled) {
  background: #f5f5f5;
  color: #000000;
  transform: translateX(2px);
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
  background: #4285f4;
  border-radius: 2px;
}

/* Expand/Collapse Button */
.expand-button {
  background: none;
  border: none;
  padding: 4px;
  cursor: pointer;
  color: #999999;
  border-radius: 4px;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.expand-button:hover {
  background: #f5f5f5;
  color: #666666;
}

.expand-icon {
  transition: transform 0.2s ease;
}

.expand-icon.expanded {
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
}

.submenu-link-disabled {
  cursor: default;
  color: #999999;
}

.submenu-link:hover:not(.submenu-link-disabled) {
  background: #f5f5f5;
  color: #000000;
  transform: translateX(2px);
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

@media (max-width: 768px) {
  .floating-menu {
    display: none;
  }
}
</style>
