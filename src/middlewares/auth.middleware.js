import { verifyToken } from "../core/jwt.js"
import User from '../users/user.model.js'
export default async function (req, res, next) {
    try {
        const bearerToken = req?.headers?.authorization?.split(' ')[1]

        if (!bearerToken) {
            return res.status(401).json('UNAUTHENTICATED USER!!!')
        }
        const decodedToken = verifyToken(bearerToken)
        console.log(decodedToken);
        const dbUser = await User.findOne({ _id: decodedToken.id })

        if (!dbUser) {
            throw new Error('could not find user')
        }

        //pass user details to next middleware
        req.userDetails = {
            userId: dbUser._id || decodedToken.id,
            username: dbUser.username,
        }

        next()
    } catch (e) {
        console.error('here', e.message)
        return res.status(401).json('UNAUTHENTICATED USER!!!')
    }

}