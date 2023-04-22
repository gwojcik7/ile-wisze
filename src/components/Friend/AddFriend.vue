<script lang="ts" setup>
import { ref, type Ref } from 'vue';
import PrimaryButton from '../Utils/Buttons/PrimaryButton.vue';
import FriendService from '@/services/FriendService';
import useFriend from '@/composables/useFriend';
import Alert from '../Utils/Alerts/Alert.vue';

const login = ref('');
const errors: Ref<String[]> = ref([]);

const onSubmit = async () => {
    errors.value = [];0
    try {
        await FriendService.sendInvitation(login.value);

        login.value = '';
        useFriend().fetchSentInvitations();
    } catch (error: any) {
        errors.value.push(error.message);
    }
}

</script>
<template>
    <div class="add-friend">
        <h2>Dodaj znajomego</h2>

        <Alert v-if="errors.length" class="alert alert-danger">
            <ul>
                <li v-for="error, index in errors" :key="index">
                    {{ error }}
                </li>
            </ul>
        </Alert>
        <form @submit.prevent="onSubmit">
            <div class="form-group">
                <input type="search" v-model="login" placeholder="john@example.com" required>
            </div>
            <PrimaryButton :block="true">
                Zaproś
            </PrimaryButton>
        </form>
    </div>
</template>