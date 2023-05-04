const Router = require('express')
const router = new Router()
const genresController = require('../controllers/genresController')

router.post('/', genresController.create)
router.get('/', genresController.getAll)


module.exports = router