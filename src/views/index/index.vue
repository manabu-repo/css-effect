<script setup lang="ts">
const list = [{
  to: '/use',
  label: '🌰 Use',
}, {
  to: '/star',
  label: '⭐️ Star',
}, {
  to: '/loading/loading',
  label: '🔆 Loading',
}]
</script>

<template>
  <div class="container">
    <template v-for="use of list" :key="use.to">
      <router-link :to="use.to">
        {{ use.label }}
      </router-link>
    </template>
  </div>
</template>

<style>
a {
  padding: 1rem;
}
</style>
