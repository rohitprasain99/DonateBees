import express from 'express'

import beneficiaryRoutes from "./src/beneficiaries/beneficiary.routes.js"
import responseInterceptor from './src/core/response.interceptor.js'
import userRoutes from './src/users/user.routes.js'
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

app.get('/api/v1/guides', async (req, res) => {
    const response = await fetch('https://api.travelnepal.guide/api/v1/user/registered-guide')
    const data = await response.json()
    res.json(data)
})

app.use('/api/v1/beneficiaries', beneficiaryRoutes)
app.use('/api/v1/user', userRoutes)


export default app;