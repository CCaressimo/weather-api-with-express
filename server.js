const express = require('express')
const app = express()

app.set('view engine', 'ejs')

const port = 3000

app.get('/', (req, res) => {
    res.send('<h1>Hello world!<h1>')
})

app.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`);
})

