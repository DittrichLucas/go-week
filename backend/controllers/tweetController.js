import tweet from '../src/models/tweet'

export default {
    async index(req, res){
        const tweets = await tweet.find({}).sort('-createdAt')

        return res.json(tweets)
    },
    async store(req, res){
        //createdTweet é o tweet criado, enquanto tweet é o modelo requisitado
        const createdTweet = await tweet.create(req.body)

        req.io.emit('tweet', createdTweet)

        return res.json(createdTweet)
    }
}