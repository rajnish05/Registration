import React, { Component } from 'react';
import { NavLink, Link, BrowserRouter as Router } from 'react-router-dom'

class Header extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Router>
                <nav className="navbar navbar-pearl navbar-fixed-top main-menu" role="navigation">
                    <div className='navbar-header'>
                        <div className="collapse navbar-collapse">
                            <ul className="nav navbar-nav">
                                <li><NavLink to='/home'>Home</NavLink></li>
                                <li><NavLink to='/contact'>Contact</NavLink></li>
                                <li><NavLink to='/about'>About</NavLink></li>
                            </ul>
                        </div>




                    </div>
                </nav>


            </Router>
        )
    }
}

export default Header;