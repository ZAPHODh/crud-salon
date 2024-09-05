import { Request, Response } from 'express'
import { expenseModel } from '../../models/expense'

export const createExpense = async (req: Request, res: Response) => {
    const expense: Expense = req.body

    try {
        await expenseModel.create(expense)
        return res.status(200).json({ message: 'Expense created' })
    } catch (error) {
        return res.status(400).json({ error })
    }
}
