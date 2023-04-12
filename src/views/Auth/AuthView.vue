<script lang="ts" setup>
import PrimaryButton from '@/components/Utils/Buttons/PrimaryButton.vue';
import { ref } from 'vue';
import AuthService from '@/services/AuthService';

const login = ref('gwojcik@arkonsoft.pl');
const password = ref('12345');

const errors = ref<string[]>([]);

const onSubmit = async () => {
    errors.value = [];

    try {
        await AuthService.signInWithLoginAndPassword(login.value, password.value);
    } catch (error: any) {
        errors.value.push(error.message);
    }
}
</script>
<template>
    <div class="auth">
        <h1>Zaloguj się</h1>
        <div class="error" v-if="errors.length">
            <ul>
                <li v-for="error in errors" :key="error">
                    {{ error }}
                </li>
            </ul>
        </div>
        <p>Kiedyś przychodzi taki dzień, gdy musisz spłacić swój dług. Jeżeli to nie dziś - nie loguj się.</p>
        <form @submit.prevent="onSubmit">
            <div class="form-group">
                <label for="">Login</label>
                <input type="text" v-model="login" placeholder="jan@kowalski.pl">
            </div>

            <div class="form-group">
                <label for="">Hasło</label>
                <input type="password" v-model="password" placeholder="***************">
            </div>
            <PrimaryButton :block="true">
                Zaloguj się
            </PrimaryButton>
        </form>
    </div>
</template>
<style lang="scss" scoped>
.auth {
    display: grid;
    align-content: center;
    height: 100%;
    gap: 2rem;
    max-width: 400px;
    margin: 0 auto;
}

h1 {
    font-size: 3rem;
    margin: 0;
}

.form-group {
    display: grid;
    gap: 0.5rem;
}

input {
    padding: 1rem;
    border: 1px solid var(--color-text-2);
    border-radius: 0;
}

.form-group {
    margin-bottom: 1.5rem;
}
.error {
    background-color: var(--color-error);
    color: var(--color-text-1);
    border: 1px solid var(--color-error);
    padding: 1rem;
    ul {
        list-style-type: none;
        padding-left: 0;
        margin: 0;
    }
}
</style>