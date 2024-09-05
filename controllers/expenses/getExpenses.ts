import { Request, Response } from 'express'
import { expenseModel } from '../../models/expense'

export const getExpenses = async (req: Request, res: Response) => {
    try {
        const expenses = await expenseModel.find()
        return res.status(200).json(expenses)
    } catch (error) {
        return res.status(400).json(error)
    }
}
