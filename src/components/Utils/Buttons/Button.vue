<script lang="ts" setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

interface Props {
    to?: string;
    block?: any;
    size?: string;
}

const { to, block, size } = defineProps<Props>();
const classes = ref(['button']);

if(block) {
    classes.value.push('button--block');
}

if(size) {
    classes.value.push(`button--${size}`);
}

</script>

<template>
    <RouterLink v-if="to" :to="to" :class="classes">
        <slot />
    </RouterLink>
    <button v-else class="button" :class="classes">
        <slot />
    </button>
</template>
<style lang="scss" scoped>
    .button {
        cursor: pointer;
        border: none;
        border-radius: 1.5rem;
        padding: 1em 2em;
        font-weight: bold;
        position: relative;
        text-decoration: none;
        display: inline-block;
        text-align: center;
        color: currentColor;
        font-size: 2rem;

        &::selection {
            background-color: transparent;
        }

        &:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }

        &--block {
            display: block;
            width: 100%;
        }

        &--sm {
            font-size: 1.4rem;
        }
    }
</style>