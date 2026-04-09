import jwt from 'jsonwebtoken'

const generateJwtToken = (userId, userRole) => {
    try {
        return jwt.sign(
            {
                id: userId,
                role: userRole
            },
            process.env.JWT_SECRET,
            { expiresIn: '1hr' });
    } catch (e) {
        console.error(e.message)
        throw new Error('Could not generate token')
    }

}

const verifyToken = (headerToken) => {
    try {
        console.log(headerToken)
        const decodedToken = jwt.verify(headerToken, process.env.JWT_SECRET)
        return decodedToken
    } catch (e) {
        console.error(e)
        throw new Error('could not verify token')
    }

}
export { generateJwtToken, verifyToken }