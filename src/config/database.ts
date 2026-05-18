import dns from 'dns'

dns.setDefaultResultOrder('ipv4first')
import { connect, mongoose } from 'mongoose'

const connectDB = async () => {
  try {
    await connect(process.env.MONGO_URL || '')
    console.log('Kết nối database thành công')
    console.log(mongoose.connection.name)
  } catch (error) {
    console.log('Kết nối database thất bại')
    console.log(error)
  }
}

export default connectDB
