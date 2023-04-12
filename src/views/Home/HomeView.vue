<script lang="ts" setup>
import PrimaryButton from '@/components/Utils/Buttons/PrimaryButton.vue';
import heroImg from '@/assets/img/hero.svg';

</script>
<template>
    <div class="home">
        <aside>
            Made by Arkonsoft
        </aside>
        <h1>Ile wiszę</h1>
        <img :src="heroImg" alt="Ile wiszę">
        <PrimaryButton to="auth" :block="true">
            Zaloguj się
        </PrimaryButton>
    </div>
</template>

<style lang="scss" scoped>
    .home {
        display: grid;
        align-content: space-around;
        height: 100%;
        gap: 2rem;
        max-width: 400px;
        margin: 0 auto;
    }
    aside {
        letter-spacing: 0.2em;
    }
    h1 {
        font-size: 7rem;
        margin: 0;
    }
    img {
        height: 100%;
        width: auto;
        max-height: 350px;
        margin: 0 auto;
        display: block;
    }
</style>