// importing Validation
const validateUser = require("../validation/userValidation")
// importing Services
const userService = require("../Service/userService")

// This Controller is used For user Registration
exports.registerUser = (req, res) => {
    console.log("my request for user Register", req.body)
    // validating Register input
    const { errors, isValid } = validateUser.userRegisterValidation(req.body);
    if (!isValid) {
        return res.status(400).send(errors);

    }
    // calling of Registration Service
    userService.userRegisterService(req.body)
        .then(result => {
            console.log("Registration Success", result)
            var data = result;
            return res.status(200).send(data);
        })
        .catch(err => {
            console.log("Error during registration", err)
           return res.status(500).send({ data: err });
        })

};

// This controller is used For login
exports.loginUser = (req, res) => {
    console.log("my request", req.body)
    // Validating Login input
    const { errors, isValid } = validateUser.userLoginValidation(req.body);
    if(!isValid) {
        return res.status(400).send(errors);
    }
    // Calling of Login Service
    userService.userLoginService(req.body)
        .then(result => {
            console.log("Login Success", result)
            var data = result;
            return res.status(200).send(data);
        })
        .catch(err => {
                if(err =="userNotFound"){
                    return res.status(404).send({ data: err });
                }else if(err == "emailAlreadyExists"){
                    return res.status(400).json({ email: "Email already exists" });
                }
                else{
                    return res.status(500).send({ data: err });
                }
        })

};