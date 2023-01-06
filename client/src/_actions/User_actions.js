import axios from 'axios';


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

export function authrUser(){
    const requset = axios.get('/api/users/auth')
    .then(res => res.data)

    return {
        type: "AUTH_USER",
        payload: requset
    }
}