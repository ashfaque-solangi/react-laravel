import React from 'react';

import {Card, ListGroup} from 'react-bootstrap';

function Comment(props) {
    return (
        <>
            {/* <h2 className="most_text">Most Awesome Blue Lake With Snow <br/>River</h2>
            <p className="lorem_text">
                {props.longText ? props.longText : ''}
            </p> */}

<div className="panel-body">
    <textarea className="form-control" rows="2" placeholder="What are you thinking?"></textarea>
    <div className="mar-top clearfix">
      <button className="btn btn-sm btn-primary pull-right" type="submit"><i className="fa fa-pencil fa-fw"></i> Share</button>
      <a className="btn btn-trans btn-icon fa fa-video-camera add-tooltip" href="#"></a>
      <a className="btn btn-trans btn-icon fa fa-camera add-tooltip" href="#"></a>
      <a className="btn btn-trans btn-icon fa fa-file add-tooltip" href="#"></a>
    </div>
  </div>
        </>
    );
}

export default Comment;
