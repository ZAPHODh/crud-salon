import { Request, Response } from 'express'
import { salonModel } from '../../models/salon'

export const updateSalon = async (req: Request, res: Response) => {
    const { salonId } = req.params
    const newSalon = req.body as Partial<Salon>
    try {
        const updatedSalon = await salonModel.findByIdAndUpdate(
            salonId,
            newSalon,
            { new: true }
        )
        return res.status(200).json(updatedSalon)
    } catch (error) {
        return res.status(400).json({ error })
    }
}
