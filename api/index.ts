import { Express } from 'express'
import GetCheeses from './cheeses/get'
import Status_404 from './status/404'

const routers = [
  GetCheeses,
  /**
   * 404 should always be at the end
   */
  Status_404
]

export const registerRouters = (app: Express) => {
  routers.forEach(router => app.use('/', router))
}

export default routers