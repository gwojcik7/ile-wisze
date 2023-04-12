import { useHttp } from "@/composables/useHttp";
import TokenService from "./TokenService";
import router from "@/router";
import { useAuth } from "@/composables/useAuth";

const { isSignedIn } = useAuth();

export default class AuthService {
    static async signInWithLoginAndPassword(login: string, password: string) {
        const { http } = useHttp();
    
        try {
            const response = await http.post('/auth', {
                login, 
                password
            });
    
            TokenService.set(response.data.token);
            
            isSignedIn.value = true;

            router.push('/dashboard');

    
        } catch (error: any) {
            switch(error.response.status) {
                case 401: 
                    throw new Error('Invalid login or password');
                case 500:
                    throw new Error('Server error');
                default:
                    throw new Error(`Unknown error (${error.message})}`);
            }
        }
    }
    
    static signOut() {
        TokenService.remove();

        isSignedIn.value = false;

        router.push('/auth');
    }

    static async validateToken() {
        const { http } = useHttp();
    
        try {
            const response = await http.post('/auth/token/validate', { token: TokenService.get() });
    
            isSignedIn.value = (response.status === 200);
    
        } catch (error: any) {
            switch(error.response.status) {
                case 401:
                    isSignedIn.value = false;
                    break;
                case 500:
                    throw new Error('Server error');
                default:
                    throw new Error(`Unknown error (${error.message})}`);
            }
        }
    }
}