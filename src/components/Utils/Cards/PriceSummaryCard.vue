<script lang="ts" setup>
import Card from './Card.vue';
import IconPlus from '@/components/Global/Icons/IconPlus.vue';
import IconMinus from '@/components/Global/Icons/IconMinus.vue';

enum IconType {
    minus = 'minus',
    plus = 'plus'
}

interface Props {
    title: string;
    price: string | number;
    icon: string | IconType;
}

const props = defineProps<Props>();

</script>
<template>
    <Card class="card">
        <div v-if="icon" :class="['icon', 'icon--' + icon]">
            <IconPlus v-if="props.icon === IconType.plus" />
            <IconMinus v-if="props.icon === IconType.minus" />
        </div>
        <div class="title">
            {{ props.title }}
        </div>
        <div class="price">
            {{ props.price.toString().replace('.', ',') }} <span class="currency">zł</span>
        </div>
    </Card>
</template>
<style lang="scss" scoped>
.card {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.title {
    flex-grow: 1;
}

.icon {
    width: 3.2rem;
    height: 3.2rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    &--plus {
        background-color: var(--color-success);
    }

    &--minus {
        background-color: var(--color-error);
    }
}

.price {
    font-size: 2.6rem;
    font-weight: bold;
}
</style>