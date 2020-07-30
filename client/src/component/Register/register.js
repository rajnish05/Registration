import React, { Component } from "react";
import { connect } from "react-redux";
import { registerValidation } from "../common/validation";
import { registerUser } from "../../Action/authAction";
import { toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
class Register extends Component {
    constructor(props) {
        super(props)
        this.state ={
            name:'',
            contact:'',
            email:'',
            password:'',
            errors:{}
        }
    }
    handleChange = (e) =>{
        this.setState({[e.target.id]:e.target.value})
    }
    handleSubmit = (event) =>{
        event.preventDefault()
        console.log("eeeeeeeeeeeee",this.state)
        registerValidation(this.state)
        .then(res =>{
            console.log("register...",res)
            if(res == true){
                this.setState({errors:""})
                let payload = {
                   name : this.state.name,
                    contact : this.state.contact,
                    email:this.state.email,
                    password: this.state.password
                };
                this.props
                .registerUser(payload)
                .then((userRes) =>{
                    toast.success("Sucess");
                    this.props.history.push("/login")
                })
                .catch((userErr) =>{
                    toast.error("Error in registration");

                })
            }
        })
        .catch((err) =>{
            this.setState({errors:err});
        })

    }

    render() {
        const { errors } = this.state
        return (
            <div className = "background">
            
                    {/* <h2 align="center"> Registration</h2> */}
                    <span>.</span>
                    <div className="custom-container">
                    <form onSubmit = {this.handleSubmit} >
                                <div class="row m-b-n">
                                <span className="red-text">{errors.fName}</span>

                                    <input
                                        type="text"
                                        className="form-control yellow-text"
                                        placeholder="Enter Your Name"
                                        id="name"
                                         onChange = {this.handleChange}
                                         />
                                  
                                    <input
                                        type="text"
                                        className="form-control yellow-text"
                                        placeholder="Enter Your Contact"
                                        id="contact"
                                        onChange = {this.handleChange}
                                    />
                                    <span className="red-text">{errors.email}</span>

                                    <input
                                        type="email"
                                        className="form-control yellow-text"
                                        placeholder="Enter Your Email"
                                        id="email"
                                        onChange = {this.handleChange}
                                    />
                                    <span className="red-text">{errors.password}</span>

                                    <input
                                        type="password"
                                        className="form-control yellow-text"
                                        placeholder="Enter Your Password"
                                        id="password"
                                        onChange = {this.handleChange}
                                    />
                                    <button className="btn btnred">SIGN UP</button>
                        <span className = "white-text algnRt">Click here for new <a className = 'yellow-text' href ="/login"><i>Login</i></a></span>
                    
                                </div>
                            </form>
                        </div>

                        </div>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth
});

const mapDispatch = {registerUser  };
 
export default connect(
    mapStateToProps,
    mapDispatch
)(Register);