import { Schema } from 'mongoose'

export const serviceSchema = new Schema<Service>({
    name: { type: String, required: true },
    cost: { type: Number, required: true },
    commission: { type: Number, required: true },
    attachedExpenses: [{ type: Schema.Types.ObjectId, ref: 'Expenses' }],
    duration: { type: Number, required: true },
    whoDo: { type: String, enum: ['manicure', 'hairdresser'], required: true },
})
