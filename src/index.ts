import express, { Express } from 'express'
import { ImapFlow } from 'imapflow'
import dotenv from 'dotenv'
import connectDB from './config/database'
import clientRoutes from './routes/client/index.route'

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

app.use(express.static('./src/public'))

clientRoutes(app)

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
