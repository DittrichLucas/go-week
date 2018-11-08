const express = require('express')
const routes = express.Router()
const tweetController = require('../controllers/tweetController')
const likeController = require('../controllers/likeController')

// Rotas de manipulação dos tweets
routes.get('/tweets', tweetController.index)
routes.post('/tweets', tweetController.store)

// Rotas de manipulação dos likes
routes.post('/likes/:id', likeController.store)

module.exports = routes