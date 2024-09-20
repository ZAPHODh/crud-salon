import { Request, Response } from 'express'
import { serviceModel } from '../../models/service'

export const updateService = async (req: Request, res: Response) => {
    const { id } = req.params
    try {
        const service: Service = req.body
        await serviceModel.updateOne({ _id: id }, service)
        return res.status(200).json({ message: 'service updated' })
    } catch {
        return res.status(400).json({ error: 'failed to update the service' })
    }
}
