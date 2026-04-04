export default function (req, res, next) {
    const bearerToken = req?.headers?.authorization?.split(' ')[1]
    if (bearerToken !== 'himytoken') {
        return res.status(401).json('UNAUTHENTICATED USER!!!')
    }
    next()
}