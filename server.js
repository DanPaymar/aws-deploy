//
const express = require('express')

const app = express()
app.use(express.static(`${__dirname}/public`))
app.listen(4000, () => console.log('running on 4000'))