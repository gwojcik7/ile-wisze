<script lang="ts" setup>
import { onMounted, ref, watch, type Ref } from 'vue';
import useFriend from '@/composables/useFriend';
import type User from '@/models/User';

const { friends, fetchFriends} = useFriend();

const users: Ref<User[]> = ref([])

onMounted(() => {
    fetchFriends();
});

watch(friends, () => {
    friends.value = users.value;
});

</script>
<template>
    <div class="friends-list" v-if="friends.length">
        <h2>Znajomi</h2>
        <ul>
            <li v-for="user in friends" :key="user.id" class="user">
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