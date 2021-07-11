import express from 'express'
import { registerMiddlewares } from './middlewares/index'
import { registerRouters } from './api/index'
const cors = require('cors')

/**
 * App setup
 */
const app = express()
const PORT = process.env.PORT || 4000

/**
 * On init
 */
app.use(cors())
registerMiddlewares(app)
registerRouters(app)

app.listen(PORT, () => {
  console.log(`RUNNING on port ${PORT}`)
})