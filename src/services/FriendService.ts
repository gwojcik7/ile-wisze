import { useHttp } from "@/composables/useHttp";

export default class FriendService {
    static sendInvitation = async (login: string) => {
        const { http } = useHttp();

        try {
            const response = await http.post('/friend', { login });
    
            return response.data;
    
        } catch (error: any) {
            if(error.response.data.message) {
                throw new Error(error.response.data.message);
            }
            
            switch(error.response.status) {
                case 401:
                    throw new Error('Unauthorized');
                case 404:
                    throw new Error('User not found');
                case 500:
                    throw new Error('Server error');
                default:
                    throw new Error(`Unknown error (${error.message})}`);
            }
        }
    }

    static getFriends = async () => {
        const { http } = useHttp();

        try {
            const response = await http.get('/friend');
    
            return response.data;
    
        } catch (error: any) {
            switch(error.response.status) {
                case 401:
                    throw new Error('Unauthorized');
                case 500:
                    throw new Error('Server error');
                default:
                    throw new Error(`Unknown error (${error.message})}`);
            }
        }
    }

    public static getPending = async () => {
        const { http } = useHttp();

        try {
            const response = await http.get('/friend/pending');
    
            return response.data;
    
        } catch (error: any) {
            switch(error.response.status) {
                case 401:
                    throw new Error('Unauthorized');
                case 500:
                    throw new Error('Server error');
                default:
                    throw new Error(`Unknown error (${error.message})}`);
            }
        }
    }
}