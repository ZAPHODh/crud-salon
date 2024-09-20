import { model } from 'mongoose'
import { salonSchema } from '../schemas/salon'

export const salonModel = model<Salon>('Salons', salonSchema)
