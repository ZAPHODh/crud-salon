import { Request, Response, NextFunction } from 'express'

export const validExpenseId = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { expenseId } = req.params

    if (!expenseId) return res.status(400).json({ error: 'missing id' })

    next()
}
