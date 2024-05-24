const express = require('express');
const router = express.Router();

const MenuItem = require('../models/Menu')

router.post('/', async (req,res)=>{
    try{
        const data = req.body
        const menuItem = new MenuItem(data)
        const response = await menuItem.save()
        console.log('data save')
        res.status(200).json(response)

    }catch(err){
        console.log(err)
        res.status(500).json({error: 'Internal Server Error'})
    }
})

router.get('/', async (req, res)=>{
    try{
        const data = await MenuItem.find()
        console.log('data fetch')
        res.status(200).json(data)
    }catch(err){
        console.log(err)
        res.status(500).json({error: 'Internal Server Error'})
    }
})

module.exports = router;