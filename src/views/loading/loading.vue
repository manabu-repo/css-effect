<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  const loader = document.querySelector('.loader')

  setTimeout(() => {
    loader?.classList.add('.adeOut')

    setTimeout(() => {
      (loader as any).style.display = 'none'
    }, 1000)
  }, 5000)
})
</script>

<template>
  <div class="loading-container">
    <div class="content">
      <h1>Website is Loaded 😉</h1>
    </div>

    <div class="loader">
      <div class="loader-inner">
        <span />
        <span />
        <span />
        <span />
      </div>
    </div>
  </div>
</template>

<style scoped>
:root {
  color-scheme: light dark;
  background: #ecf0f1;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.loading-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.content h1 {
  color: aqua;
  text-align: center;
  /* text-transform: uppercase; */
  font: 900 2rem 'Monaco, Menlo, Consolas, monospace';
}

.loader {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #fafafa;
}

.loader .loader-inner {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100px;
  height: 100px;
  /* background: #000; */
  transform: translate(-50%, -50%);
}

.loader span {
  position: absolute;
  top: 0;
  left: 0;
  width: 30%;
  height: 30%;
  border-radius: 50%;
  animation: loading 2s ease infinite;
}

.loader span:nth-child(1) {
  background: #19a6bc;
  animation-delay: 0.5s;
}

.loader span:nth-child(2) {
  background: #f63d3a;
  animation-delay: 1s;
}

.loader span:nth-child(3) {
  background: #f0a543;
  animation-delay: 1.5s;
}

.loader span:nth-child(4) {
  background: #193848;
  animation-delay: 2s;
}

@keyframes loading {
  0%, 100% {
    transform: translate(0);
  }

  20% {
    transform: translate(70px);
  }

  55% {
    transform: translate(70px, 70px);
  }

  75% {
    transform: translate(0, 70px);
  }
}

@media (prefers-color-scheme: dark) {
  :root {
    background: #242424;
  }

  .content h1 {
    color: #193848;
  }

  .loader {
    background: #242424;
  }
}
</style>
