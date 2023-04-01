<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <header>
    <!-- Menu -->
  </header>

  <RouterView />
</template>

<style lang="scss">
  #app {
    --color-bg: var(--color-tertiary);
    padding: 30px;
    background-color: var(--color-bg);
  }
</style>
