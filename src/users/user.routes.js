

import express from 'express'
import { getAllUsers, login, register } from './user.controller.js';
const router = express.Router()

router.get('/', getAllUsers)
router.get('/login', login)

router.post('/register', register)

// router.put('/:id')
// router.patch('/:id')
// router.delete('/:id')

export default router;