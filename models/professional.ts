import { model } from 'mongoose'
import { professionalSchema } from '../schemas/professional'

export const professionalModel = model<Professional>(
    'Professional',
    professionalSchema,
    'Professioanls'
)
