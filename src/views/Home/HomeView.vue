<script lang="ts" setup>
import PrimaryButton from '@/components/Utils/Buttons/PrimaryButton.vue';
import { RouterLink } from 'vue-router';


</script>
<template>
    <div class="home">
        <aside>
            Made by Grzesiek
        </aside>
        <h1>Ile wiszę</h1>
        <img src="assets/img/hero.svg" alt="Ile wiszę">
        <PrimaryButton to="login" :block="true">
            Zaloguj się
        </PrimaryButton>
    </div>
</template>

<style lang="scss" scoped>
    aside {
        letter-spacing: 0.2em;
    }
</style>