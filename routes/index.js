const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const blogRouter = require('./blogRouter')
const vacanciesRouter = require('./vacanciesRouter')
const scheduleRouter = require('./scheduleRouter')
const shopRouter = require('./shopRouter')



router.use('/user', userRouter)
router.use('/blog', blogRouter)
router.use('/shop', shopRouter)
router.use('/schedule', scheduleRouter)
router.use('/vacancies', vacanciesRouter)



module.exports = router