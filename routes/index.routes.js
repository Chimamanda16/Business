const express = require("express");
const router = express.Router();

const authrouter = require("./auth.routes");

router.use("/", authrouter);

module.exports = router;