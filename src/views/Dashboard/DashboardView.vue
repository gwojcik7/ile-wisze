<script lang="ts" setup>
import { useAuth } from '@/composables/useAuth';
import type User from '@/models/User';
import { ref, watch, type Ref, onMounted } from 'vue';
import Card from '@/components/Utils/Cards/Card.vue'
import PriceSummaryCard from '@/components/Utils/Cards/PriceSummaryCard.vue';
import IconPlus from '@/components/Global/Icons/IconPlus.vue';

const { user } = useAuth();

const userData: Ref<User | null> = ref({} as User);

watch(user, () => {
    userData.value = user.value;
});

onMounted(() => {
    userData.value = user.value;
});

</script>
<template>
    <div class="dashboard">
        <h1 class="greeting" v-if="userData?.firstName">
            Cześć, <span>{{ userData.firstName }}</span>
        </h1>
        <div class="bills-summary">
            <PriceSummaryCard icon="plus" title="Twoi znajomi wiszą Ci" price="12,74" />
            <PriceSummaryCard icon="minus" title="Wisisz innym" price="32,01" />
        </div>
    </div>
</template>
<style lang="scss" scoped>
@import '@/assets/styles/extends.scss';

.dashboard {
    @extend %bg-1;
    min-height: 400px;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

}

.greeting {
    font-weight: bold;
    font-size: 3.5rem;

    >span {
        @extend %text-gradient-1;
    }
}

.bills-summary {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
}
</style>