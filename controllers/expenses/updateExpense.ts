import { Request, Response } from 'express'
import { expenseModel } from '../../models/expense'

export const updateExpense = async (req: Request, res: Response) => {
    const { id } = req.params
    try {
        const expense: Expense = req.body
        await expenseModel.updateOne({ _id: id }, expense)
        return res.status(200).json({ message: 'expense updated' })
    } catch {
        return res.status(400).json({ error: 'failed to update the expense' })
    }
}
