const Router = require('express')
const router = new Router()
const periodsController = require('../controllers/periodsController')

router.post('/', periodsController.create)
router.get('/', periodsController.getAll)

module.exports = router