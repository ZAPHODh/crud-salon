import { Schema } from 'mongoose'

export const expenseSchema = new Schema<Expense>({
    date: { type: Date, required: true },
    type: {
        type: String,
        enum: ['fixed', 'variable'],
        required: true,
    },
    category: { type: String, required: true },
    amount: { type: Number, required: true },
    notes: { type: String },
})
