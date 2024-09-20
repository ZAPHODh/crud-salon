import { Request, Response } from 'express'
import { serviceModel } from '../../models/service'
import { deleteModel } from '../../services/deleteModel'

export const deleteService = async (req: Request, res: Response) => {
    const { salonId, serviceId } = req.params
    try {
        await deleteModel(salonId, serviceId, serviceModel, 'services')
        return res.status(200).json({ message: 'service deleted' })
    } catch (error) {
        return res.status(400).json({ error })
    }
}
