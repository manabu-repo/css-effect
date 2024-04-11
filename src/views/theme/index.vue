<script setup lang="ts">
function handleTheme(theme: string) {
  console.log('theme:', theme)
  document.documentElement.setAttribute('data-theme', theme)
}
</script>

<template>
  <div class="theme-view">
    <button @click="handleTheme('dark')">
      Dark
    </button>
    <button @click="handleTheme('light')">
      Light
    </button>
    <button @click="handleTheme('pink')">
      Pink
    </button>
  </div>
</template>

<style>
:root {
  --dark-bg: #1f2937;
  --dark-text: #f4f4f5;

  --light-bg: #fff;
  --light-text: #1f2937;

  --pink-bg: #fff5f7;
  --pink-text: #d13649;

  --primary-color: #007bff;
  --primary-color-light: #e1f5fe;

  --secondary-color: #6c757d;
  --secondary-color-light: #dee2e6;
}

html[data-theme='dark'] {
  --bg: var(--dark-bg);
  --text: var(--dark-text);
}

html[data-theme='light'] {
  --bg: var(--light-bg);
  --text: var(--light-text);
}

html[data-theme='pink'] {
  --bg: var(--pink-bg);
  --text: var(--pink-text);
}

.theme-view {
  display: flex;
  flex-direction: row;
  gap: 30px;
  padding: 20px;
  background-color: var(--bg);
  color: var(--text);
}
</style>
