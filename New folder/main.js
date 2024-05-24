var prompt = require('prompt-sync')();

let age = prompt('What is your age:')
if (age<18){
    console.log('my  age is under 18')
}else{
    console.log('my age is above 18')
}

var name = 'Aman'

module.exports={
    name
}