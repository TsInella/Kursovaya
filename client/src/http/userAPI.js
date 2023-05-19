import {$authHost, $host} from "./index";

export const registration = async (email, password) => {
    const response = await $host.post('api/users/registration', {email, password, role: 'ADMIN'})
    return response
}

export const login = async (email, password) => {
    const response = await $host.post('api/users/login', {email, password})
    return response
}

export const check = async () => {
    const response = await $host.post('api/auth/registration', )
    return response
}