<script lang="ts" setup>
import { onMounted, ref, watch, type Ref } from 'vue';
import useFriend from '@/composables/useFriend';
import type User from '@/models/User';

const { sentInvitations, fetchSentInvitations} = useFriend();

const users: Ref<User[]> = ref([])

onMounted(() => {
    fetchSentInvitations();
});

watch(sentInvitations, () => {
    users.value = sentInvitations.value;
});

</script>
<template>
    <div class="pending-friends" v-if="users.length">
        <h2>Wysłane zaproszenia</h2>
        <ul>
            <li v-for="user in users" :key="user.id" class="user">
                <span class="user__name">
                    {{ user.firstName }} {{ user.lastName }}
                </span>
                <span class="user__login">
                    {{ user.login }}
                </span>
            </li>
        </ul>
    </div>
</template>
<style lang="scss" scoped>

    ul {
        padding-left: 0;
        list-style: none;
    }
    .user {
        display: flex;
        flex-direction: column;
        gap: 5px;
        margin-bottom: 15px;
        &__name {
            font-weight: bold;
        }
        &__login {
            opacity: 0.3;
        }
    }
</style>