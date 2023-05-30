const ApiError = require ('../error/ApiError')
const {Periods} = require("../models/models");
class PeriodsController {
    async create(req, res) {
        const {dates} = req.body
        const periods = await Periods.create({dates})
        return res.json(periods)
    }
    async getAll(req, res) {
        const allPeriods = await Periods.findAll()
        return res.json(allPeriods)
    }
}
module.exports= new PeriodsController()