const express = require('express')
const path = require('path')
const PORT = 3000

const donarRoutes = require("./src/donars/donar.routes.js")
const responseInterceptor = require('./src/core/response.interceptor.js')
const app = express()

//built-in middlewares
app.use('/static', express.static(path.join(__dirname, 'public')))

//custom middleware
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