const {Shop} = require('../models/models')
const ApiError = require('../error/ApiError')
const path = require('path')
const uuid = require('uuid')

class ShopController {
    async create(req, res, next) {
        try {
            const {title, description} = req.body
            const {img} = req.files
            const fileName = uuid.v4() + '.jpg'
            img.mv(path.resolve(__dirname, '..', 'static', fileName))

            const shopItem = await Shop.create({title, description, img: fileName})

            return res.json(shopItem)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }

    async getAll(req, res) {
        const shops = await Shop.findAndCountAll()
        return res.json(shops)
    }

}

module.exports = new ShopController()