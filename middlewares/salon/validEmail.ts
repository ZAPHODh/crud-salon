import { Request, Response, NextFunction } from 'express'

export const validEmail = (req: Request, res: Response, next: NextFunction) => {
    const { ownerEmail } = req.params

    if (!ownerEmail)
        return res.status(400).json({ error: 'missing owner email' })
    next()
}
