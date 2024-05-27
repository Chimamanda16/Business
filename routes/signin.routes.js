const express = require("express");
const path = require("path");
const indexrouter = express.Router();

indexrouter.get("/", (req, res) =>{
    const file = path.join(__dirname, "../public/index.html");
    res.sendFile(file);
});

module.exports = indexrouter;