import { Request, Response } from 'express'
import { expenseModel } from '../../models/expense'

export const updateExpense = async (req: Request, res: Response) => {
    const { id } = req.params
    try {
        const expense: Expense = req.body
        const updatedExpense = await expenseModel.findOneAndUpdate(
            { _id: id },
            expense,
            { new: true }
        )
        console.log(updatedExpense, id)
        if (!updatedExpense) {
            return res.status(404).json({ error: 'Expense not found' })
        }
        return res.status(200).json(updatedExpense)
    } catch {
        return res.status(400).json({ error: 'failed to update the expense' })
    }
}
