import { CorsOptions } from 'cors'
import 'dotenv/config'

export const corsOptions: CorsOptions = {
    origin: (origin, callback) => {
        if (origin === process.env.URL || !origin) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
}
