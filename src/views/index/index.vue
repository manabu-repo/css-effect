<script setup lang="ts">
import { list } from './config'
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
