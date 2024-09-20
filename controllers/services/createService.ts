import { Request, Response } from 'express'
import { serviceModel } from '../../models/service'
import { addModel } from '../../services/addModel'

export const createService = async (req: Request, res: Response) => {
    const { salonId } = req.params
    const service: Service = req.body

    try {
        await addModel(salonId, service, serviceModel, 'services')
        return res.status(200).json({ message: 'Service created to salon' })
    } catch (error) {
        return res.status(400).json({ error })
    }
}
