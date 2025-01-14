import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";


const OldAppStart = () => {
  const [listOfPosts, setListOfPosts] = useState([]);
  const [listOfPlayers, setListOfPlayers] = useState([]);
  const [listOfRankings, setListOfRankings] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3213/rankings").then((response) => {
      // console.log(response.data);
      console.log("Number of RANKINGS in the DB is : ", response.data.length);
      setListOfRankings(response.data);
    });
  }, []);

  useEffect(() => {
    axios.get("http://localhost:3213/players").then((response) => {
      // console.log(response.data);
      console.log("Number of PLAYERS in the DB is : ", response.data.length);
      setListOfPlayers(response.data);
    });
  }, []);

  useEffect(() => {
    axios.get("http://localhost:3213/posts").then((response) => {
      // console.log(response.data);
      console.log("Number of POSTS in the DB is : ", response.data.length);
      setListOfPosts(response.data);
    });
  }, []);

  return (
    <div className="OldAppStart">
      <p>List of Rankings!</p>
      {listOfRankings.map((value, key) => {
        return (
          <div className="ranking" key={key}>
            <div className="rankinginf">Ranking_ {value.r_name} _with_ {value.r_description} _is in category_ {value.r_category}</div>
          </div>
        );
      })}

    <p>List of Players!</p>
      {listOfPlayers.map((value, key) => {
        return (
          <div className="player" key={key}>
            <div className="playerinfo">Player_ {value.first_name} _living in _ {value.address_city} _has_ {value.points} _poins.</div>
          </div>
        );
      })}

    <p>List of Posts!</p>
      {listOfPosts.map((value, key) => {
        return (
          <div className="post" key={key}>
            <div className="title">{value.title}</div>
            <div className="body">{value.postText}</div>
            <div className="footer">by: {value.username}</div>
          </div>
        );
      })}
    </div>
  );
}

export default OldAppStart;
