import { Request, Response } from 'express'
import Mail from '../../models/mail.model'

// [GET] /mails
export const index = async (req: Request, res: Response) => {
  const mails = await Mail.find({
    deleted: false,
    status: 'active'
  })
  res.render('admin/pages/mailbox/index.pug', {
    pageTitle: 'Quản lý thư',
    mails: mails
  })
}
