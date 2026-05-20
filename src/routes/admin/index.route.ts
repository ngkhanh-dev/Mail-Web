import { Express } from 'express'
import { accountRoutes } from './account.route'
import { mailRoutes } from './mail.route'

const adminRoutes = (app: Express) => {
  app.use('/accounts', accountRoutes)
  app.use('/mails', mailRoutes)
}

export default adminRoutes
