import mongoose from "mongoose"; 
const connetDB = async() => { 
try{
     await   mongoose.connect('mongodb+srv://shakthivelk1124_db_user:7oeNS8Dctko8d9FF@cluster0.5xuxpin.mongodb.net/TestDB') 
console.log('conneted to Database.....') 
}catch(error)
{ 
      console.log(error)
 }
 }
 export default connetDB
