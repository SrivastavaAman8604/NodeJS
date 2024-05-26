const mongoose = require('mongoose')
require('dotenv').config();
//Define the Mongodb database connection URL
// const mongoURL = 'mongodb://localhost:27017/hotels' 
// const mongoDBURL = process.env.DB_URL_LOCAL 
const mongoURL = process.env.DB_URL 

//setup mongodb connection
mongoose.connect(mongoURL,{
    useNewUrlParser: true,
    useUnifiedTopology: true //it implies that we are working with new version of mongodb
})

//Get the default connection
//Mongoose maintains a default connection object representing the mongodb connection
const db = mongoose.connection;

//Define event listeners for database connection
db.on('connected', ()=>{
    console.log('Connected to Mongodb server');
})

db.on('error', (err)=>{
    console.error('Mongodb connection error:' , err);
})

db.on('disconnected', ()=>{
    console.log('Mongodb disconnected');
})

//Export the database  connection
module.exports = db;