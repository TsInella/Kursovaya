const Router = require('express')
const router = new Router()
const moviesController = require('../controllers/moviesController')

router.post('/', moviesController.create)
router.get('/', moviesController.getAll)
router.get('/id', moviesController.getOne)

module.exports = router