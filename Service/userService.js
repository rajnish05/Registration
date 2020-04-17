const mongoose = require("mongoose");
// importing Models
const User = require("../Model/userModel")

// This Service is Used for User Registration
exports.userRegisterService = function (payload) {
    return new Promise(function (resolve, reject) {
        User.find({ email: payload.email })
            .then((user) => {
                if(user.length>0) {
                    reject("emailAlreadyExists")
                } else {
                    const newUser = new User({
                        name: payload.name,
                        contact: payload.contact,
                        email: payload.email,
                        password: payload.password
                    })
                    newUser.save()
                        .then((res) => {
                            console.log("registration successfully..", res)
                            resolve(res)
                        })
                        .catch((err) => {
                            console.log("err occuring during registration", err)
                            reject(err)
                        })
                }

            })
    })
}

// This Service is Used for Login User

exports.userLoginService = function (payload) {
    return new Promise(function (resolve, reject) {
        User.findOne({ email: payload.email, password: payload.password })
            .then((res) => {
                if (res) {
                    resolve(res)
                }
                reject("userNotFound")
            })
            .catch((err) => {
                console.log("User not Founddd", err)
                reject(err)
            })
    })
}