import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import usersRoutes from './routes/user'
import { dbConnection } from './db'
import https from 'https'

const app = express()

// Settings
app.set('PORT', 3000)

// Middlewares
app.use(express.json())

// Routes
app.use(usersRoutes)

dbConnection()

// Run HTTPS server
const sslServer = https.createServer(
  {
    key: process.env.KEY,
    cert: process.env.CERT,
  },
  app
)

sslServer.listen(app.get('PORT'), () =>
  console.log(`Server on port ${app.get('PORT')}`)
)
