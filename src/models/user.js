const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = Schema({
  firstName: { type: String, },
  lastName: { type: String, },
  email: {type: String, required: true, unique: true},
  gender: {type: String, required: true},
  password: {type: String, required: true}
});

const User = mongoose.model("Users", UserSchema, "users");

module.exports = User;