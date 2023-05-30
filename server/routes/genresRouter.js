const Router = require('express')
const router = new Router()
const genresController = require('../controllers/genresController')
const checkRole = require("../middleware/checkRoleMiddleware");

router.post('/', genresController.create)
router.get('/', genresController.getAll)

module.exports = router