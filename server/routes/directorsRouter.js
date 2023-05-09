const Router = require('express')
const router = new Router()
const directorsController = require('../controllers/directorsController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), directorsController.create)
router.get('/', directorsController.getAll)


module.exports = router