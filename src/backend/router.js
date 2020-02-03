const express = require('express')
const router = express.Router()
const userController = require('./controllers/userController')

router.get('/', userController.homeGuest)
router.get('/test', userController.testGuest)
module.exports = router