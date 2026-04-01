const express = require('express')
const { getDonars, postDonar, putDonar, patchDonar, deleteDonar } = require('./donar.controller.js')

const router = express.Router()

//router level middleware
const donarMiddleware = (req, res, next) => {
    console.log('Time: ', Date.now())
    next()
}
router.use(donarMiddleware)

//routes
router.get('/', getDonars)
// router.post('/', donarMiddleware, postDonar)
router.post('/', postDonar)
router.put('/:id', putDonar)
router.patch('/:id', patchDonar)
router.delete("/:id", deleteDonar)

module.exports = router