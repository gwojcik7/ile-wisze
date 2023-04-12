import axios from 'axios';
import TokenService from '@/services/TokenService';

const token = TokenService.get();

const http = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
    }
});

export function useHttp() {

    return { http };
}