import React from "react";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../helpers/AuthContext";
var ld = require("lodash");

function Home() {
  const [listOfPlayers, setListOfPlayers] = useState([]);
  const [listOfPosts, setListOfPosts] = useState([]);
  const navigate = useNavigate();
  const { authState } = useContext(AuthContext);

  useEffect(() => {
    if (!authState.validUser) {
      navigate("/signin");
    }
  }, []);

  useEffect(() => {
    axios.get("http://localhost:3213/players").then((response) => {
      setListOfPlayers(response.data);
    });

    axios.get("http://localhost:3213/posts").then((response) => {
      setListOfPosts(response.data);
    });
  }, []);

  return (
    <div className="hm-page">
      <div className="hm-page-players">
        <p>List of Players!</p>
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
        <p>The list of posts </p>
        {listOfPosts.map((value, key) => {
          return (
            <div
              className="post"
              key={key}
              onClick={() => {
                navigate(`/post/${value.id}`);
              }}
            >
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
              <div className="body">{value.postText}</div>
              <div className="footer">
                <div className="post-grid-thirds">
                  <div className="footer-col">{value.username}</div>
                  <div className="footer-col">Lik's </div>
                  <div className="footer-col">Del/Ed </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
