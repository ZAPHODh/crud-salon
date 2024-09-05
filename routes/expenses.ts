import express from 'express'
import { validId } from '../middlewares/general/validId'
const router = express.Router()

router.get('/')

router.post('/')

router.put('/:id', validId)

router.delete('/:id', validId)

export default router
