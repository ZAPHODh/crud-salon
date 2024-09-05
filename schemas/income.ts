import { Schema } from 'mongoose'

export const incomeSchema = new Schema<Income>({
    date: { type: Date, required: true },
    service: { type: String, required: true },
    professionalId: { type: String, required: true },
    amount: { type: Number, required: true },
    commission: { type: Number, required: true },
    paymentMethod: {
        type: String,
        enum: ['cash', 'card', 'pix'],
        required: true,
    },
    paymentFees: { type: Number, required: true },
    notes: { type: String },
})
