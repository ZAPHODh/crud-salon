import express from 'express'
import incomesRouter from './incomes.js'
import expensesRouter from './expenses.js'
import professionalsRouter from './professionals.js'
import reportsRouter from './reports.js'

const router = express.Router()

router.use('/incomes', incomesRouter)
router.use('/expenses', expensesRouter)
router.use('/professionals', professionalsRouter)
router.use('/reports', reportsRouter)

export default router
