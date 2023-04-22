<script lang="ts" setup>
import PrimaryButton from '@/components/Utils/Buttons/PrimaryButton.vue';
import heroImg from '@/assets/img/hero.svg';

</script>
<template>
    <div class="home">
        <div class="title">
            <h1>Ile wiszę?</h1>
        </div>
        <div class="slogan">
            Dzielenie się jest piękne - zwłaszcza, jeśli chodzi o&nbsp;rachunki!
        </div>
        <div class="subtitle">
            Zarejestruj się i&nbsp;ścigaj swoich przyjaciół o&nbsp;hajs.
        </div>
        <img :src="heroImg" alt="Ile wiszę">
        <PrimaryButton to="auth" class="login-button">
            Zacznij już teraz
        </PrimaryButton>
        <aside>
            Made by <a href="https://arkonsoft.pl" noopener noreferrer target="_blank">
                arkonsoft.pl
            </a>
        </aside>
    </div>
</template>

<style lang="scss" scoped>
    @import '@/assets/styles/extends.scss';

    .home {
        @extend %bg-1;
        display: flex;
        flex-direction: column;
        max-height: 100%;
        overflow: hidden;
        justify-content: space-between;
        align-items: center;
        gap: 1.5rem;
    }

    .title {
        width: 100%;
        @extend %text-gradient-1;

        h1 {
            font-size: 7rem;
            font-weight: bold;
        }
    }

    .slogan {
        font-size: 2.4rem;
        font-weight: bold;
    }

    .subtitle {
        font-size: 1.8rem;
        color: var(--color-text-2);
        margin-bottom: 1.5rem;
    }

    img {
        max-height: 280px;
        max-width: 100%;
    }

    .login-button {
        margin-top: -1.5rem;
        margin-bottom: 1.5rem;
    }

    aside {
        color: var(--color-text-2);
    }
</style>