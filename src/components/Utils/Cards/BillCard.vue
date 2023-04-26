<script lang="ts" setup>
import type Bill from '@/models/Bill';
import Card from './Card.vue';
import { useAuth } from '@/composables/useAuth';
import { onMounted, ref, watch, type Ref } from 'vue';
import type User from '@/models/User';

interface Props {
    bill: Bill;
}

const { bill } = defineProps<Props>();
const { user } = useAuth();

const currentUser: Ref<User | null> = ref(null);

onMounted(() => {
    currentUser.value = user.value;
});

watch(user, () => {
    currentUser.value = user.value;
});

</script>
<template>
    <Card class="card">
        <div>
            <div class="user-name" v-if="user">
                {{ user.id === bill.user.id ? `${bill.recipient.firstName} ${bill.recipient.lastName}` :
                    `${bill.user.firstName} ${bill.user.lastName}` }}

            </div>
            <div class="purpose">
                {{ bill.reason }}
            </div>
            <div class="date">
                {{ bill.dateAdd }}
            </div>
        </div>
        <div>
            <div class="price">
                {{ bill.price }}
            </div>
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