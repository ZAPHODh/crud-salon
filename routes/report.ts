import express from 'express'
import { validId } from '../middlewares/general/validId'
import { createReport } from '../controllers/reports/createReport'

const router = express.Router({ mergeParams: true })

router.post('/', validId, createReport)

export default router
