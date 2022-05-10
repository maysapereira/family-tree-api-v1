const express = require('express')
const app = express()

const routes = require('./routes')
routes(app)

const port = 3000

app.listen(port, () => {
    console.log(`API running on port ${port}`)
})

module.exports = app