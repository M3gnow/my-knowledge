require('dotenv').config();
const express = require('express');
const { logger } = require('./services');

(async () => {
    try {
        const app = express();

        app.listen(7510, () => logger.info('Server listen at port 7510'));
    } catch (e) {
        logger.error(e);
    }
})();
