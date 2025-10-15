import mongoose from "mongoose"; 
const connetDB = async() => { 
try{
     await   mongoose.connect('mongodb+srv://shakthivelk1124_db_user:pB18dN1deyZxHPTV@cluster0.vdqcy1f.mongodb.net/TestDB') 
console.log('conneted to Database.....') 
}catch(error)
{ 
      console.log(error)
 }
 }
 export default connetDB
