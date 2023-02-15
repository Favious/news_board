const express = require('express')
const  pinController = require('./pin.controller');

const pinRouter = express.Router();

pinRouter.route('')
  .post(pinController.createPin)
  .get(pinController.findPins);

pinRouter.route('/:id')
  .get(pinController.findPin)
  .put(pinController.updatePin)
  .delete(pinController.deletePin);

module.exports = pinRouter;
