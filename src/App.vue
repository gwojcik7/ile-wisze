<script setup lang="ts">
import { RouterView } from 'vue-router'
import { computed, onBeforeMount, ref, watch } from 'vue';
import AuthService from '@/services/AuthService';

import Header from '@/components/Global/Header/Header.vue';
import { useAuth } from './composables/useAuth';
import router from './router';

const isLoggedIn = ref(false);

const { isSignedIn } = useAuth();

watch(isSignedIn, () => {
  isLoggedIn.value = isSignedIn.value;
});

const isHeaderVisible = computed(() => {
  if(!isLoggedIn.value) {
    return false;
  }

  const currentRoute = router.currentRoute.value;

  if(!currentRoute) {
    return false;
  }

  const hideHeader = !!currentRoute.meta.hideHeader;

  return !hideHeader;
});

onBeforeMount(() => {
  AuthService.validateToken();
});
</script>

<template>
  <Header v-if="isHeaderVisible" />
  <main>
    <RouterView />
  </main>
</template>