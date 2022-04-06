const Router = require('express')
const router = new Router()
const userControllers = require('../controllers/user.controllers')

const { createUser, getUsers, getUser, updateUser, deleteUser } = userControllers

router.post('/user', createUser)
router.get('/user', getUsers)
router.get('/user/:id', getUser)
router.put('/user', updateUser)
router.delete('/user/:id', deleteUser)

module.exports = router