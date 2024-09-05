interface Income extends mongoose.Document {
    date: Date
    service: string
    professionalId: string
    amount: number
    commission: number
    paymentMethod: 'cash' | 'card' | 'pix'
    paymentFees: number
    notes?: string
}

interface Expense extends mongoose.Document {
    date: Date
    type: 'fixed' | 'variable'
    category: string
    amount: number
    notes?: string
}

interface Professional extends mongoose.Document {
    name: string
    commissionRate: number
    services: Service[]
}

interface Service extends mongoose.Document {
    name: string
    date: Date
    amount: number
    commission: number
}
