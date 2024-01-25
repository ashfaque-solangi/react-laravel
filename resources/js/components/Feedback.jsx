
import React, { useState, useEffect }  from 'react';
import { Link } from "react-router-dom";
import Comment from './Comment';
import {getRequest} from "./../utils/server-request";


function Feedback() {


    const [readMore , setReadMore] = useState(false);

    const toggleReadMore = () => {
        setReadMore(!readMore);
    };

    const [feedbacks, setFeedbacks] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async (e) => {

        await getRequest('all_feedbacks', (res)=>{
            const {status,message, data} = res;
            if(status){
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
                    {feedbacks.map((value, index) => (
                        <div className="col-lg-8 col-sm-12" key={index}>
                            <h2 className="most_text">Post By : {value.name}</h2>
                            <h5 className="post_text">Posted On : {value.created_at}</h5>
                            <p className="lorem_text">
                            {readMore ? value.description : `${value.description.slice(0, 100)}...`}
                            </p>
                            <div className="read_bt">
                                <Link to={`/comment/${value.id}`}>
                                    Read More
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Feedback;
