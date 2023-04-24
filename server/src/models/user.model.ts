import { Schema, model } from 'mongoose'

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    nfc: { type: String, required: true, unique: true },
    logs: Array<String>,
  },
  {
    timestamps: true,
  }
)

export default model('User', userSchema)
