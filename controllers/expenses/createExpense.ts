import { Request, Response } from 'express'
import { expenseModel } from '../../models/expense'
import { addModel } from '../../services/addModel'

export const createExpense = async (req: Request, res: Response) => {
    const { salonId } = req.params
    const expense: Expense = req.body

    try {
        await addModel(salonId, expense, expenseModel, 'expenses')
        return res.status(200).json({ message: 'Expense created to salon' })
    } catch (error) {
        return res.status(400).json({ error })
    }
}
