import { Response, Request, NextFunction } from 'express'

/**
 * Fires on every request
 */
export default (req: Request, res: Response, next: NextFunction) => {
  const { url, method } = req
  const message = `---REQUEST---`
  const info = { url, method }
  console.log(message)
  console.log(info)
  next()
}