import { Request, Response } from 'express'
import { incomeModel } from '../../models/income'

export const deleteIncome = async (req: Request, res: Response) => {
    const { id } = req.params

    try {
        await incomeModel.deleteOne({ _id: id })
        return res.status(200).json({ message: 'deleted' })
    } catch {
        return res.status(400).json({ error: 'cannot find the income' })
    }
}
