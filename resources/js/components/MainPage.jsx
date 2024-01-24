import React from 'react';
import ReactDOM from 'react-dom/client';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import Header from './Header';
import Footer from './Footer';
import ContactUs from './ContactUs';
import Feedback from './Feedback';

import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import {Container, Row, Col} from "react-bootstrap";

import { useState } from 'react';


function MainPage() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Feedback />} />
                <Route path="/feedback" element={<ContactUs/>} />
                <Route path="/register" element={<RegisterPage/>} />
                <Route path="/login" element={<LoginPage/>} />
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
}

export default MainPage;

if (document.getElementById('example')) {
    const Index = ReactDOM.createRoot(document.getElementById("example"));

    Index.render(
        <React.StrictMode>
            <MainPage/>
        </React.StrictMode>
    )
}
