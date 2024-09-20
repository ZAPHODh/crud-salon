import { Request, Response } from 'express'
import { serviceModel } from '../../models/service'

export const getService = async (req: Request, res: Response) => {
    const { serviceId } = req.params
    try {
        const service = await serviceModel.findById(serviceId)
        return res.status(200).json(service)
    } catch (error) {
        return res.status(400).json({ error })
    }
}
