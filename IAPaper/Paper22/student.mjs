import mongoose from "mongoose"; 
const studentSchema= mongoose.Schema({
             name:{ type:String, required:true },
             rollNumber:{ type:String, required:true },
             className:{ type:String, required:true}, 
             enrollmentYear:{ type: Number,  required:true  }
 })
 const StudentModel = mongoose.model('Student',studentSchema)
 export default StudentModel
