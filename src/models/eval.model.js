const mongoose = require("mongoose")
const evaluationSchema = new mongoose.Schema({
    date_of_evaluation:{type: String, required: true},
    topic_name:{type: String, required: true},
    instructor_id:{type: mongoose.Schema.Types.ObjectId,
        ref:"user",
        required: true}
},{
    timestamps:true,
    versionKey:false
})
module.exports = mongoose.model("evaluation", evaluationSchema)