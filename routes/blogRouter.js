const Router = require('express')
const router = new Router()
const blogController = require('../controllers/blogController')


router.post('/', blogController.create)
router.get('/', blogController.getAll)



module.exports = router