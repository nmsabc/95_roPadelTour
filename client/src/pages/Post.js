import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import CreateComment from "./CreateComment";

function Post() {
  let { id } = useParams();
  const [postObject, setPostObject] = useState([]);
  const [commentsList, setCommentsList] = useState([]);
  // conct [newComment, setNewComment] = useState("");

  useState(() => {
    axios.get(`http://localhost:3213/posts/byId/${id}`).then((response) => {
      // console.log(response);
      setPostObject(response.data);
    });
    axios.get(`http://localhost:3213/comments/${id}`).then((response) => {
      // console.log(response);
      setCommentsList(response.data);
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
        <div className="add-comment">{CreateComment(id)}</div>
      </div>
      <div className="rightSide">
        <div className="addCommentContainer">
          {commentsList.map((value, key) => {
            return (
              <>
                <div className="listOfComments" key={key}>
                  <div className="comment">User: {value.username} said: {value.commentBudy}
                </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Post;
