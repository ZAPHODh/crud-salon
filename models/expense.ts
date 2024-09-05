import { model } from 'mongoose'
import { expenseSchema } from '../schemas/expense'

export const expenseModel = model<Expense>(
    'Expenses',
    expenseSchema,
    'Expenses'
)
