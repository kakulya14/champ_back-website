const {Blog} = require('../models/models')
const ApiError = require('../error/ApiError')

class BlogController {
    async create(req, res) {
        const {name} = req.body
        const blog = await Blog.create({name})
        return res.json(blog)
    }

    async getAll(req, res) {

    }

}

module.exports = new BlogController()