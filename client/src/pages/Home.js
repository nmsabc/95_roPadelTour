import React from "react";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../helpers/AuthContext";

// delete posts
import DeleteIcon from "@mui/icons-material/Delete";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";

var ld = require("lodash");


function Home() {
  const [listOfPlayers, setListOfPlayers] = useState([]);
  const [listOfPosts, setListOfPosts] = useState([]);
  const [renderNow, setRenderToOnNow] = useState("");
  const navigate = useNavigate();
  const { authState } = useContext(AuthContext);

  useEffect(() => {
    if (!authState.validUser && !localStorage.getItem("sessionToken")) {
      navigate("/signin");
    }
  }, []);

  useEffect(() => {
    axios.get("http://localhost:3213/players").then((response) => {
      setListOfPlayers(response.data);
    });
  }, []);

  useEffect(() => {
    axios.get("http://localhost:3213/posts").then((response) => {
      setListOfPosts(response.data);
    });
  }, [renderNow]);

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
        // inputRef.current.focus();
      });
  };
  return (
    <div className="hm-page">
      <div className="hm-page-players">
        {listOfPlayers.map((value, key) => {
          return (
            <div className="player_h" key={key}>
              <div className="playerinfo_H">
                Player_ {value.first_name} _living in _ {value.address_city}{" "}
                _has_ {value.points} _poins.
              </div>
            </div>
          );
        })}
        <br />
      </div>

      <div className="hm-page-posts">
        {listOfPosts.map((value, key) => {
          return (
            <div className="post" key={key}>
              <div className="title">
                <div className="post-grid-thirds" key={key}>
                  <div className="footer-col">{value.title}</div>
                  <div className="footer-col">{""}</div>
                  <div className="footer-col-ts">
                    {ld.replace(
                      ld.truncate(value.createdAt, {
                        length: 16,
                        omission: "",
                      }),
                      "T",
                      " "
                    )}
                  </div>
                </div>
              </div>
              <div
                className="body"
                key={key}
                onClick={() => {
                  navigate(`/post/${value.id}`);
                }}
              >
                {value.postText}
              </div>
              <div className="footer">
                <div className="post-grid-thirds">
                  <div className="footer-col">
                    {ld.truncate(value.User.username, { length: 13 })}
                  </div>
                  <div className="footer-col">
                    <ThumbUpOffAltIcon />
                  </div>
                  {authState.username === value.User.username && (
                    <div
                      className="footer-col"
                      onClick={() => deletePost(value.id)}
                    >
                      <DeleteIcon />
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
        {/* <StickyFooter /> */}
    </div>
  );
}

export default Home;
