<script lang="ts" setup>
import { computed, ref, type Ref } from 'vue';

interface Props {
    type: string;
    name?: string;
    id?: string;
    value?: Ref;
    label?: string;
    required?: boolean;
    modelValue?: string;
    'onUpdate:modelValue'?: (value: string) => void;
}

const props = defineProps<Props>();

const emit = defineEmits(['update:modelValue']);

const showPassword = ref(false);

const classes = ref(['input']);

classes.value.push(`input--${props.type}`);

if(props.required) {
    classes.value.push('input--required');
}

function updateValue(event: Event) {
    const target = event.target as HTMLInputElement;
    emit('update:modelValue', target.value);
}

const inputType = computed(() => {
    if(props.type != 'password' || !showPassword.value ) {
        return props.type;
    }

    return 'text';
});

</script>
<template>
    <div :class="classes">
        <input 
            :type="inputType" 
            :name="props.name" 
            :id="props.id" 
            :required="props.required" 
            :value="props.modelValue"
            placeholder=" " 
            @input="updateValue" />
        <label v-if="label" :for="id">
            <span>
                {{ label }}
            </span>
        </label>
        <button 
            v-if="props.type == 'password'" 
            type="button" 
            class="show"
            @click="showPassword = !showPassword"
        >
            {{ showPassword ? 'Ukryj' : 'Pokaż' }}
        </button>
    </div>
</template>
<style lang="scss" scoped>
@import '@/assets/styles/extends.scss';
.input {
    position: relative;
    font-size: 1.8rem;
    backdrop-filter: opacity(0.1);
    margin-bottom: 1.5rem;

    &--password {
        input {
            padding-right: calc(1em + 50px);
        }
    }
}

label {
    pointer-events: none;
    text-align: left;
    position: absolute;
    left: 1em;
    top: 1em;
    transform-origin: top left;
    transform: translateY(-1.5em) scale(0.8);
    transition: transform 0.25s ease, color 0.25s ease, background-color 0.25s ease;
    width: 100%;
    color: var(--color-text-1);
}

input {
    --color-bg: rgba(63, 0, 113, 0.5);
    padding: 1em;
    border-radius: 1.5rem;
    background-color: var(--color-bg);
    color: currentColor;
    font-size: 1em;
    border: 1px solid transparent;
    width: 100%;

    &:focus {
        ~ label {
            @extend %text-gradient-1;
        }
    }

    /* Display label in middle of input */
    &:placeholder-shown:not(:focus),
    &:placeholder-shown:not(:focus):not(:-webkit-autofill) {

        ~label,
        +.label {
            transform: translateY(0) scale(1);
            width: auto;
            color: var(--color-text-2);
        }
    }

    &:focus {
        outline: none;
    }
}

.show {
    position: absolute;
    right: 1em;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    color: currentColor;
    border: none;
    opacity: 0.5;
}
</style>