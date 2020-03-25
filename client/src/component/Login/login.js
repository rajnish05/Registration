import React, { Component } from "react";
import { connect } from "react-redux";
import { registerValidation } from "../common/validation";
import { loginUser } from "../../Action/authAction";
import { toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
class Register extends Component {
    constructor(props) {
        super(props)
        this.state ={
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
        // registerValidation(this.state)
        // .then(res =>{
        //     console.log("login...",res)
        //     if(res == true){
        //         this.setState({errors:""})
                let payload = {
                    email:this.state.email,
                    password: this.state.password
                };
                this.props
                .loginUser(payload)
                .then((userRes) =>{
                    toast.success("Sucess");
                    this.props.history.push("/home")
                })
                .catch((userErr) =>{
                    toast.error("Invalid Credential");

                })
            }
        // })
        // .catch((err) =>{
        //     this.setState({errors:err});
        // })

    // }

    render() {
        const { errors } = this.state
        return (
            <div className="">
                <img className="Image" src="image/images.jpeg" ></img>

                <div className="custom-container">
                    <h2 align="center"> Login</h2>
                    <form onSubmit = {this.handleSubmit} >
                                <div class="row m-b-n">
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

                                     <button className="btn btngreen">LOGIN</button>
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

const mapDispatch = {loginUser  };
 
export default connect(
    mapStateToProps,
    mapDispatch
)(Register);