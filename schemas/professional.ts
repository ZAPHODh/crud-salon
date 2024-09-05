import { Schema } from 'mongoose'

export const professionalSchema = new Schema<Professional>({
    name: { type: String, required: true },
    commissionRate: { type: Number, required: true },
    services: [
        {
            name: { type: String, required: true },
            date: { type: Date, required: true },
            amount: { type: Number, required: true },
            commission: { type: Number, required: true },
        },
    ],
})
