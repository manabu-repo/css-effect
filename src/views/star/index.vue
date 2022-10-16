<script setup lang="ts">
import { onMounted, ref } from 'vue'

const starRef = ref()
const starsCount = 800
const starsDistance = 800

const init = () => {
  starRef.value.forEach((ref: any) => {
    const speed: number = 0.2 + Math.random() * 1
    const distance: number = starsDistance + Math.random() * 300
    ref.style.transformOrigin = `0 0 ${distance}px`
    ref.style.transform = `
      translate3d(0,0,-${distance}px)
      rotateX(${Math.random() * -50}deg)
      rotateY(${Math.random() * 360}deg)
      scale(${speed}, ${speed})
    `
  })
}

onMounted(() => init())
</script>

<template>
  <div class="container">
    <div class="stars">
      <div v-for="(star, index) of starsCount" :key="index" ref="starRef" class="star" />
    </div>
  </div>
</template>

<style>
body {
  margin: 0;
}
</style>

<style scoped>
.container {
  width: 100vw;
  height: 100vh;
  /* background: radial-gradient(black, transparent); */
  background: radial-gradient(200% 100% at bottom center, #f7f7b6, #e96f92, #1b2947);
  background: radial-gradient(
    220% 105% at top center,
    #1b2947 10%,
    #75517d 40%,
    #e96f92 65%,
    #f7f7b6
  );
  background-attachment: flex;
  overflow: hidden;
}

@keyframes rotate {
  0% {
    transform: perspective(400px) rotateX(-40deg) rotateY(0) rotateZ(20deg);
  }

  100% {
    transform: perspective(400px) rotateX(-40deg) rotateY(-360deg) rotateZ(20deg);
  }
}

.stars {
  transform: perspective(500px);
  transform-style: preserve-3d;
  position: absolute;
  perspective-origin: 50% 100%;
  left: 50%;
  animation: rotate 90s infinite linear;
  bottom: 0;
}

.star {
  width: 2px;
  height: 2px;
  background: white;
  position: absolute;
  top: 0;
  left: 0;
  backface-visibility: hidden;
}
</style>
