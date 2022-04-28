const User = require("../model/User");

const jwt = require("jsonwebtoken");

const loginService = (email) => User.findOne({ email: email }).select("+password");

module.exports = { loginService };