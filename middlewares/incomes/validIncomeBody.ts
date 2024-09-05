import { NextFunction, Request, Response } from 'express'

export const validIncomeBody = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const {
        amount,
        commission,
        date,
        paymentFees,
        paymentMethod,
        professionalId,
        service,
    } = req.body as Income
    if (
        !amount ||
        !commission ||
        !date ||
        !paymentFees ||
        !paymentMethod ||
        !professionalId ||
        !service
    )
        return res.status(400).json({ error: 'missing props in body' })

    next()
}
