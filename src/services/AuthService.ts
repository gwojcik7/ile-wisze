import router from "@/router";
import { useAuth } from "@/composables/useAuth";
import User from "@/models/User";
import api from "@/api/api";

const { isSignedIn, user, token } = useAuth();

export default class AuthService {
    static async signInWithLoginAndPassword(login: string, password: string) {    
        try {
            const response = await api.post('/auth', {
                login, 
                password
            });
    
            this.setToken(response.data.token);
            this.setUser(response.data.user);
            
            isSignedIn.value = true;

            router.push('/dashboard');

    
        } catch (error: any) {
            switch(error.response.status) {
                case 401: 
                    throw new Error('Błędny login lub hasło');
                case 500:
                    throw new Error('Server error');
                default:
                    throw new Error(`Unknown error (${error.message})}`);
            }
        }
    }
    
    static signOut() {
        this.removeToken();
        this.removeUser();

        isSignedIn.value = false;

        router.push('/auth');
    }

    static async validateToken() {
        try {
            const response = await api.post('/auth/token/validate', { token: AuthService.getToken() });
    
            isSignedIn.value = (response.status === 200);
            
            this.setUser(new User(response.data.user));
    
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

    static getToken() {
        return localStorage.getItem('token');
    }

    static setToken(value: string) {
        if(!value) {
            this.removeToken();
        }
        token.value = value;
        localStorage.setItem('token', value);
    }

    static removeToken() {
        token.value = '';
        localStorage.removeItem('token');
    }

    static setUser(userData: User) {
        user.value = userData;
        localStorage.setItem('user', JSON.stringify(userData));
    }

    static getUser() {
        return JSON.parse(localStorage.getItem('user') || '{}');
    }

    static removeUser() {
        user.value = null;
        localStorage.removeItem('user');
    }
}