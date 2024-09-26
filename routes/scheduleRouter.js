const Router = require('express')
const router = new Router()
const scheduleController = require('../controllers/scheduleController')


router.post('/', scheduleController.create)
router.get('/', scheduleController.getAll)



module.exports = router