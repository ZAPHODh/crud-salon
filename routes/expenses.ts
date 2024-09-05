import express from 'express'
import { validId } from '../middlewares/general/validId'
import { validExpenseBody } from '../middlewares/expenses/validBody'
import { createExpense } from '../controllers/expenses/createExpense'
import { updateExpense } from '../controllers/expenses/updateExpense'
import { deleteExpense } from '../controllers/expenses/deleteExpense'
import { getExpenses } from '../controllers/expenses/getExpenses'
const router = express.Router()

router.get('/', getExpenses)

router.post('/', validExpenseBody, createExpense)

router.put('/:id', validId, validExpenseBody, updateExpense)

router.delete('/:id', validId, deleteExpense)

export default router
