import { Request, Response } from 'express'
import { salonModel } from '../../models/salon'

export const getAllSalons = async (req: Request, res: Response) => {
    try {
        const salons = await salonModel
            .find()
            .populate('expenses')
            .populate('services')
            .exec()
        return res.status(200).json(salons)
    } catch (error) {
        return res.status(400).json({ error })
    }
}
