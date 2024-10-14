import { Request, Response, NextFunction } from 'express'

export const validIp = (req: Request, res: Response, next: NextFunction) => {
    const requestIp = req.ip || req.socket.remoteAddress || ''
    const allowedIpRange = process.env.ALLOWED_IP

    const isIpAllowed = (ip: string, range: string): boolean => {
        const [rangeBase, rangeBits] = range.split('/')
        const ipBase = ip.split('.').map(Number)
        const rangeBaseArr = rangeBase.split('.').map(Number)

        if (ipBase.length !== 4 || rangeBaseArr.length !== 4) {
            return false
        }

        const mask = ~(2 ** (32 - parseInt(rangeBits, 10)) - 1)
        const ipInt = ipBase.reduce((sum, part) => (sum << 8) + part, 0)
        const rangeInt = rangeBaseArr.reduce(
            (sum, part) => (sum << 8) + part,
            0
        )

        return (ipInt & mask) === (rangeInt & mask)
    }

    if (isIpAllowed(requestIp, allowedIpRange)) {
        return next()
    }

    res.status(403).send('Forbidden: IP not allowed')
}
