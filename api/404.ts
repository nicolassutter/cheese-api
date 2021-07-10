import Response from '../types/response'

export default (req: any, res: Response, next: Function) => {
  res.not_found = (message = 'Page not found...') => res.status(404).send(message)
  next()
}