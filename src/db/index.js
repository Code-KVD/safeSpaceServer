import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";


// A function to connect the database with the server.
const connectDB =  async () =>{
    try {

        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

        console.log(` \nMongoDB Connected!! DB HOST : ${connectionInstance.connection.host}`);

    } catch (error) {
        console.log("MongoDB connection error!! " ,error);
        process.exit(1);
    }
}


export default connectDB;