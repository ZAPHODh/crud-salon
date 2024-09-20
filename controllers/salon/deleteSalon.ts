import { Request, Response } from 'express'
import { salonModel } from '../../models/salon'

export const deleteSalon = async (req: Request, res: Response) => {
    const { salonId } = req.params
    try {
        await salonModel.findByIdAndDelete(salonId)
        return res.status(200).json({ message: 'deleted succefully' })
    } catch (error) {}
}
