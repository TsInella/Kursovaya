const uuid = require('uuid');
const path = require('path')
const {Movies} = require("../models/models");
const ApiError = require("../error/ApiError")
class MoviesController {
    async create(req, res, next) {
       try {
           const {name, description, somelink, year, rating, info} = req.body
           const {img} = req.files
           let fileName = uuid.v4() + '.jpg'
           img.mv(path.resolve(__dirname, '..', 'static',  fileName))

           const movies = await Movies.create({name, description, somelink, year, rating, info, img: fileName})

           return res.json(movies)
       }
       catch (e)
       {
           next(ApiError.badRequest(e.message))
       }
    }
    async getAll(req, res) {

    }
    async getOne(req, res) {

    }
}
module.exports= new MoviesController()