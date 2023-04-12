import { ref } from "vue";

const isMenuOpen = ref(false);

function toggleMenu() {
    isMenuOpen.value = !isMenuOpen.value;
}

function closeMenu() {
    isMenuOpen.value = false;
}

function openMenu() {
    isMenuOpen.value = true;
}

export default function useMenu() {
    return {
        isMenuOpen,
        toggleMenu,
        closeMenu,
        openMenu
    }
}