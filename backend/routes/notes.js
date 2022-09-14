const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('nodes with the string and the number of the string');
});

module.exports = router;