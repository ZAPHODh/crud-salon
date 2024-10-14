import { CorsOptions } from 'cors'
import 'dotenv/config'

export const corsOptions: CorsOptions = {
    origin: ['http://localhost:3000', 'https://salon-iota.vercel.app'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
}
