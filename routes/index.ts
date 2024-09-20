import salonRoutes from './salon'
import serviceRoutes from './service'
import expenseRoutes from './expense'
import { Router } from 'express'

const router = Router()

router.use('/salons', salonRoutes)
router.use('/salons/:salonId/services', serviceRoutes)
router.use('/salons/:salonId/expenses', expenseRoutes)

export default router
