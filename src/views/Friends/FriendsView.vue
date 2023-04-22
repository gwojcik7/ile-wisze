<script lang="ts" setup>
import AddFriend from '@/components/Friend/AddFriend.vue';
import SentInvitations from '@/components/Friend/SentInvitations.vue';
import WaitingInvitations from '@/components/Friend/WaitingInvitations.vue';
</script>
<template>
    <div class="friends">
        <AddFriend />
        <SentInvitations />
        <WaitingInvitations />
    </div>
</template>
<style lang="scss" scoped>
    .friends {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
</style>