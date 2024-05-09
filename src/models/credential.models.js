import mongoose, { Schema } from "mongoose";

const credentialSchema = new mongoose.Schema({

    webURL : {
        type : String,
        required : true,
        trim : true
    },
    username : {
        type : String,
        required : true,
        trim : true
    },

    password : {
        type : String,
        required : true
    },

    userID : {
        type : Schema.Types.ObjectId,
        ref : "User",
        required : true
    }

}, { timestamps: true });

export const Credential = mongoose.model("Credential" , credentialSchema);
