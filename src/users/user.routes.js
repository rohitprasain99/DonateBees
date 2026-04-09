

import express from 'express'
import { getAllUsers, login, register, deleteUser } from './user.controller.js';
import authMiddleware from '../middlewares/auth.middleware.js';
const router = express.Router()

router.get('/', authMiddleware, getAllUsers)
router.delete('/:id', deleteUser)

router.get('/login', login)
router.post('/register', register)

// router.put('/:id'),
// router.patch('/:id')
// router.delete('/:id')

export default router;