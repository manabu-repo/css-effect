<script setup lang="ts"></script>

<template>
  <div class="flow-view">
    <div class="square1" />
    <div class="square2" />
    <div class="square3" />
  </div>
</template>

<style scoped>
.flow-view {
  display: flex;
  justify-content: space-around;
  align-items: center;

  div {
    margin: 2rem;
  }
}

.square1 {
  width: 3rem;
  height: 3rem;
  border: 2px solid #f00;
  animation: flowBorder1 2s infinite alternate;
}

@keyframes flowBorder1 {
  0% {
    border-color: #f00;
    border-width: 2px;
  }
  50% {
    border-color: #00f;
    border-width: 4px;
  }
  100% {
    border-color: #0f0;
    border-width: 2px;
  }
}

.square2 {
  width: 3rem;
  height: 3rem;
  border: 2px solid transparent;
  position: relative;
  animation: flowBorder2 2s infinite linear;
}

@keyframes flowBorder2 {
  0% {
    box-shadow: 0 0 0 0 #f00;
  }
  50% {
    box-shadow: 0 0 0 4px #f00;
  }
  100% {
    box-shadow: 0 0 0 0 #f00;
  }
}

.square3 {
  width: 3rem;
  height: 3rem;
  border: 1px solid transparent;
  position: relative;
  animation: flowBorders3 4s infinite linear;
}

@keyframes flowBorders3 {
  0% {
    box-shadow:
      -2px 0 0 0 #f00, /* 左边框 */
      2px 0 0 0 transparent, /* 右边框 */
      0 -2px 0 0 transparent, /* 上边框 */
      0 2px 0 0 transparent; /* 下边框 */
  }
  25% {
    box-shadow:
      -2px 0 0 0 transparent, /* 左边框 */
      2px 0 0 0 #f00, /* 右边框 */
      0 -2px 0 0 transparent, /* 上边框 */
      0 2px 0 0 transparent; /* 下边框 */
  }
  50% {
    box-shadow:
      -2px 0 0 0 transparent, /* 左边框 */
      2px 0 0 0 transparent, /* 右边框 */
      0 -2px 0 0 #f00, /* 上边框 */
      0 2px 0 0 transparent; /* 下边框 */
  }
  75% {
    box-shadow:
      -2px 0 0 0 transparent, /* 左边框 */
      2px 0 0 0 transparent, /* 右边框 */
      0 -2px 0 0 transparent, /* 上边框 */
      0 2px 0 0 #f00; /* 下边框 */
  }
}
</style>
