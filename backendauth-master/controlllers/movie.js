const moviesSchema = require('../model/movie').default;

exports.Getmovie = async (req, res) => {
    try {
        const movies = await moviesSchema.find()
        res.status(200).send({ movies, msg: 'list of movies' })
    } catch {
        res.status(500).send('could not get movies')
    }
}


exports.Addmovie = async (req, res) => {
    try {
        const Newmovie = new moviesSchema(req.body)
        await Newmovie.save()
        res.status(200).send({ Newmovie, msg: "you did it the movie is added " })
    } catch (err) {
        res.status(500).send('could not add the movie')
    }
}

exports.Updatemovie = async (req, res) => {
    const { id } = req.params
    try {
        const updatedmovie = await moviesSchema.findByIdAndUpdate(id, { $set: { ...req.body } })
        res.status(200).send('the movie is updated ')
    } catch (err) {
        res.status(500).send('u didnt do it  , no the movie is not  updated')
    }
}
exports.GetById = async (req, res) => {
    const { id } = req.params

    try {

        const getmovie = await moviesSchema.findById(id)
        res.status(200).send({ getmovie })
    } catch (err) {
        console.log(err)
        res.status(500).send('there is no getting now ')

    }
}

exports.deletmovie = async (req, res) => {
    try {
        const { id } = req.params

        const deletmovie = await moviesSchema.findByIdAndDelete(id)
        res.status(200).send('could delet it ')
    } catch (err) {
        res.status(500).send('could not delete')
    }
}