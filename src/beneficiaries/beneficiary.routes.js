import express from 'express'
import { getBeneficiaries, postBeneficiary, putBeneficiary, patchBeneficiary, deleteBeneficiary } from './beneficiary.controller.js'
// import roleGuard from '../guards/role.guard.js'
// import authMiddleware from '../middlewares/auth.middleware.js'

const router = express.Router()

//router level middleware
// router.use(authMiddleware)

//routes
router.get('/', getBeneficiaries)
// router.post('/', roleGuard(['ADMIN']), postBeneficiary)
router.post('/', postBeneficiary)
router.put('/:id', putBeneficiary)
router.patch('/:id', patchBeneficiary)
router.delete("/:id", deleteBeneficiary)

export default router