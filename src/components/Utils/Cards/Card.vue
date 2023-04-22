<template>
    <div class="card">
        <slot></slot>
    </div>
</template>
<style lang="scss" scoped>
.card {
    --opacity-bg: 0.05;
    padding: 1.5rem;
    background: rgba(255, 255, 255, var(--opacity-bg));
    backdrop-filter: blur(50px);
    border-radius: 15px;
    transition: background-color 0.2s ease-in-out;

    &:hover {
        --opacity-bg: 0.1;
    }
}
</style>