import express from 'express'
import { validId } from '../middlewares/general/validId'
import { createIncome } from '../controllers/incomes/createIncome'
import { updateIncome } from '../controllers/incomes/updateIncome'
import { validIncomeBody } from '../middlewares/incomes/validIncomeBody'
import { deleteIncome } from '../controllers/incomes/deleteIncome'
import { getIncomes } from '../controllers/incomes/getIncomes'

const router = express.Router()

router.get('/', getIncomes)

router.post('/', validIncomeBody, createIncome)

router.put('/:id', validId, validIncomeBody, updateIncome)

router.delete('/:id', validId, validIncomeBody, deleteIncome)

export default router
