import {makeAutoObservable} from "mobx";

export default class MoviesList {
    constructor() {
        this._countries = []
        this._directors = []
        this._genres = []
        this._periods = []
        this._movies = []
        this._selectedGenre = {}
        this._selectedDirector = {}
        this._selectedCountrie = {}
        this._selectedPeriod = {}
        this._page = 1
        this._totalCount = 0
        this._limit = 3
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
    setPage(page) {
        this._page = page
    }
    setTotalCount(count) {
        this._totalCount = count
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
    get totalCount() {
        return this._totalCount
    }
    get page() {
        return this._page
    }
    get limit() {
        return this._limit
    }
}