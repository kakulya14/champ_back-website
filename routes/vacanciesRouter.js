const Router = require('express')
const router = new Router()
const vacanciesController = require('../controllers/vacanciesController')


router.post('/', vacanciesController.create)
router.get('/', vacanciesController.getAll)



module.exports = router