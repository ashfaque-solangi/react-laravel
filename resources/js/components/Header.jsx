import React, {useState} from 'react';

import {Nav, Navbar} from 'react-bootstrap';
import { Link, useNavigate} from "react-router-dom";
import {postRequest} from "./../utils/server-request";



function Header(props) {

    const navigate = useNavigate();

    const [requestResponse, setRequestResponse] = useState(null);

    const handleLogout = async (e) => {
        const params = {user_id:1}
        await postRequest('logout', params, (res)=>{
            const {status,message} = res;
            localStorage.setItem('requestResponse', JSON.stringify(message));
            if(status)
            {
                navigate("../login");
            }
            else{
                console.error('Error logging out:', message);
            }
        });
    }

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

                        <li className="nav-item">
                            <Link className="nav-link" onClick={handleLogout}>logout</Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link className="nav-link" to={props.loggedIn ? '/login' : '/login'} onClick={handleLogout}>{props.loggedIn ? 'logout' : 'login'}</Link>
                        </li> */}
                    </Nav>
                </div>
                </Navbar>
            </div>
        </div>
    );
}

export default Header;

