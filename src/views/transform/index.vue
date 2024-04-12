<script setup lang="ts">

</script>

<template>
  <div class="transform-view">
    <div class="rising-tide content">
      <div class="water" />
    </div>

    <div class="content">
      <div class="loading">
        <div class="change-box" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.transform-view {
  display: flex;
  justify-content: center;
  align-items: center;
}

.content {
  margin: 0 10rem;
}

.rising-tide {
  height: 5rem;
  width: 3rem;
  background-color: blueviolet;
  position: relative;
  overflow: hidden;
}

.rising-tide .water {
  height: 100%;
  width: 100%;
  background-color: aquamarine;
  position: absolute;
  bottom: -100%;
  animation: riseTide 0.5s infinite alternate ease-in-out;
}

@keyframes riseTide {
  0% {
    bottom: -100%;
  }

  100% {
    bottom: 0;
  }
}

.loading {
  width: 10rem;
  height: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.change-box {
  width: 4rem;
  height: 4rem;
  background-color: pink;
  animation-name: change;
  animation-duration: 1s;
  animation-iteration-count: infinite;
}

@keyframes change {
  50% {
    width: 7.5rem;
    height: 7.5rem;
    border-radius: 50%;
    background-color: skyblue;
  }
}
</style>
