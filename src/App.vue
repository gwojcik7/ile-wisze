<script setup lang="ts">
import { RouterView } from 'vue-router'
import { onBeforeMount } from 'vue';
import AuthService from '@/services/AuthService';

import Header from '@/components/Global/Header/Header.vue';

onBeforeMount(() => {
  AuthService.validateToken();
});
</script>

<template>
  <Header />
  <RouterView />
</template>

<style lang="scss">
  #app {
    --color-bg: var(--color-tertiary);
    background-color: var(--color-bg);
    padding: var(--padding-app);
  }
</style>
