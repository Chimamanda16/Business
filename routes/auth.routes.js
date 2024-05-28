// Requiring constants
const express = require("express");
const passport = require("passport");
const path = require("path");
require("../controllers/auth.controller");
const authrouter = express.Router();

// Get the login page
authrouter.get("/login", (req, res) =>{
    const file = path.join(__dirname, "../public/index.html");
    res.sendFile(file);
});

//Google login route
authrouter.get("/auth/google", passport.authenticate("google", {scope: ["email", "profile"]})
);

authrouter.get("/google/callback", passport.authenticate("google", {failureRedirect: "/reject"}), (req, res) =>{
    res.redirect("/dashboard");
});

authrouter.get("/reject", (req, res) =>{
    res.sendFile(path.join(__dirname, "../public/newUser.html"));
});

authrouter.post("/newUser", (req, res) =>{
    const busId = req.body.busName;
    res.send("Saved");
});

module.exports = authrouter;