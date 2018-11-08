const tweet = require('../src/models/tweet')

module.exports = {
    async store(req, res){
        const findTweet = await tweet.findById(req.params.id)

        findTweet.set({ likes: findTweet.likes + 1 })

        await findTweet.save()

        req.io.emit('like', findTweet)

        return res.json(findTweet)
    }
}