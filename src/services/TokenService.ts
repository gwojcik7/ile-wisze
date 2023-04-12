export default class TokenService {
    static get() {
        return localStorage.getItem('token');
    }

    static set(token: string) {
        if(!token) {
            this.remove();
        }

        localStorage.setItem('token', token);
    }

    static remove() {
        localStorage.removeItem('token');
    }
}