import express from 'express'
import tweetController from '../controllers/tweetController'
import likeController from '../controllers/likeController'

const routes = express.Router()

// Rotas de manipulação dos tweets
routes.get('/tweets', tweetController.index)
routes.post('/tweets', tweetController.store)

// Rotas de manipulação dos likes
routes.post('/likes/:id', likeController.store)

export default routes