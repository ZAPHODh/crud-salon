import { model } from 'mongoose'
import { reportSchema } from '../schemas/report'

export const reportModel = model<Report>('Report', reportSchema)
