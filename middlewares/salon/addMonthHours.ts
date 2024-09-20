import { Request, Response, NextFunction } from 'express'

export const addMonthHours = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { hoursWorkedPerDay, openDays } = req.body as Salon
    req.body.hoursWorkedInMonth = hoursWorkedPerDay * openDays.length * 4
    next()
}
