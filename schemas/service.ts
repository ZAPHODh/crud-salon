import { Schema } from 'mongoose'

export const serviceSchema = new Schema<Service>({
    name: { type: String, required: true },
    date: { type: Date, required: true },
    amount: { type: Number, required: true },
    commission: { type: Number, required: true },
})
