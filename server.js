const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const user = require("./Routes/user")
const app = express();

app.use(
    bodyParser.urlencoded({
        extended: true
    })
);
app.use(bodyParser.json({ limit: '900mb' }));
app.use((req, res, next) => {

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers Authorization Action");
    res.setHeader("Access-Control-Allow-Headers", '*')
    res.setHeader('Cache-Control', 'no-cache');
    next();
  });
const url = 'mongodb://localhost:27017/registration';
mongoose
    .connect(
        url, { useNewUrlParser: true }
    )
    .then(() => console.log("MongoDB successfully connected"))
    .catch(err => console.log(err));
app.use("/api/v1/user",user)
// app.use("/api/v1/login",login)
const PORT = 5001;

app.listen(PORT,function(req,res){
    console.log(`my server is runnign on port no: ${PORT}`);
})