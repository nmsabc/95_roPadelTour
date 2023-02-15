import React, { useEffect, useState, useRef, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
import RecommendIcon from "@mui/icons-material/Recommend";
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import DeleteIcon from "@mui/icons-material/Delete";
import CommentIcon from "@mui/icons-material/Comment";
import { AuthContext } from "../helpers/AuthContext";

var ld = require("lodash");

function Post() {
  let { id } = useParams();
  const navigate = useNavigate();
  const [postObject, setPostObject] = useState([]);
  const [commentsList, setCommentsList] = useState([]);
  const [newCommentInPost, setNewCommentInPost] = useState("");
  const [newUsrForComment, setNewUsrForComment] = useState("");
  const [renderNow, setRenderToOnNow] = useState({});
  const inputRef = useRef(null);
  const { authState } = useContext(AuthContext);

  useEffect(() => {
    if (!authState.validUser && !localStorage.getItem("sessionToken")) {
      navigate("/signin");
    }
  }, [authState.validUser, navigate]);

  useEffect(() => {
    axios.get(`http://localhost:3213/posts/byId/${id}`).then((response) => {
      setPostObject(response.data);
    });
  }, [id, renderNow]);
  useEffect(() => {
    axios
      .get(`http://localhost:3213/comments/byPostId/${id}`)
      .then((response) => {
        setCommentsList(response.data);
      });
  }, [id, renderNow]);

  const commentToInsert = {
    commentBody: newCommentInPost,
    username: newUsrForComment,
    UserId: authState.id,
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

  const deleteComment = async (commentId) => {
    await new Promise((r) => setTimeout(r, 500));
    axios
      .delete(`http://localhost:3213/comments/byId/${commentId}`, {
        headers: {
          accessToken: localStorage.getItem("sessionToken"),
        },
      })
      .then((response_delete) => {
        setRenderToOnNow(Date.now);
        inputRef.current.focus();
      });
  };

  const deletePost = async (postId) => {
    await new Promise((r) => setTimeout(r, 500));
    axios
      .delete(`http://localhost:3213/posts/byId/${postId}`, {
        headers: {
          accessToken: localStorage.getItem("sessionToken"),
        },
      })
      .then((res_post_delete) => {
        setRenderToOnNow(Date.now);
        navigate("/");
      });
  };

  // we edit the post based on title or header with
  // the info from an prompt & with the BackEend PUT
  const editPost = (options) => {
    if (options === "title") {
      let newT = prompt("what is your desired new title?");
      if (newT != null) {
        axios
          .put(
            "http://localhost:3213/posts/modPostTitle",
            {
              newTitle: newT,
              id: id,
            },
            {
              headers: {
                accessToken: localStorage.getItem("sessionToken"),
              },
            }
          )
          .then((updR) => {setRenderToOnNow(Date.now)});
      }
    } else {
      let newB = prompt("what is your desired new postText?");
      if (newB != null) {
        axios
          .put(
            "http://localhost:3213/posts/modPostText",
            {
              newBodyText: newB,
              id: id,
            },
            {
              headers: {
                accessToken: localStorage.getItem("sessionToken"),
              },
            }
          )
          .then((updR) => {setRenderToOnNow(Date.now)});
      }
    }
  };

  return (
    <div className="postPage">
      <div className="leftSide">
        <div className="post" key={id}>
          <div className="title">
            <div className="post-grid-thirds">
              {postObject.title}
              {authState.username && postObject.User
                ? authState.username === postObject.User.username && (
                    <div
                      className="editIcon"
                      onClick={() => {
                        editPost("title");
                      }}
                    >
                      <EditIcon />
                    </div>
                  )
                : ""}
            </div>
          </div>
          <div className="body">
            <div className="post-grid-thirds">
              {postObject.postText}
              {authState.username && postObject.User
                ? authState.username === postObject.User.username && (
                    <div
                      className="editIcon"
                      onClick={() => {
                        editPost("postText");
                      }}
                    >
                      <EditIcon />
                    </div>
                  )
                : ""}
            </div>
          </div>
          <div className="footer">
            <div className="post-grid-thirds">
              <div className="footer-col">
                {postObject.User
                  ? ld.truncate(postObject.User.username, { length: 12 })
                  : ""}
              </div>
              <div className="footer-col">
                <CommentIcon /> {commentsList.length}
              </div>
              <div className="footer-col">
                {authState.username && postObject.User
                  ? authState.username === postObject.User.username && (
                      <div
                        className="footer-col"
                        onClick={() => deletePost(postObject.id)}
                      >
                        <DeleteIcon />
                      </div>
                    )
                  : " "}
              </div>
            </div>
          </div>
        </div>
        <div className="add-comment">
          <div className="add-comment">
            <div className="commentLabel">
              <label className="comment">Place your comment below</label>
            </div>
            <input
              className="form-textarea"
              name="commentBody"
              type="text"
              placeholder="Your comment"
              value={newCommentInPost}
              ref={inputRef}
              onChange={(e) => {
                setNewCommentInPost(e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  addCommentInPost();
                }
              }}
            />
            <div className="btn">
              <Button
                variant="contained"
                endIcon={<SendIcon />}
                onClick={addCommentInPost}
              >
                Save Comment
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* comments section */}
      <div className="rightSide">
        <div className="addCommentContainer">
          <div className="addCommentContainer">
            {commentsList && commentsList.length > 0 ? (
              commentsList.map((value, key) => {
                return (
                  <table className="table" key={key}>
                    <tbody>
                      <tr key={key}>
                        <td>
                          <RecommendIcon />{" "}
                          {authState.username === value.User.username && (
                            <span onClick={() => deleteComment(value.id)}>
                              <DeleteSweepIcon />
                            </span>
                          )}
                        </td>
                        <td>
                          {ld.truncate(value.User.username, { length: 12 })}:{" "}
                        </td>
                        <td>{value.commentBody}</td>
                        {/* <td><span onClick={() => null}>Delete</span></td> */}
                      </tr>
                    </tbody>
                  </table>
                );
              })
            ) : (
              <p>No comments to display</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
