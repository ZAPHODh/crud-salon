import { Request, Response } from 'express'
import { salonModel } from '../../models/salon'

export const getSalonByOwner = async (req: Request, res: Response) => {
    const { ownerEmail } = req.params
    try {
        const salon = await salonModel
            .findOne({ owner: ownerEmail })
            .populate('expenses')
            .populate('services')
            .populate({
                path: 'services',
                populate: {
                    path: 'attachedExpenses',
                },
            })
            .exec()
        return res.status(200).json(salon)
    } catch (error) {
        return res.status(400).json({ error })
    }
}
