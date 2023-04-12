
<script lang="ts" setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

interface Props {
    to?: string;
    block?: boolean;
}

const {to, block} = defineProps<Props>();

const classes = ref(['primary-button']);

if(block) {
    classes.value.push('primary-button--block');
}

</script>
<template>
    <button v-if="!to" :class="classes">
        <slot />
    </button>
    <RouterLink v-else :to="to" :class="classes">
        <slot />
    </RouterLink>
</template>
<style lang="scss" scoped>
    .primary-button {
        --color-text: var(--color-text-2);
        --color-bg: var(--color-primary); 

        background-color: var(--color-bg);
        color: var(--color-text);
        border: 1px solid var(--color-bg);
        border: none;
        border-radius: 0;
        padding: 1em 2em;
        font-weight: 600;
        cursor: pointer;
        transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out, border-color 0.2s ease-in-out, transform 0.2s ease-in-out;
        position: relative;
        text-decoration: none;
        display: inline-block;
        text-align: center;

        &:hover {
            transform: translate(-5px, -5px);
            &:before {
                transform: translate(10px, 10px);
            }
        }

        &:before {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            display: block;
            width: 100%;
            height: 100%;
            border: 1px solid var(--color-bg);
            transform: translate(5px, 5px);
            transition: transform 0.2s ease-in-out;
        }

        &:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }

        &--block {
            display: block;
            width: 100%;
        }
    }
</style>
