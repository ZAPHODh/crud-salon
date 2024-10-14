import net from 'net'
import ip from 'ip'
const ipv6mappedRegex = /^::ffff:/
export const IpCheck = (allowedIp: string) => {
    if (allowedIp === '*') {
        return () => true
    }

    if (net.isIP(allowedIp)) {
        return (requestIp: string) => {
            if (ipv6mappedRegex.test(requestIp)) {
                requestIp = requestIp.replace(ipv6mappedRegex, '')
            }
            return requestIp === allowedIp
        }
    }

    const cidrSubnet = ip.cidrSubnet(allowedIp)
    const allowedMaskedIp = ip.mask(
        ip.fromLong(ip.toLong(allowedIp)),
        cidrSubnet.subnetMask
    )

    return (requestIp: string) => {
        if (ipv6mappedRegex.test(requestIp)) {
            requestIp = requestIp.replace(ipv6mappedRegex, '')
        }
        return ip.mask(requestIp, cidrSubnet.subnetMask) === allowedMaskedIp
    }
}
