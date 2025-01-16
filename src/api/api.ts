import axios from 'axios';
import { LoginAuth } from '../redux/auth-reducer';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: { 'API-KEY': '9fc5eb4c-a7cb-4f8b-ac15-1dc2b2f8171f' },
});

export const usersAPI = {
    async getUsers(currentPage: number, pageSize: number) {
        const res = await instance.get(`users?page=${currentPage}&count=${pageSize}`);
        return res.data;
    },

    async follow(userId: number) {
        const res = await instance.post(`follow/${userId}`);
        return res.data;
    },

    async unfollow(userId: number) {
        const res = await instance.delete(`follow/${userId}`);
        return res.data;
    },
};

export const profileAPI = {
    async getProfile(userId: string) {
        const res = await instance.get(`profile/${userId}`);
        return res;
    },
    async getStatus(userId: string) {
        const res = await instance.get(`profile/status/${userId}`);
        return res;
    },
    async updateStatus(status: string) {
        const res = await instance.put(`profile/status`, { status: status });
        return res;
    },
};

export const authAPI = {
    async me() {
        try {
            const res = await instance.get(`auth/me`);
            return res.data;
        } catch (error) {
            console.error('Failed to fetch', error);
            return null;
        }
    },

    async login(data: LoginAuth) {
        const res = await instance.post('auth/login', data);
        return res.data;
    },
    async logout() {
        const res = await instance.delete('auth/login');
        return res.data;
    },
};
