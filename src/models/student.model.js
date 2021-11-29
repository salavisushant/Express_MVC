const mongoose = require("mongoose")
const studentSchema = new mongoose.Schema({
    roll_id:{type: String, required: true},
    current_batch:{type: String, required: true},
    evaluation_status:{type:String, required:true},
    score_in_evaluation:{type:Number, required:true},
    user_id:{type: mongoose.Schema.Types.ObjectId,
        ref:"user",
        required: true}
},{
    timestamps:true,
    versionKey:false
})
module.exports = mongoose.model("student", studentSchema)