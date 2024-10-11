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
    fee: { type: 'Number', required: true, default: 0 },
    owner: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Please fill a valid email address',
        ],
    },
    hoursWorkedPerDay: { type: Number, required: true },
    hoursWorkedInMonth: { type: Number, required: true },
    expenses: [{ type: Schema.Types.ObjectId, ref: 'Expenses' }],
    services: [{ type: Schema.Types.ObjectId, ref: 'Services' }],
})
