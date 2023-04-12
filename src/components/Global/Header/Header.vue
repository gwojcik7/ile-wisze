<script lang="ts" setup>
import iconMenu from '@/assets/img/icon-menu.svg';
import iconClose from '@/assets/img/icon-close.svg';
import router from '@/router';
import MenuLinks from '@/components/Global/MenuLinks/MenuLinks.vue';
import useMenu from '@/composables/useMenu';

const { isMenuOpen, openMenu, closeMenu } = useMenu();

</script>

<template>
    <header>
        <div class="menu">
            <button class="hamburger" @click.prevent="openMenu">
                <img :src="iconMenu" alt="Menu" />
            </button>
            <div class="page-name" v-if="router.currentRoute.value.name != 'home'">
                {{ router.currentRoute.value.meta.title }}
            </div>
            <div :class="{ 'menu-modal': true, 'active': isMenuOpen}">
                <button class="close" @click.prevent="closeMenu">
                    <img :src="iconClose" alt="Close" />
                </button>
                <MenuLinks/>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
    .menu {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }

    .menu-modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: var(--color-primary);
        z-index: 100;
        opacity: 0;
        transition: opacity 0.3s ease-in-out;
        pointer-events: none;
        color: var(--color-text-2);
        padding: var(--padding-app);

        &.active {
            opacity: 1;
            pointer-events: all;
        }
    }

    button {
        background: none;
        border: none;
        cursor: pointer;
        padding: 1.5rem;
        
        width: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 6rem;
    }
</style>