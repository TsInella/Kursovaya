import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";
export const createCountries  = async (countries) => {
    const {data} = await $authHost.post('api/countries', countries)
    return data
}

export const fetchCountries  = async () => {
    const {data} = await $host.get('api/countries')
    return data
}

export const check = async () => {
    const {data} = await $authHost.get('api/users/auth')
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

