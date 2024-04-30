<script setup lang="ts"></script>

<template>
  <div class="position-view">
    <div class="box1 center">
      1
    </div>
    <div class="box2 center">
      2
    </div>
  </div>
</template>

<style scoped>
.center {
  display: flex;
  justify-content: center;
  align-items: center
}

.box1 {
  width: 100px;
  height: 100px;
  position: absolute;
  z-index: 0;
  background-color: lightblue;
}

.box2 {
  width: 100px;
  height: 100px;
  background-color: translate;
  /* background-color: lightcoral; */
  /* opacity: 0.5; */
  position: absolute;
  z-index: 1;
}
</style>
