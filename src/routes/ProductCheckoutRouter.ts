import { Router } from 'express'
import { create, read, scan, remove } from '../controllers/ProductCheckoutController'
const router = Router()

router.route('/')
    .get(read)
    .post(create)
router.route('/:id')
    .patch(scan)
    .delete(remove)

export default router