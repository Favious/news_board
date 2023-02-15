const Pins = require('./pin.model');

const createPin = async (req, res) => {
  try {
    const newPin = await Pins.create(req.body);
    return res.status(201).send(newPin);
  } catch(error) {
    return res.status(500).send(error);
  }
};

const findPins = async (req, res) => {
  try {
    const foundPins = await Pins.find();
    return res.send(foundPins);
  } catch(error) {
    return res.status(500).send(error);
  }
};

const findPin = async (req, res) => {
  try {
    const foundPin = await Pins.findOne({ _id: req.params.id });
    if (foundPin) {
      return res.send(foundPin);
    }
    return res.send({ message: NOT_FOUND });
  } catch(error) {
    return res.status(500).send(error);
  }
};

const updatePin = async (req, res) => {
  try {
    const updatedPin = await Pins.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
    if (updatedPin) {
     return res.send(updatedPin);
    }
    return res.send({ message: FAILED });
  } catch(error) {
    return res.status(500).send(error);
  }
};

const deletePin = async (req, res) => {
    try {
      const deletedPin = await Pins.findByIdAndRemove(req.params.id);
      if (deletedPin) {
       return res.send(foundPin);
      }
      return res.send({ message: FAILED });
    } catch(error) {
      return res.status(500).send(error);
    }
  };

module.exports = {
  createPin,
  updatePin,
  deletePin,
  findPin,
  findPins
};
