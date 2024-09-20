import { Request, Response, NextFunction } from 'express'

export const validSalonBody = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { hoursWorkedPerDay, name, openDays } = req.body as Salon
    if (!hoursWorkedPerDay || !name || !openDays)
        return res.status(400).json({ message: 'missing props' })

    next()
}
