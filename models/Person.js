const mongoose = require('mongoose');

//Define the Person Schema
const personSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    age:{
        type: Number
    },
    work:{
        type: String,
        enum: ['chef', 'waiter', 'manager','detective'],
        required: true
    },
    mobile:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true 
    },
    address:{
        type: String
    },
    salary:{
        type: Number,
        required: true
    }

})

//Crete Person model
const Person = mongoose.model('Person', personSchema);
module.exports = Person;