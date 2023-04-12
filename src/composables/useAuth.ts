import { ref } from "vue";

const isSignedIn = ref(false);

export function useAuth() {
    return {
        isSignedIn
    }
}