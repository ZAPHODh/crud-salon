import { Request, Response } from 'express'
import { salonModel } from '../../models/salon'

export const createSalon = async (req: Request, res: Response) => {
    const salon: Salon = req.body
    try {
        const newSalon = await salonModel.create(salon)
        return res.status(200).json(newSalon)
    } catch (error) {
        return res.status(400).json({ error })
    }
}
