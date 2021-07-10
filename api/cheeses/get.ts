import express from 'express'
import Cheeses from '../../chesses/cheeses'
const router = express.Router()
const lower = (str: string) => str.toLowerCase()

router.get('/cheeses', (req, res) => {
  return res.status(200).send(Cheeses)
})

router.get('/cheese/:name', (req, res) => {
  const { params } = req

  if (!params.name) {
    return res.send({ error: 'error' })
  }

  const cheese = Cheeses.find(({ name }: { name: string }) => lower(name) === lower(params.name))

  if (!cheese) {
    return res.send({ error: 'error' })
  }

  return res.send(cheese)
})

export default router