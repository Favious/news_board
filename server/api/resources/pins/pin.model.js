const mongoose = require('mongoose');

const { Schema } = mongoose;

const pinSchema = new Schema({
  content: {
    type: String,
    required: true,
    maxlength: 400
  },
  contactInfo: {
    required: false,
    type: {
      telephoneNumber: {
        required: false,
        type: String
      },
      whatsapp: {
        required: false,
        type: String
      },
      email: {
        type: String,
        required: false
      },
      direction: {
        type: String,
        required: false
      }
    }
  },
  duration: {
    type: Number,
    min: 1,
    max: 31,
    auto: 1
  },
  position: {
    type: { x: Number, y: Number },
    default: { x: 10, y: 10 },
  }
}, { timestamps: true });

module.exports = mongoose.model('Pins', pinSchema);
