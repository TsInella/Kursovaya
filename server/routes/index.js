const Router = require('express')
const router = new Router()
const countriesRouter = require('./countriesRouter')
const directorsRouter = require('./directorsRouter')
const genresRouter = require('./genresRouter')
const moviesRouter = require('./moviesRouter')
const periodsRouter = require('./periodsRouter')
const usersRouter = require('./usersRouter')

router.use('/users', usersRouter)
router.use('/countries', countriesRouter)
router.use('/directors', directorsRouter)
router.use('/genres', genresRouter)
router.use('/movies', moviesRouter)
router.use('/periods', periodsRouter)

module.exports = router
