import express from 'express'
import { registerMiddlewares } from './middlewares/index'
import { registerRouters } from './api/index'

/**
 * App setup
 */
const app = express()
const PORT = 4000

/**
 * On init
 */
registerMiddlewares(app)
registerRouters(app)

app.listen(PORT, () => {
  console.log(`RUNNING on port ${PORT}`)
})