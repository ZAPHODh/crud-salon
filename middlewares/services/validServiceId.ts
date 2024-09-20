import { Request, Response, NextFunction } from 'express'

export const validServiceId = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { serviceId } = req.params

    if (!serviceId) return res.status(400).json({ error: 'missing id' })

    next()
}
