import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

//countries
export const createCountries  = async (countries) => {
    const {data} = await $authHost.post('api/countries', countries)
    return data
}

export const fetchCountries  = async () => {
    const {data} = await $host.get('api/countries')
    return data
}


// directors
export const createDirectors   = async (directors) => {
    const {data} = await $authHost.post('api/directors', directors)
    return data
}

export const fetchDirectors   = async () => {
    const {data} = await $host.get('api/directors')
    return data
}



