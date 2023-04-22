
<script lang="ts" setup>
import { ref } from 'vue';
import Button from './Button.vue';

const classes = ref(['button--primary']);

</script>
<template>
    <Button :class="classes">
        <slot />
    </Button>
</template>
<style lang="scss" scoped>
    .button--primary {
        --color-bg: var(--color-primary); 
        --color-text: var(--color-text-1);

        background-color: var(--color-bg);
        color: var(--color-text);
        border-color: var(--color-bg);
        
        transition: 
            color 0.2s ease-in-out, 
            background-color 0.2s ease-in-out, 
            border-color 0.2s ease-in-out;

        &:hover {
            --color-bg: var(--color-text-1);
            --color-text: var(--color-primary);
        }
    }
</style>
