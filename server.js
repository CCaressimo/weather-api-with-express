const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}))
app.set('view engine', 'ejs')

const port = 3000

app.get('/', (req, res) => {
    res.render('index')
})

app.post("/", (req, res) => {
  res.render("index");
  console.log(req.body.city);
});

app.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`);
})

