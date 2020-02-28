const express = require("express");
const router = express.Router();

const { findById } = require("../controllers/user");
const { userSignupValidator } = require("../validator");

router.param("userId", userById);

module.exports = router;
