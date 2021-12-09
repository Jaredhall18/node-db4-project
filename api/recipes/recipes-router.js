const express = require('express');

const router = express.Router();

//Test endpoint
router.use('*', (req, res) => {
    res.json({ api: 'up'})
})

module.exports = router;