import { Document, ObjectId } from 'mongoose'

declare global {
    type Professional = {
        und: number
    }

    interface Expense extends Document {
        name: string
        type: 'fixed' | 'variable'
        category: string
        amount: number
    }

    interface Report extends Document {
        salonId: ObjectId
        createdAt: Date
        reportContent: string
    }

    interface Service extends Document {
        name: string
        cost: number
        commission: number
        attachedExpenses: Expense[]
        duration: number
        whoDo: 'manicure' | 'hairdresser'
    }

    interface Salon extends Document {
        owner: string
        name: string
        fee: number
        openDays: WeekDays[]
        hoursWorkedPerDay: number
        hoursWorkedInMonth: number
        expenses: Expense[]
        services: Service[]
        professionals: {
            manicure?: Professional
            hairdresser?: Professional
        }
    }

    type WeekDays =
        | 'sunday'
        | 'monday'
        | 'tuesday'
        | 'wednesday'
        | 'thursday'
        | 'friday'
        | 'saturday'
}

export {}
