import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [listOfPlayers, setListOfPlayers] = useState([]);
  const [listOfPosts, setListOfPosts] = useState([]);
  const navigate = useNavigate();
  
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
      console.log("Number of posts in the DB is : ", response.data.length);
      setListOfPosts(response.data);
    });
  }, []);

  return (
    <div className='hm-page'>
    <div className='hm-page-players'>
      <p>List of Players!</p>
      {listOfPlayers.map((value, key) => {
        return (
          <div className="player_h" key={key}>
            <div className="playerinfo_H">Player_ {value.first_name} _living in _ {value.address_city} _has_ {value.points} _poins.</div>
          </div>
        );
      })}
      <br />
    </div>

    <div className='hm-page-posts'>
      <p>The list of posts </p>
      {listOfPosts.map((value, key) => {
        return (
          <div className="post" key={key} onClick= {() =>{navigate(`/post/${value.id}`)}}>
            <div className="title" key={key}>{value.title}</div>
            <div className="body" >{value.postText}</div>
            <div className="footer" >{value.username}</div>
          </div>
        );
      })}
    </div>
    </div>
  )
}

export default Home;
