const Router = require('express')
const router = new Router()
const periodsController = require('../controllers/periodsController')
const checkRole = require("../middleware/checkRoleMiddleware");

router.post('/', checkRole('ADMIN'), periodsController.create)
router.get('/', periodsController.getAll)

module.exports = router