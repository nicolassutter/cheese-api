import { Response, Request, NextFunction } from 'express'
import { getRandomCheese } from '../api/cheeses/get'
import { getAllCheeses } from '../utilities/getAllCheeses'

export default async (req: Request, res: Response, next: NextFunction) => {
  const cheeses = await getAllCheeses()

  res.not_found = (message = 'Page not found...') => {
    return res.status(404).json({
      error: message,
      random_cheese: getRandomCheese(cheeses)
    })
  }

  next()
}