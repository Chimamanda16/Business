const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/index.routes");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT

app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(router);


mongoose.connect(process.env.Mongo)
.then((res) =>{
    app.listen(PORT, (req, res) =>{
        console.log("App is listening on port 3000");
    })
})
.catch((err) =>{
    console.error(err);
});