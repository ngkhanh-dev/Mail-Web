import { Request, Response, Router } from 'express'
import Account from '../../models/account.model'
const router: Router = Router()

router.get('/accounts', async (req: Request, res: Response) => {
  const accounts = await Account.find({
    deleted: false,
    status: 'active'
  })
  //   console.log(accounts)
  res.render('client/pages/homepage.pug', {
    pageTitle: 'Trang chủ',
    accounts: accounts
  })
})

export const accountRoutes: Router = router
