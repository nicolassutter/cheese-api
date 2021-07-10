import { Express } from 'express'
import not_found from './not_found'

const middlewares = [
  not_found
]

export const registerMiddlewares = (app: Express) => {
  middlewares.forEach(middleware => app.use(middleware))
}

export default middlewares