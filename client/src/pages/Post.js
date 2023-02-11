import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
import RecommendIcon from "@mui/icons-material/Recommend";
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";
import CommentIcon from "@mui/icons-material/Comment";
import SendIcon from '@mui/icons-material/Send';

var ld = require("lodash");

function Post() {
  let { id } = useParams();
  const [postObject, setPostObject] = useState([]);
  const [commentsList, setCommentsList] = useState([]);
  const [newCommentInPost, setNewCommentInPost] = useState("");
  const [newUsrForComment, setNewUsrForComment] = useState("");
  const [renderNow, setRenderToOnNow] = useState({});
  const inputRef = useRef(null);

  const commentToInsert = {
    commentBudy: newCommentInPost,
    username: newUsrForComment,
    PostId: id,
  };

  const addCommentInPost = () => {
    axios
      .post("http://localhost:3213/comments/", commentToInsert, {
        headers: {
          accessToken: localStorage.getItem("sessionToken"),
        },
      })
      .then((response_insert) => {
        if (response_insert.data.error) {
          alert(response_insert.data.error);
        } else {
          setRenderToOnNow(Date.now);
          setNewCommentInPost("");
          setNewUsrForComment("");
          inputRef.current.focus();
        }
      });
  };

  const deletePost = async (commentId) => {
    await new Promise((r) => setTimeout(r, 500));
    axios
      .delete(`http://localhost:3213/comments/byId/${commentId}`)
      .then((response_delete) => {
        setRenderToOnNow(Date.now);
        inputRef.current.focus();
      });
  };

  useEffect(() => {
    axios.get(`http://localhost:3213/posts/byId/${id}`).then((response) => {
      setPostObject(response.data);
    });
    axios
      .get(`http://localhost:3213/comments/byPostId/${id}`)
      .then((response) => {
        setCommentsList(response.data);
      });
  }, [id, renderNow]);

  return (
    <div className="postPage">
      <div className="leftSide">
        <div className="post" id="individual">
          <div className="title">
            <EditIcon /> {postObject.title}
          </div>
          <div className="body">
            {postObject.postText} <EditIcon />
          </div>
          <div className="footer">
            <span>{"  "}{postObject.username}</span>
            <CommentIcon />
            {" "}{commentsList.length}
          </div>
        </div>
        <div className="add-comment">
          <div className="add-comment">
            <div className="commentLabel">
              <label className="comment">Place your comment below</label>
            </div>
            <input
              className="form-textarea"
              name="commentBudy"
              type="text"
              placeholder="Your comment"
              value={newCommentInPost}
              ref={inputRef}
              onChange={(e) => {
                setNewCommentInPost(e.target.value);
              }}
            />
            <div className="btn">
              <Button variant="contained" endIcon={<SendIcon />} onClick={addCommentInPost}>
                Save Comment
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* comments section */}
      <div className="rightSide">
        <div className="addCommentContainer">
          {commentsList.map((value, key) => {
            return (
              <table className="table" key={key}>
                <tbody>
                  <tr key={key}>
                    <td>
                      <RecommendIcon />
                    </td>
                    <td>
                      <span onClick={() => deletePost(value.id)}>
                        <DeleteSweepIcon />
                      </span>
                    </td>
                    <td>{ld.truncate(value.username, { length: 12 })}: </td>
                    <td>{value.commentBudy}</td>
                    {/* <td><span onClick={() => null}>Delete</span></td> */}
                  </tr>
                </tbody>
              </table>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Post;
