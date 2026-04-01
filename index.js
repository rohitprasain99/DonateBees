const express = require('express')

const app = express()

const PORT = 3000

app.get('/', (req, res) => {
    res.send("welcome to donate bees")
})

app.listen(PORT, () => {
    console.log(`donate bees running in ${PORT}\n. \n. \n. \n.`)
})