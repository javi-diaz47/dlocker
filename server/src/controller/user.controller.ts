import { Request, Response } from 'express'
import User from '../models/user.model'

export const getUsers = async (req: Request, res: Response) => {
  const user = await User.find()

  console.log(user)
  res.json(user)
}

export const logUser = async (req: Request, res: Response) => {
  const { nfc } = req.body
  const user = await User.findOne({ nfc })

  if (user && Array.isArray(user?.logs)) {
    user.logs.push(new Date())
    const newUser = await User.findOneAndUpdate(
      { nfc },
      { logs: [...user.logs, new Date()] },
      {
        new: true,
      }
    )
    return res.json(newUser)
  }

  return res.status(404).json({ error: `User with NFC code: ${nfc} Not found` })
}

export const deleteUser = async (req: Request, res: Response) => {
  const { nfc } = req.body
  const deletedUser = await User.deleteOne({ nfc })

  res.json({ deletedUser })
}

export const createUser = async (req: Request, res: Response) => {
  const { name, nfc } = req.body
  const newUser = {
    name,
    nfc,
    logs: [new Date()],
  }
  try {
    const resUser = await User.create(newUser)
    res.json(resUser)
  } catch (error) {
    res.status(409).json(error)
  }
}
