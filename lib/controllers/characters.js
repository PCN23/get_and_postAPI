const { Router } = require('express');
const { Character } = require('express');

module.exports = Router()
  .get('/:id', async(req, res) => {
    const data = await Character.getById(req.params.id);
    res.json(data);
  });
