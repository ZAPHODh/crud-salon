import { Model, Document } from 'mongoose'

import { salonModel } from '../models/salon'

export const addModel = async <DocType extends Document>(
    salonId: string,
    entity: DocType,
    model: Model<DocType>,
    name: 'expenses' | 'services'
) => {
    try {
        const savedModel = await model.create(entity)

        await salonModel.findByIdAndUpdate(salonId, {
            $push: { [name]: savedModel._id },
        })
    } catch (error) {
        throw new Error(`Error adding expense to salon:${error}`)
    }
}
