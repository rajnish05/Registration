import React, { Component } from "react";
import { connect } from "react-redux";
import { loginUser } from "../../Action/authAction";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            errors: {}
        }
    }
    handleChange = (e) => {
        this.setState({ [e.target.id]: e.target.value })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        let payload = {
            email: this.state.email,
            password: this.state.password
        };
        this.props
            .loginUser(payload)
            .then((userRes) => {
                toast.success("Sucess");
                this.props.history.push("/home")
            })
            .catch((userErr) => {
                toast.error("Invalid Credential");

            })
    }
   

    render() {
        const { errors } = this.state
        return (
            <div className = "background">
            
                    {/* <h2 align="center"> Registration</h2> */}
                    <span>.</span>
                    <div className="custom-container1">
                <form onSubmit={this.handleSubmit} >
                    <div class="row m-b-n">
                        <input
                            type="email"
                            className="form-control yellow-text"
                            placeholder="Enter Your Email "
                            id="email"
                            onChange={this.handleChange}
                        />
                        <span className="red-text">{errors.email}</span>
                        <input
                            type="password"
                            className="form-control yellow-text"
                            placeholder="Enter Your Password"
                            id="password"
                            onChange={this.handleChange}
                        />
                        <span className="red-text">{errors.password}</span>

                        <button className="btn btnred">LOGIN</button>
                        <span className = "white-text algnRt ">Click here for new <a className = "yellow-text" href ="/"><i>Registration</i></a></span>
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

const mapDispatch = { loginUser };

export default connect(
    mapStateToProps,
    mapDispatch
)(Register);