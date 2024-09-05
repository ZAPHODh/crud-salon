import { Request, Response } from 'express'
import { incomeModel } from '../../models/income'

export const createIncome = async (req: Request, res: Response) => {
    const income: Income = req.body
    try {
        await incomeModel.create(income)
        return res.status(200).json({ message: 'income created succefully' })
    } catch (error) {
        return res.status(400).json({ error })
    }
}
