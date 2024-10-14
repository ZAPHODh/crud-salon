import 'dotenv/config'
import express from 'express'
import helmet from 'helmet'
import router from './routes'
import cors from 'cors'
import mongoose from 'mongoose'

import { corsOptions } from './lib/config/corsOptions'
import { limiter } from './lib/config/limiter'
import { validIp } from './middlewares/general/validIP'

const app = express()
const port = process.env.PORT

mongoose
    .connect(process.env.MONGO_CONNECT)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Failed to connect to MongoDB', err))

app.use(helmet())
app.use(limiter)
app.use(cors(corsOptions))

app.use('/', validIp, express.json(), router)

app.listen(port, () => {
    console.log(`Server running on port`, port)
})
