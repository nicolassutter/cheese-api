import { Express } from 'express'
import not_found from './not_found'
import Default from './default'

const middlewares = [
  not_found,
  Default
]

export const registerMiddlewares = (app: Express) => {
  middlewares.forEach(middleware => app.use(middleware))
}

export default middlewares