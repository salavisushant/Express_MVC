const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    first_name:{type: String, required: true},
    last_name:{type: String, required: true},
    gender:{type: String, required: true, default:"Male"},
    date_of_birth:{type: String, required: true}
},{
    timestamps:true,
    versionKey:false
})

module.exports = mongoose.model("user", userSchema)