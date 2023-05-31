const uuid = require('uuid');
const path = require('path')
const {Movies, MovieInfo} = require("../models/models");
const ApiError = require("../error/ApiError")
class MoviesController {
    async create(req, res, next) {
       try {
           let {name, description, somelink, year, rating, info} = req.body
           const {img} = req.files
           let fileName = uuid.v4() + '.jpg'
           img.mv(path.resolve(__dirname, '..', 'static',  fileName))
           const movies = await Movies.create({name, description, somelink, year, rating, info, img: fileName});

           if (info) {
               info = JSON.parse(info)
               info.forEach(i =>
                   MovieInfo.create({
                       title: i.title,
                       description: i.description,
                       moviesId: movies.id
                   })
               )
           }

           return res.json(movies)
       }
       catch (e)
       {
           next(ApiError.badRequest(e.message))
       }
    }
    async getAll(req, res) {
        let {countryId, directorId, genreId, limit, page} = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let allMovies;
        if (!countryId && !directorId && !genreId)
        {
            allMovies = await Movies.findAndCountAll({limit, offset})
        }
        if (!countryId && directorId && genreId)
        {
            allMovies = await Movies.findAndCountAll({where: {directorId, genreId}, limit, offset})
        }
        if (countryId && !directorId && genreId)
        {
            allMovies = await Movies.findAndCountAll({where: {countryId, genreId}, limit, offset})
        }
        if (countryId && directorId && !genreId)
        {
            allMovies = await Movies.findAndCountAll({where: {countryId, directorId}, limit, offset})
        }
        if (countryId && !directorId && !genreId)
        {
            allMovies = await Movies.findAndCountAll({where: {countryId}, limit, offset})
        }
        if (!countryId && directorId && !genreId)
        {
            allMovies = await Movies.findAndCountAll({where: {directorId}, limit, offset})
        }
        if (!countryId && !directorId && genreId)
        {
            allMovies = await Movies.findAndCountAll({where: {genreId}, limit, offset})
        }
        if (countryId && directorId && genreId)
        {
            allMovies = await Movies.findAndCountAll({where:{countryId, directorId, genreId}, limit, offset})
        }
        return res.json(allMovies)
    }
    async getOne(req, res) {
        const {id} = req.params
        const movies = await Movies.findOne(
            {
                where: {id},
                include: [{model: MovieInfo, as: "info"}]
            },
        )
        return res.json(movies)
    }
}

module.exports = new MoviesController()