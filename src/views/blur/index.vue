<script setup lang="ts">
import treeIcon from '@/assets/tree.jpg'
import catIcon from '@/assets/cat.jpg'
</script>

<template>
  <div class="blur-view">
    <div class="blur-effect content">
      <img :src="treeIcon">
    </div>

    <div class="mask-effect content">
      <img :src="catIcon">
    </div>

    <div class="overlay-effect content">
      <img :src="catIcon">
    </div>
  </div>
</template>

<style scoped>
.blur-view {
  display: flex;
  justify-content: center;
  align-items: center;
}

.content {
  margin: 0 2rem;
}

.blur-effect {
  height: 10rem;
  width: 10rem;
  overflow: hidden;
  filter: blur(1.5px);
  opacity: 0.5;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.mask-effect {
  height: 10rem;
  width: 10rem;
  overflow: hidden;
  position: relative;
}

.mask-effect img {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  filter: blur(3px);
  opacity: 0.5;
}

.overlay-effect {
  height: 10rem;
  width: 10rem;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
}
</style>
