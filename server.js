const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const PORT = 5001 ?? process.env.PORT
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended: true}));
let newItems = []
let newItem = ''
app.get('/',(req,res) => {
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
    let today = new Date();
    let day = today.toLocaleDateString("en-US", options);
    res.render("list",{kindOfDay: day, newListItems: newItems})
})

app.post('/',(req,res) => {
    let newItem = req.body.newItem;
    console.log(newItem)
    newItems.push(newItem);
    console.log(newItems)
    res.redirect('/')
})
app.listen(PORT,(req,res)=>{
    console.log(`listening on http://localhost:${PORT}/`)
})

