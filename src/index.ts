import express, { Express } from 'express'
import { ImapFlow } from 'imapflow'
import dotenv from 'dotenv'
import connectDB from './config/database'
import adminRoutes from './routes/admin/index.route'
import bodyParser from 'body-parser'
import flash from 'express-flash'
import session from 'express-session'
import cookieParser from 'cookie-parser'

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

// Cấu hình view engine và thư mục views
app.set('views', `${__dirname}/views`)
app.set('view engine', 'pug')

//Nhúng express-flash
app.use(cookieParser('keyboard cat'))
app.use(session({ secret: 'keyboard cat', resave: false, saveUninitialized: false, cookie: { maxAge: 60000 } }))
app.use(flash())

// Nhúng thư mục public để phục vụ các tệp tĩnh như CSS, JS, hình ảnh
app.use(express.static(`${__dirname}/public`))

//Nhúng Body-parser
app.use(bodyParser.urlencoded({ extended: false }))

// Đăng ký các routes
adminRoutes(app)

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
