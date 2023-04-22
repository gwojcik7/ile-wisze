<script lang="ts" setup>
import AuthService from '@/services/AuthService';
import { useAuth } from '@/composables/useAuth';
import { onMounted, ref, watch } from 'vue';
import router from '@/router';
import useMenu from '@/composables/useMenu';

enum LinkVisibility {
    ALWAYS,
    SIGNED_IN,
    NOT_SIGNED_IN,
}

interface Link {
    name: string;
    to: string;
    visibility: LinkVisibility;
}

const { isSignedIn } = useAuth();
const { closeMenu } = useMenu();

const rawLinks: Link[] = [
    {
        name: 'Kokpit',
        to: '/dashboard',
        visibility: LinkVisibility.SIGNED_IN,
    },
    {
        name: 'Porachunki',
        to: '/bills/add',
        visibility: LinkVisibility.SIGNED_IN,
    },
    {
        name: 'Znajomi',
        to: '/friends',
        visibility: LinkVisibility.SIGNED_IN,
    },
];

const links = ref<Link[]>([]);

function updateLinks() {
    links.value = rawLinks.filter(link => {
        switch (link.visibility) {
            case LinkVisibility.ALWAYS:
                return true;
            case LinkVisibility.SIGNED_IN:
                return isSignedIn.value;
            case LinkVisibility.NOT_SIGNED_IN:
                return !isSignedIn.value;
            default:
                return false;
        }
    });
}

const signOut = () => {
    closeMenu();
    AuthService.signOut();
    router.push('/auth');
};

onMounted(() => {
    updateLinks();
});

watch(isSignedIn, updateLinks);
</script>

<template>
    <nav>
        <ul>
            <li v-for="link in links" :key="link.name" :class="{ active: link.to == router.currentRoute.value.path }">
                <RouterLink :to="link.to" @click="closeMenu">{{ link.name }}</RouterLink>
            </li>
        </ul>
        <ul class="sign-out" v-if="isSignedIn">
            <li>
                <a href="#" @click.prevent="signOut">Wyloguj się</a>
            </li>
        </ul>
    </nav>
</template>

<style lang="scss" scoped>
nav {
    padding: 0 2rem;
    font-size: 3.2rem;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between
}

ul {
    list-style-type: none;
    padding-left: 0;
    margin: 0;
}

li {
    &.active {
        font-weight: bold;
    }
}

a {
    display: block;
    color: currentColor;
    text-decoration: none;
    padding: 1.25rem 0;
}

.sign-out {
    margin-top: 2rem;

    &:before {
        content: "";
        display: block;
        width: 100%;
        height: 1px;
        background: linear-gradient(45deg, var(--color-primary) 20%, var(--color-secondary) 90%, transparent 100%);
    }
}
</style>