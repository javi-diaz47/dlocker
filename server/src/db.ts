import mongoose from 'mongoose'

export const dbConnection = async () => {
  try {
    const db = await mongoose.connect('mongodb://localhost/usersdb')
    console.log(`Database is connected ${db.connection.name}`)
    return db
  } catch (err) {
    console.log(err)
  }
}
