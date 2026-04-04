import express from 'express'
import { getDonars, postDonar, putDonar, patchDonar, deleteDonar } from './donar.controller.js'
import roleGuard from '../guards/role.guard.js'

const router = express.Router()

// //router level middleware
// const donarMiddleware = (req, res, next) => {
//     console.log('Time: ', Date.now())
//     next()
// }
// router.use(donarMiddleware)

//routes
router.get('/', getDonars)
router.post('/', roleGuard(['ADMIN']), postDonar)
// router.post('/', postDonar)
router.put('/:id', putDonar)
router.patch('/:id', patchDonar)
router.delete("/:id", deleteDonar)

export default router