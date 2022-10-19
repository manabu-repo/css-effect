<script setup lang="ts"></script>

<template>
  <div class="border-cut">
    <div class="content">
      <div class="triangle" />
      <div>triangle</div>
    </div>

    <div class="content">
      <div class="cut-border">
        <div class="border-inner" />
      </div>
      <div>border test</div>
    </div>

    <div class="content">
      <div class="clip-path-border" />
      <!-- 固定距离切角 -->
      <div>clip-path</div>
    </div>

    <div class="content">
      <div class="linear-gradient-bg" />
      <!-- 线性渐变 固定角度切角 -->
      <div>linear-gradient</div>
    </div>

    <div class="content">
      <div class="conic-gradient-bg" />
      <!-- 锥形渐变 固定角度切角 -->
      <div>conic-gradient</div>
    </div>
  </div>
</template>

<style scoped>
.border-cut {
  display: grid;
}

.content {
  font-family: Consolas, monospace;
  font-weight: 100;
}

.triangle {
  width: 0;
  height: 0;
  border: 3rem solid transparent;
  /* border-left: 3rem solid orange; */
  /* border-bottom: 3rem solid aquamarine; */
  border-top: 3rem solid yellow;
  /* border-right: 3rem solid yellowgreen; */
}

.cut-border {
  width: 3rem;
  height: 5rem;
  padding: 1px;
  background: linear-gradient(45deg, transparent 15px, #b89dff 0);
}

.border-inner {
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, transparent 15px, #fff 0);
}

.clip-path-border {
  width: 3rem;
  height: 5rem;
  border: 1px solid blueviolet;
  background-color: aquamarine;
  clip-path: polygon(0 20px, 100% 0, 100% 100%, 0 100%);
}

.linear-gradient-bg {
  width: 3rem;
  height: 5rem;
  /* border: 1px solid blueviolet; */
  background: linear-gradient(-30deg, #b89dff 80%, transparent 0);
}

.conic-gradient-bg {
  width: 3rem;
  height: 5rem;
  background: conic-gradient(at 100% 0, #b89dff 250deg, transparent 0);
}
</style>
