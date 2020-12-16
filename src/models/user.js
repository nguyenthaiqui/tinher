const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = Schema({
  firstName: { type: String, },
  lastName: { type: String, },
  email: { type: String, required: true, unique: true },
  gender: { type: String, required: true },
  password: { type: String, required: true },
  selfDescribe: {type: String},
  dateOfBirth: {type: Schema.Types.Date, required: true},
  images: {type: Schema.Types.Array},
  created_at: { type: Date, default: Date.now() },
  updated_at: { type: Date, default: Date.now() }
});

const User = mongoose.model("Users", UserSchema, "users");

module.exports = User;