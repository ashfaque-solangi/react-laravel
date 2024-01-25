
import React, { useState, useEffect }  from 'react';
import { Link } from "react-router-dom";
import Comment from './Comment';
import {feedbackRequest} from "./../utils/server-request";


function Feedback() {

    const longText =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

    const [readMore , setReadMore] = useState(false);

    const toggleReadMore = () => {
        setReadMore(!readMore);
    };

    const [feedbacks, setFeedbacks] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async (e) => {

        await feedbackRequest('all_feedbacks', (res)=>{
            const {status,message} = res;
            console.log("res", res);
            if(status)
            {
                setFeedbacks(data);
            }
            else{
                console.log("message", message);
            }
        });

    };


    return (
        <div className="about_section layout_padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-sm-12">
                        <p className="post_text">Post By : 09/06/2019</p>
                        <h2 className="most_text">Most Awesome Blue Lake With Snow <br/>River</h2>
                        <p className="lorem_text">
                            {readMore ? longText : `${longText.slice(0, 100)}...`}
                        </p>
                        <div className="read_bt">
                            <Link onClick={toggleReadMore}>
                                Read More
                            </Link>
                        </div>
                        {readMore && <Comment longText={longText}/>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Feedback;
