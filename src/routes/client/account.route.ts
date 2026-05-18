import { Router } from 'express'
const router: Router = Router()

import * as controller from '../../controllers/account.controller'

router.get('/', controller.index)

export const accountRoutes: Router = router
