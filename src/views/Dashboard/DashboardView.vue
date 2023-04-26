<script lang="ts" setup>
import { useAuth } from '@/composables/useAuth';
import type User from '@/models/User';
import { ref, watch, type Ref, onMounted } from 'vue';
import PriceSummaryCard from '@/components/Utils/Cards/PriceSummaryCard.vue';
import LastBills from '@/components/Bill/LastBills.vue';
import useBill from '@/composables/useBill';
import BillService from '@/services/BillService';

const { user } = useAuth();
const { totalRepayment, totalOwed } = useBill();

const userData: Ref<User | null> = ref({} as User);
const totalRepaymentData = ref(0);
const totalOwedData = ref(0);

watch(user, () => {
    userData.value = user.value;
});

watch(totalRepayment, () => {
    totalRepaymentData.value = totalRepayment.value;
});

watch(totalOwed, () => {
    totalOwedData.value = totalOwed.value;
});

onMounted(async () => {
    userData.value = user.value;
    totalRepayment.value = await BillService.getTotalRepayment();
    totalOwed.value = await BillService.getTotalOwed();
});

</script>
<template>
    <div class="dashboard">
        <h1 class="greeting" v-if="userData?.firstName">
            Cześć, <span>{{ userData.firstName }}</span>
        </h1>
        <div class="bills-summary">
            <PriceSummaryCard icon="plus" title="Twoi znajomi wiszą Ci" :price="totalRepaymentData" />
            <PriceSummaryCard icon="minus" title="Wisisz innym" :price="totalOwedData" />
        </div>
        <div class="last-bills">
            <LastBills />
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