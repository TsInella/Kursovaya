const ApiError = require ('../error/ApiError')
const {Genres} = require("../models/models");
class GenresController {
    async create(req, res) {
        const {name} = req.body
        const genres = await Genres.create({name})
        return res.json(genres)
    }
    async getAll(req, res) {
        const allGenres = await Genres.findAll()
        return res.json(allGenres)
    }
}
module.exports= new GenresController()