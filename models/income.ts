import { model } from 'mongoose'
import { incomeSchema } from '../schemas/income'

export const incomeModel = model<Income>('Income', incomeSchema, 'Incomes')
