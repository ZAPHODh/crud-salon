import { Request, Response } from 'express'
import { incomeModel } from '../../models/income'

export const updateIncome = async (req: Request, res: Response) => {
    const { id } = req.params
    const newIncome: Income = req.body
    try {
        await incomeModel.updateOne({ _id: id }, newIncome)
        return res.status(200).json({ message: 'updated' })
    } catch {
        return res.status(400).json({ error: 'cannot find the income' })
    }
}
