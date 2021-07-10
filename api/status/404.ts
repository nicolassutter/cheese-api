import express from 'express'
const router = express.Router()

router.get('*', (req, res) => res.not_found())

export default router