const ApiError = require ('../error/ApiError')
const {Directors} = require("../models/models");
class DirectorsController {
    async create(req, res) {
        const {name} = req.body
        const directors = await Directors.create({name})
        return res.json(directors)
    }
    async getAll(req, res) {
        const allDirectors = await Directors.findAll()
        return res.json(allDirectors)
    }
}
module.exports= new DirectorsController()