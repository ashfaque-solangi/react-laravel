import React, { useEffect, useState } from 'react';
import { MentionsInput, Mention } from 'react-mentions'
import { useParams } from 'react-router-dom';
import { getRequest, postRequest } from '../utils/server-request';

function Comment(props) {
    const {id} = useParams();
    const [feedbackId, setFeedbackId] = useState(id);
    const [feedback, setFeedback] = useState({});
    const [comment, setComment] = useState('');
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        fetchData();
        fetchUsers();
    },[]);

    const fetchData = async () => {
        await getRequest(`feedback/${feedbackId}`, (res) => {
            console.log("res", res);
            if(res.status)
            {
                setFeedback(res.data);
            }
        });
    }


    const fetchUsers = async () => {
        await getRequest(`get_users`, (res) => {
            console.log("res", res);
            if(res.status)
            {
                setUsers(res.data);
            }
        });
    }

    const handlerComment = async () => {
        const params = {comment, user_id:1, feedback_id:feedbackId}
        await postRequest(`add_comment`, params, (res) => {
        if(res.status)
        {
            setComment('');
            fetchData();
        }
        });
    }

    return (
        <div className="about_section layout_padding">
            <div className="container">
                <div className="row mb-3">
                    <div className="col-lg-8 col-sm-12">
                        <h2 className="most_text">Post By : {feedback.name}</h2>
                        <h5 className="post_text">Posted On : {feedback.created_at}</h5>
                        <p className="lorem_text">
                            {feedback.description}
                        </p>
                    </div>
                </div>

                <div className="row mb-3">
                    { feedback?.comments && feedback.comments.map((comment, i) => <p key={comment.id}>
                    <b>#{i}:</b>    {comment.comment}
                    </p>)}
                </div>

                <div className="row mb-3">
                    <div className="panel-body">
                        {/* <textarea className="form-control" rows="2" placeholder="What are you thinking?"></textarea> */}
                        <MentionsInput className="form-control" value={comment} onChange={(e)=>{
                            setComment(e.target.value)
                        }}>
                            <Mention
                                trigger="@"
                                data={users}
                                // renderSuggestion={this.renderUserSuggestion}
                            />
                        </MentionsInput>
                        <button className="btn btn-sm btn-primary pull-right mt-4" type="button" onClick={handlerComment}>
                            Add Comment
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Comment;
