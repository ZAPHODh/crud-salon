import salonRoutes from './salon'
import serviceRoutes from './service'
import expenseRoutes from './expense'
import reportRoutes from './report'
import { Router } from 'express'

const router = Router()

router.use('/salons', salonRoutes)
router.use('/salons/:salonId/services', serviceRoutes)
router.use('/salons/:salonId/expenses', expenseRoutes)
router.use('/salons/:salonId/reports', reportRoutes)

export default router
