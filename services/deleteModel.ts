import { Model, Document } from 'mongoose'

import { salonModel } from '../models/salon'

export const deleteModel = async <DocType extends Document>(
    salonId: string,
    idModel: string,
    model: Model<DocType>,
    name: 'expenses' | 'services'
) => {
    try {
        const deletedModel = await model.findByIdAndDelete(idModel)
        if (!deletedModel) {
            throw new Error('Model not found')
        }

        await salonModel.findByIdAndUpdate(salonId, {
            $pull: { [name]: deletedModel._id },
        })
    } catch (error) {
        throw new Error(`Error adding expense to salon:${error}`)
    }
}
