const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const PORT = 5001 ?? process.env.PORT
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended: true}));
let newItem = ''
app.get('/',(req,res) => {
    res.send("<h1>Hello world</h1>")
})

app.post('/',(req,res) => {
    newItem = req.body.newItem;
    res.redirect('/')
})
app.listen(PORT,(req,res)=>{
    console.log(`listening on http://localhost:${PORT}/`)
})

