const { Router } = require('express');
const { Episode } = require('../models/Episode');
const router = Router();

router
  
  .get('/', async(req, res) => {
    const episode = await Episode.getAll();
    console.log(episode);
    res.json(episode);
  });
  
module.exports = router;
