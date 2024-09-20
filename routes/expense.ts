import express from 'express'
import { validId } from '../middlewares/general/validId'
import { validExpenseBody } from '../middlewares/expenses/validBody'
import { createExpense } from '../controllers/expenses/createExpense'
import { updateExpense } from '../controllers/expenses/updateExpense'
import { deleteExpense } from '../controllers/expenses/deleteExpense'
import { getExpenses } from '../controllers/expenses/getExpenses'
import { validExpenseId } from '../middlewares/expenses/validExpenseId'
import { getExpense } from '../controllers/expenses/getExpense'
const router = express.Router({ mergeParams: true })

router.get('/', getExpenses)
router.get('/:expenseId', validExpenseId, getExpense)
router.post('/', validExpenseBody, validId, createExpense)

router.put(
    '/:expenseId',
    validId,
    validExpenseId,
    validExpenseBody,
    updateExpense
)

router.delete('/:expenseId', validExpenseId, validId, deleteExpense)

export default router
