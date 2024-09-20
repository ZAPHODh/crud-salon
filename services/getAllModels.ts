import { salonModel } from '../models/salon'

export const getAllModels = async (
    salonId: string,
    name: 'expenses' | 'services'
): Promise<Expense[] | Service[]> => {
    try {
        const salon = await salonModel.findById(salonId).populate(name).exec()

        if (!salon) throw new Error('cannot find the salon')
        const models = salon[name]
        return models
    } catch (error) {
        throw new Error(`Error adding expense to salon:${error}`)
    }
}
