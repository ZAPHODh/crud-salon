import { Request, Response } from 'express'
import { serviceModel } from '../../models/service'

export const updateService = async (req: Request, res: Response) => {
    const { serviceId } = req.params
    try {
        const service: Service = req.body
        const updatedService = await serviceModel.findByIdAndUpdate(
            serviceId,
            service,
            { new: true }
        )
        return res.status(200).json(updatedService)
    } catch {
        return res.status(400).json({ error: 'failed to update the service' })
    }
}
