const mongoose = require('mongoose');

const documentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Users' },
  content: {
    type: String,
    required: true,
  },

  isVerified: {
    type: Boolean,
    default: false,
  },
});

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: 'standard',
  },
});

const document = mongoose.model('Documents', documentSchema);
const users = mongoose.model('Users', userSchema);
module.exports = {
  users,
  document
}
