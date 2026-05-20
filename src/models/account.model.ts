import mongoose from 'mongoose'

const accountSchema = new mongoose.Schema(
  {
    email: { type: String, required: true },
    //   createdBy: String,
    createdAt: { type: Date, default: Date.now, expires: 60 },
    status: { type: String, enum: ['active', 'inactive'], default: 'active' },
    deleted: { type: Boolean, default: false }
  },
  { timestamps: true }
)

const Account = mongoose.model('Account', accountSchema, 'accounts')

export default Account
