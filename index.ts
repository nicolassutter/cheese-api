import express from 'express'
import Cheeses from './chesses/cheeses'
import not_found from './api/404'

const app = express()
const PORT = 3000

app.use(not_found)

const lower = (str: string) => str.toLowerCase()

app.get('/cheeses', (req, res) => {
  res.send(Cheeses)
})
app.get('/cheese/:name', (req, res) => {
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

app.get('*', (req, res) => {
  return (res as any).not_found()
})

app.listen(PORT, () => {
  console.log(`RUNNING on port ${PORT}`)
})