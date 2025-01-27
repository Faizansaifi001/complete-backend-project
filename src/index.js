// require('dotenv').config({path:'./env'})
import dotenv from "dotenv"
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({path:'./env'})





connectDB()

.then(()=>{
    app.listen(process.env.PORT ||8000,()=>{
console.log(`server is running at port http://localhost${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log("Mongo db connection failed !!!", err)
})


















// ;(async()=>{
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error",(error)=>{
//             console.log("ERR: ",error);
//             throw error;
//         })
//         app.listen(process.loadEnvFile.PORT,()=>{
//             console.log(`App listening on port ${process.env.PORT}`);
//         }) 
//     } 
//     catch(error){
//         console.error("Error: ",error)
//         throw error
//     }
// })()