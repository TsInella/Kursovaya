const Router = require('express')
const router = new Router()
const countriesController = require('../controllers/countriesController')

router.post('/', countriesController.create)
router.get('/', countriesController.getAll)

module.exports = router