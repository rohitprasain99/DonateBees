import { decryptPassword, encryptPassword } from '../core/bcrypt.js'
import User from './user.model.js'

const register = async (req, res) => {
    try {
        const reqData = req.body
        const { username, password } = reqData

        //check if the user exists
        const user = await User.findOne({ username })
        if (!!user) {
            throw new Error('could not register user!')
        }

        //encrypt password
        const encryptedPassword = await encryptPassword(password)

        const dbres = await User.create({ username, password: encryptedPassword })
        return res.status(201).json({ data: dbres }, 'user registered successfully')
    } catch (e) {
        console.error(e.message)
        return res.status(500).json({
            devMessage: e.message
        }, 'could not register user')
    }
}

const login = async (req, res) => {
    try {
        const reqData = req.body
        const { username, password } = reqData

        const dbUser = await User.findOne({ username })
        if (!dbUser) {
            return res.status(401).json({}, 'invalid credentials')
        }
        const checkPassword = await decryptPassword(password, dbUser.password)
        if (!checkPassword) {
            return res.status(401).json({}, 'invalid credentials')
        }
        return res.status(200).json({ data: { username: dbUser.username } }, 'user logged in successfully')

    } catch (e) {
        console.error(e.message)
        return res.status(500).json({
            devMessage: e.message
        }, 'could no sign in user')
    }
}

const getAllUsers = async (req, res) => {
    try {

        const dbUser = await User.find().select('-password')
        return res.status(200).json({ data: dbUser }, 'all users sent successfully')
    } catch (e) {
        console.error(e.message)
        return res.status(500).json({ devMessage: e.message }, 'cannot send users')
    }

}

export { register, login, getAllUsers }