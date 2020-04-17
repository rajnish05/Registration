const _ = require("underscore");
const Validator = require("validator");
const isEmpty = require("is-empty");

// This Module Validate Input data for User
export const registerValidation = (data) =>{
    return new Promise((resolve,reject) =>{
        let errors = {};
        let formIsValid = true;

        // First Name
        if(data.name.length == 0){
            formIsValid = false
            errors["name"] = "First Name is Required !";
            reject(errors)
        } 
        if(data.name.length>0){
            if(!(data.name.match(/^[a-zA-Z ]{2,30}$/))){
                errors["name"] = "Provided Name is Invalid";
                reject(errors)
            }
        }
       
        //Validate Email
        if (Validator.isEmpty(data.email)) {
            formIsValid = false;
            errors["email"] = "Email is required";
            reject(errors)
         } else if (!Validator.isEmail(data.email)) {
            errors.email = "Email is invalid";
          } 
        
         // Validate Password
         if (Validator.isEmpty(data.password)) {
           formIsValid = false;
           errors["password"] = "Password is required";
           reject(errors)
        }else if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
            errors.password = "Password must be at least 6 characters";
          }
     resolve(formIsValid)
    })
}