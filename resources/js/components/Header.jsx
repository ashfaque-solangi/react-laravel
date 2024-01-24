import React from 'react';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import logo from  '../../reactProject/images/logo.png';
import serachIamge from  '../../reactProject/images/serach-icon.png';
import img from  '../../reactProject/images/img-1.png';
import { Link } from "react-router-dom";


function Header() {
    return (
        <div className="header_section">
            <div className="container-fluid header_main">
                <Navbar className="navbar navbar-expand-lg">
                <Link className="logo" to="/">
                    <h4>Feedback Tool</h4>
                </Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <Nav className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/feedback">Feedback</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">Register</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                    </Nav>
                </div>
                </Navbar>
            </div>
        </div>
    );
}

export default Header;

