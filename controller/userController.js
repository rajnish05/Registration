
const validateUser = require("../validation/userValidation")
const userService = require("../Service/userService")
// Registeration
exports.registerUser = (req, res) => {
    console.log("my request", req.body)

    const { errors, isValid } = validateUser.userRegisterValidation(req.body);
    if (!isValid) {
        return res.status(400).send(errors);

    }
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

// Login
exports.loginUser = (req, res) => {
    console.log("my request", req.body)

    const { errors, isValid } = validateUser.userLoginValidation(req.body);
    if(!isValid) {
        return res.status(400).send(errors);
    }
    userService.userLoginService(req.body)
        .then(result => {
            console.log("Login Success", result)
            var data = result;
            return res.status(200).send(data);
        })
        .catch(err => {
                if(err =="userNotFound"){
                    return res.status(404).send({ data: err });
                }else{
                    return res.status(500).send({ data: err });
                }
        })

};