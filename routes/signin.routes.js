const express = require("express");
const indexrouter = express.Router();

indexrouter.get("/", (req, res) =>{
    res.send(__dirname + "/index");
});

module.exports = indexrouter;