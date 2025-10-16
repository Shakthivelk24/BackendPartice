import mongoose from "mongoose"; 
const employeeSchema= mongoose.Schema({
             name:{ type:String, required:true },
             designation:{ type:String, required:true },
             department:{ type:String, required:true }, 
             joiningDate:{ type: Date, default: Date.now }
 })
 const employeeModel = mongoose.model('Employee',employeeSchema)
 export default employeeModel
