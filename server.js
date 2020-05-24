const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 8000;

app.use(express.static(path.join(__dirname, "/dist")));

app.listen(port)