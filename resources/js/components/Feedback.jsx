
import React from 'react';
import { Link } from "react-router-dom";

import fbImage from  '../../reactProject/images/fb-icon.png';
import twitterIamge from  '../../reactProject/images/twitter-icon.png';
import instagramImg from  '../../reactProject/images/instagram-icon.png';
import linkedin from  '../../reactProject/images/linkedin-icon-1.png';
import likeImg from  '../../reactProject/images/like-icon.png';
import img8 from  '../../reactProject/images/img-8.png';

class Feedback extends React.Component {
    render() {
      return(
        <div className="about_section layout_padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-sm-12">
                        <p className="post_text">Post By : 09/06/2019</p>
                        <h2 className="most_text">Most Awesome Blue Lake With Snow <br/>River</h2>
                        <p className="lorem_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis</p>
                        <div className="social_icon_main">
                            <div className="social_icon">
                                <ul>
                                    <li><Link href="#"><img src={fbImage}/></Link></li>
                                    <li><Link href="#"><img src={twitterIamge}/></Link></li>
                                    <li><Link href="#"><img src={instagramImg}/></Link></li>
                                </ul>
                            </div>
                            <div className="read_bt"><Link href="#">Read More</Link></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      );
    }
}

export default Feedback;
