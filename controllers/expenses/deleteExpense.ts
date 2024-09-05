import { Request, Response } from 'express'
import { expenseModel } from '../../models/expense'

export const deleteExpense = async (req: Request, res: Response) => {
    const { id } = req.params
    try {
        await expenseModel.deleteOne({ _id: id })
        return res.status(200).json({ message: 'Expense deleted' })
    } catch (error) {
        return res.status(400).json({ error })
    }
}
