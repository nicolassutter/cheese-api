import { Response, Request, NextFunction } from 'express'

export default (req: Request, res: Response, next: NextFunction) => {
  res.not_found = (message = 'Page not found...') => res.status(404).json({ error: message })
  next()
}