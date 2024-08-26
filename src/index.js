import express from 'express'
import { router as rutaFrases } from './routes/routes.js'

const app = express()
const port = process.env.PORT || 3000

// routes
app.use(rutaFrases)

app.listen(port, () => {
    console.log(`Server on http://localhost:${port}/`)
})