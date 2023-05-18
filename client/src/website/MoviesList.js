import {makeAutoObservable} from "mobx";

export default class MoviesList {
    constructor() {
        this._countries = [
            {id: 1, name: "Россия"},
            {id: 2, name: "Америка"}
        ]
        this._directors = [
            {id:1, name:"Тарантино"},
            {id:2, name:"Юдашкин"}
        ]
        this._genres = [
            {id:1, name:'Ужасы'},
            {id:2, name:'Комедия'},
            {id:3, name:'Драма'},
            {id:4, name:'Триллер'},
            {id:5, name:'Мюзикл'},
        ]
        this._periods = [
            {id:1, name:"20 век"},
            {id:2, name:"19 век"}
        ]
        this._movies = [
            {id:1, name:"Убить Билла", description:"Убили Билла", img:'https://i.pinimg.com/originals/14/72/25/1472254e5c903212fef3c89e4c9b8a6d.jpg', year: "2002", link:'https://d.ixfilm.org/4460-ubit-billa-2003.html'},
            {id:2, name:"Пчелка Майя", description:"Жила пчела с жалком", img: 'https://mobimg.b-cdn.net/v3/fetch/83/8330ddb501dc90b18b52c1f496fb951b.jpeg', year:"2015", link:'https://vseseriipodriad.ru/multfilmy/387-pchelka-mayya.html'},
            {id:3, name:"Убить Билла", description:"Убили Билла", img:'https://i.pinimg.com/originals/14/72/25/1472254e5c903212fef3c89e4c9b8a6d.jpg', year: "2002", link:'https://d.ixfilm.org/4460-ubit-billa-2003.html'},
            {id:4, name:"Пчелка Майя", description:"Жила пчела с жалком", img: 'https://mobimg.b-cdn.net/v3/fetch/83/8330ddb501dc90b18b52c1f496fb951b.jpeg', year:"2015", link:'https://vseseriipodriad.ru/multfilmy/387-pchelka-mayya.html'},
            {id:5, name:"Убить Билла", description:"Убили Билла", img:'https://i.pinimg.com/originals/14/72/25/1472254e5c903212fef3c89e4c9b8a6d.jpg', year: "2002", link:'https://d.ixfilm.org/4460-ubit-billa-2003.html'},
            {id:6, name:"Пчелка Майя", description:"Жила пчела с жалком", img: 'https://mobimg.b-cdn.net/v3/fetch/83/8330ddb501dc90b18b52c1f496fb951b.jpeg', year:"2015", link:'https://vseseriipodriad.ru/multfilmy/387-pchelka-mayya.html'},
            {id:7, name:"Убить Билла", description:"Убили Билла", img:'https://i.pinimg.com/originals/14/72/25/1472254e5c903212fef3c89e4c9b8a6d.jpg', year: "2002", link:'https://d.ixfilm.org/4460-ubit-billa-2003.html'},
            {id:8, name:"Пчелка Майя", description:"Жила пчела с жалком", img: 'https://mobimg.b-cdn.net/v3/fetch/83/8330ddb501dc90b18b52c1f496fb951b.jpeg', year:"2015", link:'https://vseseriipodriad.ru/multfilmy/387-pchelka-mayya.html'}

        ]
        this._selectedGenre = {}
        this._selectedDirector = {}
        this._selectedCountrie = {}
        this._selectedPeriod = {}
        makeAutoObservable(this)
    }


    setCountries(countries) {
        this._countries = countries
    }
    setDirectors(directors) {
        this._directors = directors
    }
    setGenres(genres) {
        this._genres = genres
    }
    setPeriods(periods) {
        this._periods = periods
    }
    setMovies(movies) {
        this._movies = movies
    }
    setSelectedGenre(genres)
    {
        this._selectedGenre = genres
    }
    setSelectedDirector(directors)
    {
        this._selectedDirector = directors
    }
    setSelectedCountrie(countries)
    {
        this._selectedCountrie = countries
    }
    setSelectedPeriod(periods)
    {
        this._selectedPeriod = periods
    }



    get countries() {
        return this._countries
    }
    get directors() {
        return this._directors
    }

    get genres() {
        return this._genres
    }

    get periods() {
        return this._periods
    }
    get movies() {
        return this._movies
    }
    get selectedGenre() {
        return this._selectedGenre
    }
    get selectedDirector() {
        return this._selectedDirector
    }
    get selectedCountrie() {
        return this._selectedCountrie
    }
    get selectedPeriod() {
        return this._selectedPeriod
    }
}