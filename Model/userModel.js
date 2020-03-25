const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const userSchema = new Schema({
    fName:{
            type:String,
            trim:true,
            required:true
        },
        lName:
        {
            type:String,
            trim:true,
            required:true
        },
        contact:
        {
            type:String,
            trim:true,
            required:true
        },
        email:
        {
            type:String,
            trim:true,
            required:true
        },
        password:
        {
            type:String,
            trim:true,
            required:true
        }
    
    
});

module.exports = User = mongoose.model("user", userSchema);