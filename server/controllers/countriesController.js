const ApiError = require ('../error/ApiError')
const {Countries} = require('../models/models')
class CountriesController {
    async create(req, res) {
        const {name} = req.body
        const countries = await Countries.create({name})
        return res.json(countries)
    }
    async getAll(req, res) {

    }
}
module.exports= new CountriesController()