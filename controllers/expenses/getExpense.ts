import { Request, Response } from 'express'
import { expenseModel } from '../../models/expense'

export const getExpense = async (req: Request, res: Response) => {
    const { expenseId } = req.params
    try {
        const expense = await expenseModel.findById(expenseId)
        return res.status(200).json(expense)
    } catch (error) {
        return res.status(400).json({ error })
    }
}
