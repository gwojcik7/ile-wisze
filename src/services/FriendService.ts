import api from "@/api/api";

export default class FriendService {
    static sendInvitation = async (login: string) => {
        try {
            const response = await api.post('/friend', { login });
    
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
        

        try {
            const response = await api.get('/friend');
    
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

    public static getSentInvitations = async () => {
        

        try {
            const response = await api.get('/friend/sentInvitations');
    
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

    public static getWaitingInvitations = async () => {
        

        try {
            const response = await api.get('/friend/waitingInvitations');
    
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