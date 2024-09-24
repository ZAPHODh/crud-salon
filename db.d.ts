import { Document } from 'mongoose'
declare global {
    interface Expense extends Document {
        name: string
        type: 'fixed' | 'variable'
        category: string
        amount: number
    }

    interface Service extends Document {
        name: string
        cost: number
        commission: number
        attachedExpenses: Expense[]
        duration: number
    }

    interface Salon extends Document {
        name: string
        fee: number
        openDays: WeekDays[]
        hoursWorkedPerDay: number
        hoursWorkedInMonth: number
        expenses: Expense[]
        services: Service[]
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
