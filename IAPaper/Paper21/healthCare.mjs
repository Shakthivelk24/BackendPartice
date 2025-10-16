import mongoose from "mongoose"; 
const healthSchema= mongoose.Schema({
             patientName:{ type:String, required:true },
             doctorName:{ type:String, required:true },
             appointmentDate:{ type:Date, default:Date.now }, 
             reason:{ type: String,  required:true  }
 })
 const healthModel = mongoose.model('Health',healthSchema)
 export default healthModel
