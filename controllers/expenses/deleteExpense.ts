import { Request, Response } from 'express'
import { expenseModel } from '../../models/expense'
import { deleteModel } from '../../services/deleteModel'

export const deleteExpense = async (req: Request, res: Response) => {
    const { salonId, expenseId } = req.params
    try {
        await deleteModel(salonId, expenseId, expenseModel, 'expenses')
        return res.status(200).json({ message: 'Expense deleted' })
    } catch (error) {
        return res.status(400).json({ error })
    }
}
