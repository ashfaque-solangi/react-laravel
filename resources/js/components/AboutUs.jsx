import React from 'react';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import fbImage from  '../../reactProject/images/fb-icon.png';
import twitterIamge from  '../../reactProject/images/twitter-icon.png';
import instagramImg from  '../../reactProject/images/instagram-icon.png';
import img5 from  '../../reactProject/images/img-5.png';
import aboutImg from  '../../reactProject/images/about-img.png';
import likeImg from  '../../reactProject/images/like-icon.png';
import { Link } from "react-router-dom";

export default function AboutUs() {
    return (
        <div className="about_section layout_padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-sm-12">
                        <div className="about_img">
                            <img src={aboutImg}/>
                        </div>
                        <div className="like_icon">
                            <img src={likeImg}/>
                        </div>
                        <p className="post_text">Post By : 09/06/2019</p>
                        <h2 className="most_text">Most Awesome Blue Lake With Snow <br/>Mountain</h2>
                        <p className="lorem_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis</p>
                        <div className="social_icon_main">
                            <div className="social_icon">
                                <ul>
                                <li>
                                    <Link href="#">
                                        <img src={fbImage}/>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <img src={twitterIamge} />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <img src={instagramImg} />
                                    </Link>
                                </li>
                                </ul>
                            </div>
                            <div className="read_bt"><Link href="#">Read More</Link></div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-12">
                        <div className="image_5">
                            <img src={img5}/>
                        </div>
                        <h1 className="about_taital">About Us</h1>
                        <p className="about_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis</p>
                        <div className="read_bt_1"><Link href="#">Read More</Link></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

