import express, { Express, Request, Response } from 'express'
import { ImapFlow } from 'imapflow'
import dotenv from 'dotenv'
import connectDB from './config/database'

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

app.get('/', (req: Request, res: Response) => {
  //   console.log('Connecting to IMAP server...')
  //   client.connect().then(() => {
  //     console.log('Connected to IMAP server')
  res.render('client/pages/homepage.pug')
})

app.set('views', './src/views')
app.set('view engine', 'pug')

app.get('/tours', (req: Request, res: Response) => {
  res.render('client/pages/tours/index.pug')
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
