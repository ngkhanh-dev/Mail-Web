import { Request, Response } from 'express'
import Account from '../../models/account.model'

// [GET] /accounts
export const index = async (req: Request, res: Response) => {
  const accounts = await Account.find({
    deleted: false,
    status: 'active'
  })
  res.render('admin/pages/accounts/index.pug', {
    pageTitle: 'Quản lý tài khoản',
    accounts: accounts
  })
}

// [GET] /accounts/create
export const create = (req: Request, res: Response) => {
  res.render('admin/pages/accounts/create.pug', {
    pageTitle: 'Thêm tài khoản'
  })
}

// [POST] /accounts/create
export const createPost = async (req: Request, res: Response) => {
  const { email, info, price, type } = req.body
  const existMail = await Account.findOne({
    email: email,
    type: type,
    deleted: false,
    status: 'active'
  })

  if (!email || !info || !price || !type) {
    req.flash('error', 'Vui lòng điền đầy đủ thông tin!')
    res.redirect('back')
    return
  }

  if (existMail) {
    req.flash('error', 'Email đã tồn tại!')
    res.redirect('back')
    return
  }

  const accountInfo = {
    email: email,
    info: info,
    price: price,
    type: type,
    status: 'active',
    deleted: false
  }
  const account = new Account(accountInfo)
  await account.save()
  req.flash('success', 'Thêm tài khoản thành công!')
  res.redirect('/accounts')
}
