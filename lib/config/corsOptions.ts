import { CorsOptions } from 'cors'

export const corsOptions: CorsOptions = {
    origin: ['http://localhost:3000', process.env.URL],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
}
