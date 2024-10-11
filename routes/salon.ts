import express from 'express'
import { getSalon } from '../controllers/salon/getSalon'
import { validId } from '../middlewares/general/validId'
import { getAllSalons } from '../controllers/salon/getAllSalons'
import { createSalon } from '../controllers/salon/createSalon'
import { validSalonBody } from '../middlewares/salon/validBody'
import { updateSalon } from '../controllers/salon/updateSalon'
import { deleteSalon } from '../controllers/salon/deleteSalon'
import { addMonthHours } from '../middlewares/salon/addMonthHours'
import { getSalonByOwner } from '../controllers/salon/getSalonByOwner'
import { validEmail } from '../middlewares/salon/validEmail'

const router = express.Router()

router.get('/', getAllSalons)
router.get('/:ownerEmail', validEmail, getSalonByOwner)
router.get('/:salonId', validId, getSalon)

router.post('/', validSalonBody, addMonthHours, createSalon)

router.put('/:salonId', validId, validSalonBody, updateSalon)

router.delete('/:salonId', validId, deleteSalon)

export default router
