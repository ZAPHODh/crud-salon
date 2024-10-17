import { Request, Response } from 'express'

import { getAllModels } from '../../services/getAllModels'

export const getExpenses = async (req: Request, res: Response) => {
    const { salonId } = req.params
    console.log(req.params)
    try {
        const expenses = await getAllModels(salonId, 'expenses')
        return res.status(200).json(expenses)
    } catch (error) {
        return res.status(400).json(error)
    }
}
