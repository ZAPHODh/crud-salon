import { Request, Response, NextFunction } from 'express'
import { IpCheck } from '../../lib/utils/checkIp'

export const validIp = (allowedIps: string[] | string) => {
    const allowedIpArray = Array.isArray(allowedIps) ? allowedIps : [allowedIps]
    const checkFunctions = allowedIpArray.map(IpCheck)

    return (req: Request, res: Response, next: NextFunction) => {
        const requestIp = req.ip || req.socket.remoteAddress || ''

        const isAllowed = checkFunctions.some((checkFunction) =>
            checkFunction(requestIp)
        )

        if (isAllowed) {
            next()
        } else {
            res.status(400).json({ error: 'Forbidden: IP not allowed' })
        }
    }
}
