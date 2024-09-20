import { NextFunction, Request, Response } from 'express'

export const validId = (req: Request, res: Response, next: NextFunction) => {
    const { salonId } = req.params
    if (!salonId)
        return res.status(400).json({ error: 'there is no id params' })
    next()
}
