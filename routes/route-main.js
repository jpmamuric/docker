const express = require('express');
const router  = express.Router();

router.get('/', (req, res ) => {
  res.send({ message: 'express api' });
});

module.exports = router;
