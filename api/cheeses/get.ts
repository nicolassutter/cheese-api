import express from 'express'
import { Cheese } from '../../@types/interfaces/cheese'
import { getAllCheeses } from '../../utilities/getAllCheeses'
import { lower } from '../../utilities/string'
import { searchByImage, searchByMilk, searchByName } from './get/search'

const router = express.Router()

/**
 * Will get a random cheese
 *
 * @returns A random cheese
 */
export const getRandomCheese = (cheeses: Cheese[]) => {
  const length = cheeses.length
  const max = length - 1
  const min = 0

  const random = Math.floor(Math.random() * (max - min + 1) + min)
  return cheeses[random]
}

/**
 * Get all cheeses
 */
router.get('/cheeses', async (req, res) => {
  const cheeses = await getAllCheeses()
  return res.status(200).send(cheeses)
})

/**
 * Get specific cheese
 */
router.get('/cheese/:name', async (req, res) => {
  const cheeses = await getAllCheeses()
  const { params } = req

  if (!params.name) {
    return res.not_found('Invalid name')
  }

  const cheese = cheeses.find(({ name }) => lower(name) === lower(params.name))

  if (!cheese) {
    return res.not_found(`This cheese doesn't exist... yet !`)
  }

  return res.send(cheese)
})

/**
 * Get specific cheese
 */
router.get('/random', async (req, res) => {
  const cheeses = await getAllCheeses()
  res.json(getRandomCheese(cheeses))
})

/**
 * Search for cheeses
 */
 router.get('/search', async (req, res) => {
  let cheeses = await getAllCheeses()
  const { name, milk, image } = req.query as { [key: string]: string }
  
  if (name) {
    cheeses = searchByName(cheeses, name)
  }
  
  if (milk) {
    cheeses = searchByMilk(cheeses, milk)
  }

  if (image) {
    cheeses = searchByImage(cheeses, image)
  }

  res.json(cheeses)
})

export default router