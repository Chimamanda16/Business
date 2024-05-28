const mongoose = require ("mongoose")

let UserSchema = new mongoose.Schema({
    BusId: {
        type: Number,
        required: true
    },
    BusName: {
        type: String
    },
    email: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("User", UserSchema);