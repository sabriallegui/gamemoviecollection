
const GamesSchema = require('../model/gaming');

exports.GetGame = async (req, res) => {
    try {
        const Games = await GamesSchema.find()
        res.status(200).send({ Games, msg: 'list of Games' })
    } catch {
        res.status(500).send('could not get games')
    }
}


exports.Addgame = async (req, res) => {
    try {
        const NewGame = new GamesSchema(req.body)
        await NewGame.save()
        res.status(200).send({ NewGame, msg: "you did it the game is added " })
    } catch (err) {
        res.status(500).send('could not add the game')
    }
}

exports.Updategame = async (req, res) => {
    const { id } = req.params
    try {
        const updatedGame = await GamesSchema.findByIdAndUpdate(id, { $set: { ...req.body } })
        res.status(200).send('the game is updated ')
    } catch (err) {
        res.status(500).send('u didnt do it  , no the game is not  updated')
    }
}
exports.GetById = async (req, res) => {
    const { id } = req.params

    try {

        const getGame = await GamesSchema.findById(id)
        res.status(200).send({ getGame })
    } catch (err) {
        console.log(err)
        res.status(500).send('there is no getting now ')

    }
}

exports.deletgame = async (req, res) => {
    try {
        const { id } = req.params

        const deletgame = await GamesSchema.findByIdAndDelete(id)
        res.status(200).send('could delet it ')
    } catch (err) {
        res.status(500).send('could not delete')
    }
}


