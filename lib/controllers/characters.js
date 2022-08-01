const { Router } = require('express');
const  Character  = require('../models/Character');
const router = Router();

router
  .get('/', async(req, res) => {
    const characters = await Character.getAll();
    console.log(characters);
    
    res.json(characters);
  });

module.exports = router;
