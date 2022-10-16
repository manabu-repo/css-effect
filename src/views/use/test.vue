<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)

const onClick = () => {
  count.value++
}
</script>

<template>
  <div>
    <span>{{ count }}</span>
  </div>
  <button @click="onClick">
    count
  </button>
</template>
