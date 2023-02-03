import React from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from "react";


function Post() {
    let { id } = useParams();
    const [postObject, setPostObject] = useState([]);

    useState(() => {
        axios.get(`http://localhost:3213/posts/byId/${id}`).then((response) => {
          // console.log(response);
          setPostObject(response.data);
        });
      });

  return (
    <div className="postPage">
      <div className="leftSide">
        <div className="post" id="individual">
          <div className="title"> {postObject.title} </div>
          <div className="body">{postObject.postText}</div>
          <div className="footer">{postObject.username}</div>
        </div>
      </div>
      <div className="rightSide">Comment Section</div>
    </div>
  )
}

export default Post;
