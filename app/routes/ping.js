const express = require('express');
const { logger } = require('../services');

const router = express.Router();

router.get('', (req, res) => {
    try {
        return res.status(200).send('pong');
    } catch (e) {
        logger.error(e);
        return res.status(500).send('Server Error');
    }
});

module.exports = router;
