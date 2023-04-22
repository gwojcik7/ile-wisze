
<script lang="ts" setup>
import { ref } from 'vue';
import Button from './Button.vue';

const classes = ref(['button--link']);

</script>
<template>
    <Button :class="classes" type="button">
        <slot />
    </Button>
</template>
<style lang="scss" scoped>
    .button--link {
        background: none;
        font-weight: normal;
        padding: 0.5em;
        text-decoration: underline;
    }
</style>
