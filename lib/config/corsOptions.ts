import { CorsOptions } from 'cors'
import 'dotenv/config'

export const corsOptions: CorsOptions = {
    origin: process.env.URL,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
}
