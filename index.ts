import express from 'express'
import not_found from './api/404'
import getAllCheeses from './api/cheeses/get'

const app = express()
const PORT = 3000

app.use(not_found)
app.use('/', getAllCheeses)

app.get('*', (req, res) => {
  return res.not_found()
})

app.listen(PORT, () => {
  console.log(`RUNNING on port ${PORT}`)
})