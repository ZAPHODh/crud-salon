import { NextFunction, Request, Response } from 'express'

export const validExpenseBody = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { amount, category, date, type } = req.body as Expense
    if (!amount || !category || !date || !type)
        return res.status(400).json({ error: 'missing props in the body' })
    next()
}
