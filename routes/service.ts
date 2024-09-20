import { Router } from 'express'
import { getService } from '../controllers/services/getService'
import { getServices } from '../controllers/services/getServices'
import { createService } from '../controllers/services/createService'
import { updateService } from '../controllers/services/updateService'
import { deleteService } from '../controllers/services/deleteService'
import { validServiceId } from '../middlewares/services/validServiceId'
import { validId } from '../middlewares/general/validId'
import { validServiceBody } from '../middlewares/services/validBody'

const router = Router({ mergeParams: true })

router.get('/', getServices)

router.get('/:serviceId', validServiceId, getService)

router.post('/', validId, validServiceBody, createService)

router.put(
    '/:serviceId',
    validId,
    validServiceId,
    validServiceBody,
    updateService
)

router.delete('/:serviceId', validServiceId, validId, deleteService)

export default router
