import express from 'express'
import helmet from 'helmet'
import router from './routes'
import cors from 'cors'

import { corsOpptions } from './lib/config/corsOptions'
import { limiter } from './lib/config/limiter'

import 'dotenv/config'
import mongoose from 'mongoose'

const app = express()
const port = process.env.PORT

mongoose.connect(process.env.MONGO_CONNECT)
app.use(helmet())
app.use(limiter)
app.use(cors(corsOpptions))

app.use('/', express.json(), router)

app.listen(port, () => {
    console.log(`Server running on port`, port)
})
