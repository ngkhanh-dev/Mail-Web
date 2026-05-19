import mongoose from 'mongoose'

const mailSchema = new mongoose.Schema(
  {
    info: { type: String, required: true },
    email: { type: String, required: true },
    //   createdBy: String,
    createdAt: { type: Date, default: Date.now, expires: 3600 },
    type: { type: String, default: 'netflix' },
    deadline: { type: Date },
    price: { type: Number },
    status: { type: String, enum: ['active', 'inactive'], default: 'active' },
    deleted: { type: Boolean, default: false }
  },
  { timestamps: true }
)

const Mail = mongoose.model('Mail', mailSchema, 'mails')

export default Mail
