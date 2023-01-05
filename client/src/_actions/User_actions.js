import axios from 'axios';
import {
    LOGIN_USER
} from './types';

export function loginUser(dataTosubmit){
    const requset = axios.post('/api/users/login', dataTosubmit)
    .then(res => res.data)

    return {
        type: "LOGIN_USER",
        payload: requset
    }
}

export function registerUser(dataTosubmit){
    const requset = axios.post('/api/users/register', dataTosubmit)
    .then(res => res.data)

    return {
        type: "REGISTER_USER",
        payload: requset
    }
}