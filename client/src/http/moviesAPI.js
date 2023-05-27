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


//genres
export const createGenres   = async (genres) => {
    const {data} = await $authHost.post('api/genres', genres)
    return data
}

export const fetchGenres   = async () => {
    const {data} = await $host.get('api/genres')
    return data
}


//periods
export const createPeriods = async (periods) => {
    const {data} = await $authHost.post('api/periods', periods)
    return data
}
export const fetchPeriods = async () => {
    const {data} = await $host.get('api/periods')
    return data
}

//movies
export const createMovies = async (movies) => {
    const {data} = await $authHost.post('api/movies', movies)
    return data
}
export const fetchMovies = async () => {
    const {data} = await $host.get('api/movies')
    return data
}

export const fetchOneMovie = async (id) => {
    const {data} = await $host.get('api/movies' + id)
    return data
}



