require('dotenv').config();
const express = require('express');
const { logger } = require('./services');
const { pingRouter } = require('./routes');

const app = express();

(async () => {
    try {
        app.use(express.json());

        app.use('/v1/ping', pingRouter);

        app.listen(process.env.PORT, () =>
            logger.info(`Server listen at port ${process.env.PORT}`)
        );
    } catch (e) {
        logger.error(e);
    }
})();
