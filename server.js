const express = require('express')
const app = express();
const db = require('./db')

const bodyParser = require('body-parser')
app.use(bodyParser.json()); //data is stored in (req.body). 

const Person = require('./models/Person')
const MenuItem = require('./models/Menu')

app.get('/', function(req, res){
    res.send('Welcome to Express')
})

//Import the router files
const personRoutes = require('./routes/personRoutes')
app.use('/person',personRoutes)

const menuRoutes = require('./routes/menuRoutes')
app.use('/menu', menuRoutes)

app.listen(3000, ()=>{
    console.log('server is listening on port 3000')
})