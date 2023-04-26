<script lang="ts" setup>
import BillCard from '../Utils/Cards/BillCard.vue';
import PrimaryButtonVue from '../Utils/Buttons/PrimaryButton.vue';
import { onMounted, ref } from 'vue';
import type Bill from '@/models/Bill';
import BillService from '@/services/BillService';

const bills = ref([] as Bill[]);

onMounted(async () => {
    await fetchBills();
});

async function fetchBills() {
    bills.value = await BillService.getPendingRecent();
}

</script>
<template>
    <div class="recent-bills">
        <h2>Najnowsze porachunki</h2>
        <div class="recent-bills__list">
            <BillCard v-for="bill in bills" :key="bill.id" :bill="bill" />
        </div>
        <div>
            <PrimaryButtonVue to="/bill/add" :block="true">
                Dodaj nowy rachunek
            </PrimaryButtonVue>
        </div>
    </div>
</template>
<style lang="scss" scoped>
h2 {
    font-size: 2.6rem;
    font-weight: bold;
}

.recent-bills {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}
</style>