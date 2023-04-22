import type User from "@/models/User";
import AuthService from "@/services/AuthService";
import { ref, type Ref } from "vue";

const isSignedIn = ref(false);
const user: Ref<User | null> = ref(null);
const token = ref(localStorage.getItem('token') || '');

export function useAuth() {
    return {
        isSignedIn,
        user,
        token
    }
}