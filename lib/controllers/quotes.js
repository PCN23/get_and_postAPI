const { Router } = require('express');
const pool = require('../utils/pool');

module.exports = Router()
  .post('/', async (req, res, next) => {
    const { rows } = await pool.query('insert into quotes values ($1) returning *;', [req.body]);

  });
