<script lang="ts" setup>
import { onMounted, ref, watch, type Ref } from 'vue';
import useFriend from '@/composables/useFriend';
import type User from '@/models/User';

const { pending, fetchPending} = useFriend();

const friends: Ref<User[]> = ref([])

onMounted(() => {
    fetchPending();
});

watch(pending, () => {
    friends.value = pending.value;
});

</script>
<template>
    <div class="pending-friends" v-if="friends.length">
        <h2>Wysłane zaproszenia</h2>
        <ul>
            <li v-for="user in friends" :key="user.id">
                {{ user.login }}
            </li>
        </ul>
    </div>
</template>