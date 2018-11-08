const tweet = require('../src/models/tweet')

module.exports = {
    async index(req, res){
        const tweets = await tweet.find({}).sort('-createdAt')

        return res.json(tweets)
    },
    async store(req, res){
        //createTweet é o tweet criado, enquanto tweet é o modelo requisitado
        const createTweet = await tweet.create(req.body)

        req.io.emit('tweet', createTweet)

        return res.json(createTweet)
    }
}