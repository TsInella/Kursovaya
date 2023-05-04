const {Countries} = require('../models/models')
const ApiError = require ('../error/ApiError')

class CountriesController {
    async create(req, res) {
        const {name} = req.body
        const countries = await Countries.create({name})
        return res.json(countries)
    }
    async getAll(req, res) {
        const allCountries = await Countries.findAll()
        return res.json(allCountries)
    }
}
module.exports= new CountriesController()