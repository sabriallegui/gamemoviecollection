const UserSchema = require('../model/user')

const bcrypt = require('bcrypt')

//token jwt 
const jwt = require('jsonwebtoken')

exports.register = async (req, res) => {
    try {

        const { name, email, password } = req.body
        const found = await UserSchema.findOne({ email })
        if (found) { return res.json({ msg: 'vous avez deja un compte , bara logi ' }) }
        const newUser = new UserSchema(req.body)
        const saltRounds = 10
        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(password, salt);
        newUser.password = hash
        newUser.save()
        res.json({ msg: 'welcome to the group', newUser })
    } catch (err) {
        console.log(err)
        res.json({ msg: 'you have something wrong with ur registrations' })
    }
}

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body
        const found = await UserSchema.findOne({ email })

        if (!found) { return res.json({ msg: 'please register' }) }

        const match = await bcrypt.compare(password, found.password)
        if (!match) { return res.json({ msg: 'psword ghalit' }) }
        const payload = { id: found._id }
        var token = jwt.sign(payload, process.env.privateKey)
        res.json({ msg: 'ur welcome login s', found, token })


    } catch (err) {
        console.log(err)
        res.json({ msg: 'you have a prob with ur login' })
    }
}

exports.userUpdate = async (req, res) => {
    try {
        const { id } = req.params
        const updateContact = await UserSchema.findByIdAndUpdate(id, { $set: { ...req.body } })
        res.json({ msg: 'you have an update', updateContact })
    } catch (err) {
        console.log(err)
        res.send('you have a prob fil update')
    }
}

exports.getAll = async (req, res) => {
    try {
        const all = await UserSchema.find()
        res.send(all)
        console.log(all)
    } catch (err) {
        console.log(err)
    }
}