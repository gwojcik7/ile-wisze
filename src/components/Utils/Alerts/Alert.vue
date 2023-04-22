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
    <div :class="classes">
        <slot></slot>
    </div>
</template>

<style lang="scss" scoped>
    .alert {
        display: block;
        padding: 1em;

        &--error {
            background-color: var(--color-error);
        }
    }
</style>