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
            fName:'',
            lName:'',
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
        registerValidation(this.state)
        .then(res =>{
            console.log("register...",res)
            if(res == true){
                this.setState({errors:""})
                let payload = {
                    fName : this.state.fName,
                    lName : this.state.lName,
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
            <div className="">
                <img className="Image" src="image/images.jpeg" ></img>

                <div className="custom-container">
                    <h2 align="center"> Registration</h2>
                    <form onSubmit = {this.handleSubmit} >
                                <div class="row m-b-n">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter Your First Name"
                                        id="fName"
                                         onChange = {this.handleChange}

                                    />
                                    <span className="red-text">{errors.fName}</span>

                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter Your Last Name"
                                        id="lName"
                                        onChange = {this.handleChange}
                                    />
                                    <span className="red-text">{errors.lName}</span>

                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter Your Contact"
                                        id="contact"
                                        onChange = {this.handleChange}
                                    />
                                    <span className="red-text">{errors.contact}</span>
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Enter Your Email"
                                        id="email"
                                        onChange = {this.handleChange}
                                    />
                                    <span className="red-text">{errors.email}</span>
                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="Enter Your Password"
                                        id="password"
                                        onChange = {this.handleChange}
                                    />
                                    <span className="red-text">{errors.password}</span>
                                    <span>Click here for</span><a href ='/login'><i>Login</i></a>
                                    <button className="btn btngreen">SIGN UP</button>
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