import { Request, Response } from 'express'
import { salonModel } from '../../models/salon'

export const updateSalon = async (req: Request, res: Response) => {
    const { salonId } = req.params
    try {
        const newSalon = req.body as Partial<Salon>
        const updatedSalon = await salonModel.findOneAndUpdate(
            { _id: salonId },
            newSalon,
            { new: true }
        )
        return res.status(200).json(updatedSalon)
    } catch (error) {
        return res.status(400).json({ error })
    }
}
