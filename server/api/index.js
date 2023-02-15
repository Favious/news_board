const express = require('express');
const pinRouter = require('./resources/pins/pin.router');
const restRouter = express.Router();

restRouter.use('/pins', pinRouter);

module.exports = restRouter;
