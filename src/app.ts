import express, { json } from 'express'
import cors from 'cors'
import morgan from 'morgan'
import ProductRouter from './routes/ProductRouter'

const app: express.Express = express()
const apiVersion = process.env.API_VERSION || 'v1'
const apiRoot = `/api/${apiVersion}`

app.use(morgan('dev'))
app.use(cors())
app.use(json())

app.use(`${apiRoot}/products`, ProductRouter)

export default app
