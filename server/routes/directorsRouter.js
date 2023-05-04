const Router = require('express')
const router = new Router()
const directorsController = require('../controllers/directorsController')

router.post('/', directorsController.create)
router.get('/', directorsController.getAll)


module.exports = router