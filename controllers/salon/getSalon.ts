import { Request, Response } from 'express'
import { salonModel } from '../../models/salon'

export const getSalon = async (req: Request, res: Response) => {
    const { salonId } = req.params
    try {
        const salon = await salonModel
            .findById(salonId)
            .populate('expenses')
            .populate('services')
            .exec()
        return res.status(200).json(salon)
    } catch (error) {
        return res.status(400).json({ error })
    }
}
