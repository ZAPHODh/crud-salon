import { NextFunction, Request, Response } from 'express'

export const validExpenseBody = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { amount, category, type, name } = req.body as Expense
    if (!amount || !category || !type || !name) {
        return res.status(400).json({ error: 'missing props in the body' })
    }
    next()
}
