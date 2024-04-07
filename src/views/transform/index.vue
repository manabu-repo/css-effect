<script setup lang="ts"></script>

<template>
  <div class="transform-view">
    <div class="rising-tide">
      <div class="water"></div>
    </div>
  </div>
</template>

<style scoped>
.rising-tide {
  height: 50px;
  width: 200px;
  background-color: #3498db;
  position: relative;
  overflow: hidden;
}

.rising-tide .water {
  height: 100%;
  width: 100%;
  background-color: #2ecc71;
  position: absolute;
  bottom: -100%;
  animation: riseTide 5s infinite alternate;
}

@keyframes riseTide {
  0% {
    bottom: -100%;
  }

  100% {
    bottom: 0;
  }
}
</style>
