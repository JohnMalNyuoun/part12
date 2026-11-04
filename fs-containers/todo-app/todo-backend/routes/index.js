const express = require('express');
const router = express.Router();

const configs = require('../util/config')
const redis = require('../redis')  // import clean client  
let visits = 0

/* GET index data. */
router.get('/', async (req, res) => {
  visits++

  res.send({
    ...configs,
    visits
  });
});

module.exports = router;
