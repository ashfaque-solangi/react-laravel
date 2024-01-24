import React from 'react';

import Container from 'react-bootstrap/Container';
import footer_logo from  '../../reactProject/images/footer-logo.png';
import callIcon from  '../../reactProject/images/call-icon.png';
import mailIcon from  '../../reactProject/images/mail-icon.png';

import { Link } from "react-router-dom";


function Footer() {
    return (
        <>
            <div className="footer_section layout_padding margin_top_90">
                <Container>
                    <div className="footer_logo">
                        <Link to="index.html">
                            <img src={footer_logo}/>
                        </Link>
                    </div>
                    <div className="footer_menu">
                    <ul>
                        <li>
                            <Link className="nav-link" to="/landing_page">Home</Link>
                        </li>
                        <li>
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li>
                            <Link className="nav-link" to="/blog">Blog</Link>
                        </li>
                        <li>
                            <Link className="nav-link" to="/features">Features</Link>
                        </li>
                        <li>
                            <Link className="nav-link" to="/contact_us">Contact Us</Link>
                        </li>
                    </ul>
                    </div>
                    <div className="contact_menu">
                    <ul>
                        <li>
                            <Link to="#">
                                <img src={callIcon}/>
                            </Link>
                        </li>
                        <li>
                            <Link to="#">Call : +01 1234567890</Link>
                        </li>
                        <li>
                            <Link to="blog.html">
                                <img src={mailIcon}/>
                            </Link>
                        </li>
                        <li>
                            <Link to="features.html">demo@gmail.com</Link>
                        </li>
                    </ul>
                    </div>
                </Container>
            </div>
            <div className="copyright_section">
                <div className="container">
                <p className="copyright_text">Copyright 2020 All Right Reserved By.<a href="https://html.design"> Free  html Templates</a></p>
                </div>
            </div>
        </>
    );
}

export default Footer;
