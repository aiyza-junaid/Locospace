const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
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
  contact: {
    type: Number,
    required: true,
  },
  community: {
    type: String,
  },
  address: {
    type: String,
    required: true,
  },
  lat: {
    type: String
  },
  long: {
    type: String
  },
  profilePicture: {
    data: Buffer,
    contentType: String,
  },
});

const User =   mongoose.model('User', UserSchema);

module.exports = User;
