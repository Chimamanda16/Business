const express = require("express");
const router = express.Router();

const signinrouter = require("./signin.routes");

router.use("/", signinrouter);

module.exports = router;