const mongoose = require("mongoose");
const User = require("../Model/userModel")

exports.userRegisterService = function(payload){
    return new Promise(function (resolve, reject) {
        const newUser = new User({
            fName:payload.fName,
            lName:payload.lName,
            contact:payload.contact,
            email:payload.email,
            password:payload.password
        })
        newUser.save()
        .then((res) =>{
            console.log("registration successfully..",res)
            resolve(res)

        }).catch((err) =>{
            console.log("err occuring during registration",err)
            reject(err)
        })
})
}


exports.userLoginService = function(payload){
    return new Promise(function (resolve,reject){
        User.findOne({email:payload.email,password:payload.password })
        .then((res) =>{
            if(res){
                resolve(res)
            }
            reject("userNotFound")
        })
        .catch((err) =>{
            console.log("User not Founddd",err)
            reject(err)
        })
    })
}