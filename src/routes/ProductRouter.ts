import { Router } from 'express'
import { create, read, update, remove } from '../controllers/ProductController'
const router = Router()

router.route('/')
    .get(read)
    .post(create)
router.route('/:id')
    .put(update)
    .delete(remove)

export default router