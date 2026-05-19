import { Request, Response } from 'express'
import Account from '../../models/account.model'

// [GET] /accounts
export const index = async (req: Request, res: Response) => {
  const accounts = await Account.find({
    deleted: false,
    status: 'active'
  })
  //   console.log(accounts)
  res.render('client/pages/homepage.pug', {
    pageTitle: 'Trang chủ',
    accounts: accounts
  })
}
