import mongoose from "mongoose"; 
const fitnessSchema= mongoose.Schema({
             workoutName:{ type:String, required:true },
             type:{ type:String, required:true },
             duration:{ type:Number, required:true }, 
             calorieBurned:{ type: Number,  required:true  }
 })
 const fitnessModel = mongoose.model('Fitness',fitnessSchema)
 export default fitnessModel
