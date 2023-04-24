import { Router } from 'express'
import {
  getUsers,
  logUser,
  deleteUser,
  createUser,
} from '../controller/user.controller'

const router = Router()

router.get('/user', getUsers)
router.put('/user', logUser)
router.delete('/user', deleteUser)
router.post('/user', createUser)

export default router
