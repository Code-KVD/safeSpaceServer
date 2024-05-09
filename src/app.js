import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser";
const app = express();



// conifiguration settings for the server.

//configures the server to serve static files from the public directory.
app.use(express.static("public"));

//configuring to read JSON.
app.use(express.json({limit : '16kb'}));

// configuring for reading url encoded.
app.use(express.urlencoded({extended : true ,  limit : '16kb'}));

// For cross origin resource access from front end.
app.use(cors({
        origin : process.env.CORS_ORIGIN,
    }))

// cookie parser is used to parse the cookies from http requests.
app.use(cookieParser());









export {app};