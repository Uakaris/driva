const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/verifyToken");

const Result = require("../models/results");

router.use(verifyToken);

