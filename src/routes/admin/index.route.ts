import { Express } from 'express'
import { accountRoutes } from './account.route'

const clientRoutes = (app: Express) => {
  app.use('/accounts', accountRoutes)
}

export default clientRoutes
