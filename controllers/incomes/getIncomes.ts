import { Request, Response } from 'express'
import { incomeModel } from '../../models/income'

export const getIncomes = async (req: Request, res: Response) => {
    try {
        const Incomes = await incomeModel.find()
        return res.status(200).json(Incomes)
    } catch {
        return res.status(400).json({ error: 'cannot find any income' })
    }
}
