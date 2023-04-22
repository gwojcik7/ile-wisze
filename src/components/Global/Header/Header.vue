<script lang="ts" setup>
import router from '@/router';
import MenuLinks from '@/components/Global/MenuLinks/MenuLinks.vue';
import useMenu from '@/composables/useMenu';
import { useAuth } from '@/composables/useAuth';
import { ref, watch, type Ref, computed, type ComputedRef, onMounted } from 'vue';
import type User from '@/models/User';
import IconMenu from '../Icons/IconMenu.vue';
import IconClose from '../Icons/IconClose.vue';
import IconBell from '../Icons/IconBell.vue';

const { isMenuOpen, openMenu, closeMenu } = useMenu();
const { user } = useAuth();

const userData: Ref<User | null> = ref({} as User);

watch(user, () => {
    userData.value = user.value;
});

onMounted(() => {
    userData.value = user.value;
});

const userInitials: ComputedRef<string> = computed(() => {
    let initials = '';

    if (!userData.value) {
        return '';
    }

    if (userData.value.firstName) {
        initials += userData.value.firstName.charAt(0);
    }

    if (userData.value.lastName) {
        initials += userData.value.lastName.charAt(0);
    }

    return initials;
});
</script>

<template>
    <header>
        <div class="menu">
            <div class="col">
                <button class="hamburger" @click.prevent="openMenu">
                    <IconMenu />
                </button>
                <div class="page-name" v-if="router.currentRoute.value.name != 'home'">
                    {{ router.currentRoute.value.meta.title }}
                </div>
            </div>
            <div class="col">
                <div class="notifications">
                    <IconBell />
                    <span class="badge">
                        0
                    </span>
                </div>
                <div class="user-avatar" v-if="userInitials">
                    <span>
                        {{ userInitials }}
                    </span>
                </div>
            </div>
            <div :class="{ 'menu-modal': true, 'active': isMenuOpen }">
                <button class="close" @click.prevent="closeMenu">
                    <IconClose />
                </button>
                <MenuLinks />
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
.menu {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    gap: 1.5rem;

    .col {
        display: flex;
        align-items: center;
        gap: 1.5rem;
    }
}

.menu-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    backdrop-filter: blur(100px);
    z-index: 100;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    pointer-events: none;
    color: var(--color-text-1);
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
    color: currentColor;
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 6rem;
    margin-left: -1.5rem;
    margin-right: -1.5rem;
}

.page-name {
    font-weight: bold;
    font-size: 2rem;
    text-transform: uppercase;
}

.notifications {
    justify-self: flex-end;
    position: relative;

    .badge {
        position: absolute;
        right: 0;
        top: 0;
        transform: translate(50%, -50%);

        width: 1.6rem;
        height: 1.6rem;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--color-primary);
        border-radius: 50%;
        line-height: 1;
        font-size: 1rem;
        font-weight: bold;
    }
}

.user-avatar {
    position: relative;
    width: 4.4rem;
    height: 4.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 1;
    border-radius: 50%;
    background: linear-gradient(120deg, var(--color-secondary), var(--color-primary));
    font-weight: bold;

    span {
        position: relative;
    }

    &:before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        transform-origin: center;
        transform: scale(0.9);
        background: var(--color-bg-1);
    }

}
</style>