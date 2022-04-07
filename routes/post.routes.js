const Router = require('express')
const router = new Router()
const postControllers = require('../controllers/user.controllers')

const { createPost, getPostByUser} = postControllers

router.post('/post', createPost)
router.get('/post', getPostByUser)

module.exports = router