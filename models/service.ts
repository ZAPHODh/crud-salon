import { model } from 'mongoose'
import { serviceSchema } from '../schemas/service'

export const serviceModel = model<Service>('Services', serviceSchema)
