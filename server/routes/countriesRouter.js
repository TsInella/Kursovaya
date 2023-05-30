const Router = require('express')
const router = new Router()
const countriesController = require('../controllers/countriesController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', countriesController.create)
router.get('/', countriesController.getAll)

module.exports = router