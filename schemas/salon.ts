import { Schema } from 'mongoose'

export const salonSchema = new Schema<Salon>({
    name: { type: String, required: true },
    openDays: {
        type: [String],
        enum: [
            'sunday',
            'monday',
            'tuesday',
            'wednesday',
            'thursday',
            'friday',
            'saturday',
        ],
        required: true,
    },
    hoursWorkedPerDay: { type: Number, required: true },
    hoursWorkedInMonth: { type: Number, required: true },
    expenses: [{ type: Schema.Types.ObjectId, ref: 'Expenses' }],
    services: [{ type: Schema.Types.ObjectId, ref: 'Services' }],
})
