var fs = require('fs');
var os = require('os');
var _ = require('lodash');
var main = require('./main');
var name = main.name

console.log(name)
// var user = os.userInfo();
// console.log(user) 

fs.appendFile('greeting.txt', ' Hi Aman' , ()=>{
    console.log('file is created')
});

console.log(main)