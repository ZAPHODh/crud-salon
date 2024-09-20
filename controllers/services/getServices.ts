import { Request, Response } from 'express'

import { getAllModels } from '../../services/getAllModels'

export const getServices = async (req: Request, res: Response) => {
    const { salonId } = req.params
    try {
        const services = await getAllModels(salonId, 'services')
        return res.status(200).json(services)
    } catch (error) {
        return res.status(400).json(error)
    }
}
