<script lang="ts" setup>
import PrimaryButton from '@/components/Utils/Buttons/PrimaryButton.vue';
import LinkButton from '@/components/Utils/Buttons/LinkButton.vue';
import { ref } from 'vue';
import AuthService from '@/services/AuthService';
import Input from '@/components/Utils/Forms/Input.vue';
import Alert from '@/components/Utils/Alerts/Alert.vue';

const login = ref('gwojcik@arkonsoft.pl');
// const login = ref('jkowalski@gmail.com');
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
        <h1>Witaj ponownie!</h1>
        <div class="subtitle">
            Tęskniliśmy za Twoją chorobliwą żądzą pieniędzy
        </div>
        <Alert v-if="errors.length" variant="error">
            <ul>
                <li v-for="error, index in errors" :key="index">
                    {{ error }}
                </li>
            </ul>
        </Alert>
        <form @submit.prevent="onSubmit">
            <Input type="text" label="Twój login" v-model="login" />

            <Input type="password" label="Twoje hasło" v-model="password" />

            <PrimaryButton :block="true" class="login-button">
                Zaloguj się
            </PrimaryButton>
            <LinkButton :block="true" to="/" class="back-button" size="sm">
                Wróć do strony głównej
            </LinkButton>
        </form>
        <aside>
            Chcesz zmienić hasło? To sobie chciej, nie ma takiej funkcji jeszcze :/
        </aside>
    </div>
</template>
<style lang="scss" scoped>
@import '@/assets/styles/extends.scss';

.auth {
    @extend %bg-1;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-top: 3rem;
}

h1 {
    font-size: 3.5rem;
    font-weight: bold;
}

.subtitle {
    font-size: 2.4rem;
    margin-bottom: 1.5rem;
}

form {
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

aside {
    text-align: center;
}
</style>