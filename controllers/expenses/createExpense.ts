import { Request, Response } from 'express'
import { expenseModel } from '../../models/expense'
import { addModel } from '../../services/addModel'

export const createExpense = async (req: Request, res: Response) => {
    const { salonId } = req.params
    const expense: Expense = req.body

    try {
        const Expense = await addModel(
            salonId,
            expense,
            expenseModel,
            'expenses'
        )
        return res.status(200).json(Expense)
    } catch (error) {
        return res.status(400).json({ error })
    }
}
