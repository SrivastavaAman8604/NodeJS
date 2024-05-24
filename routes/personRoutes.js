const express = require('express');
const router = express.Router();

const Person = require('../models/Person')

//Post route to add a person
router.post('/', async (req,res)=>{
    try{
        const data = req.body //Assuming the request body contains the person data

        //Create a new person document using the mongoose model
        const newPerson = new Person(data);

        //Save the new
        const response = await newPerson.save()
        console.log('data saved')
        res.status(200).json(response)

    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'})
    }
})

//Get method
router.get('/', async (req,res)=>{
    try{
        const data = await Person.find()
        console.log('data fetched')
        res.status(200).json(data)
    }catch(err){
        console.log(err)
        res.status(500).json({error: 'Internal Server Error'})
    }
})

router.put('/:id', async (req,res)=>{
    try{
        const personId = req.params.id; //Extract id from url 
        const updatedPersonData = req.body; //Update the data of a person

        const response = await Person.findByIdAndUpdate(personId, updatedPersonData, {
            new: true, //Return the updated document
            runValidators: true, //Runs Mongoose validation
        }) 

        if(!response){
            return res.status(404).json({error: 'Person not found'});
        }

        console.log('data updated')
        res.status(200).json(response)

    }catch(err){
        console.log(err)
        res.status(500).json({error: 'Internal Server Error'})
    }
})

router.delete('/:id',async (req,res)=>{
    try{
        const personId = req.params.id;
        const response = await Person.findByIdAndDelete(personId);

        if(!response){
            return res.status(404).json({error: 'Person not found'});
        }
        console.log('data deleted')
        res.status(200).json({message: 'person deleted success'})

    }catch(err){
        console.log(err)
        res.status(500).json({error: 'Internal Server Error'})
    }
})

router.get('/:workType', async (req,res)=>{
    try{
        const workType = req.params.workType; // Extract the work type from the url parameter

        if(workType == 'chef' || workType == 'manager' || workType == 'waiter' || workType == 'detective'){
            const response = await Person.find({work: workType}) //work is given in person.js file
            console.log('data fetch')
            res.status(200).json(response)
        }else{
            res.status(404).json({error: 'Not Found'});
        }
    }catch(err){
        console.log(err)
        res.status(500).json({error: 'Internal Server Error'})
    }
})

module.exports = router;