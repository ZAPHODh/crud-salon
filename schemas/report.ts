import { Schema } from 'mongoose'

export const reportSchema = new Schema<Report>({
    salonId: { type: Schema.Types.ObjectId, ref: 'Salon', required: true },
    createdAt: { type: Date, default: Date.now },
    reportContent: { type: String, required: true },
})
