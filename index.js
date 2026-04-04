import express from 'express'
import path from 'path'
import 'dotenv/config'

const PORT = 3000

import donarRoutes from "./src/donars/donar.routes.js"
import responseInterceptor from './src/core/response.interceptor.js'

const app = express()

//built-in middlewares
app.use('/static', express.static('public'))
app.use(express.json())

// custom middlewares
app.use(responseInterceptor)

//ROOT APP
app.get('/api/v1', (req, res) => {
    res.send("welcome to donate bees")
})

app.use('/api/donar', donarRoutes)

app.listen(PORT, () => {
    console.log(`donate bees running in ${PORT}\n. \n. \n. \n.`)
})