import { Express } from 'express'
import { accountRoutes } from './account.route'

const clientRoutes = (app: Express) => {
  app.use('/', accountRoutes)
}

export default clientRoutes
