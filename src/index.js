import dotenv from "dotenv";
import { app } from "./app.js";
import connectDB from "./db/index.js";

// dotenv config.
dotenv.config = {
    path : './env',
}

// connecting DB.
connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at Port : ${process.env.PORT}`)
      })
})
.catch((error) =>{
    console.log("MongoDB connection failed!! " , error);
})
