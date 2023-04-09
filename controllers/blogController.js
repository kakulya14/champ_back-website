const {Blog} = require('../models/models')
const ApiError = require('../error/ApiError')

class BlogController {
    async create(req, res) {
        const {title, description, } = req.body
        const blog = await Blog.create({title, description})
        return res.json(blog)
    }

    async getAll(req, res) {
        const blogs = await Blog.findAndCountAll()
        return res.json(blogs)
    }

}

module.exports = new BlogController()