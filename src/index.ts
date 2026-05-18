import express, { Express, Request, Response } from 'express'
import { ImapFlow } from 'imapflow'
import dotenv from 'dotenv'
import connectDB from './config/database'
import Account from './models/account.model'

const app: Express = express()
dotenv.config()
const port: string = `${process.env.PORT}`
// Kết nối database
connectDB()

const client = new ImapFlow({
  host: 'imap.example.com',
  port: 993,
  secure: true,
  auth: {
    user: 'user@example.com',
    pass: 'your-password'
  },
  logger: false // Disable logging. Omit to use the default Pino logger.
})

app.set('views', './src/views')
app.set('view engine', 'pug')

app.get('/accounts', async (req: Request, res: Response) => {
  const accounts = await Account.find({
    deleted: false,
    status: 'active'
  })
  console.log(accounts)
  res.render('client/pages/homepage.pug', {
    pageTitle: 'Trang chủ',
    accounts: accounts
  })
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
