const roleGuard = (role) => {
    return function (req, res, next) {
        if (!role.includes(req.body.role))
            return res.status(403).json('USER NOT AUTHORIZED!!!')
        next()
    }
}
export default roleGuard