<script lang="ts" setup>
import { ref } from 'vue';

interface Props {
    variant?: string
}

const { variant } = defineProps<Props>();
const classes = ref(['alert']);

if(variant) {
    classes.value.push(`alert--${variant.toLowerCase()}`);
}
</script>

<template>
    <div class="alert">
        <slot></slot>
    </div>
</template>

<style lang="scss" scoped>
    .alert {
        display: block;
        padding: 1em;
        border: 1px solid currentColor;
        color: var(--color-primary);

        &--error {
            color: red;
        }
    }
</style>