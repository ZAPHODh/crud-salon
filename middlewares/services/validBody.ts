import { NextFunction, Request, Response } from 'express'

export const validServiceBody = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { name, commission, cost, attachedExpenses, duration } =
        req.body as Service
    if (!name || !commission || !cost || !attachedExpenses || !duration) {
        return res.status(400).json({ error: 'missing props in the body' })
    }
    next()
}
