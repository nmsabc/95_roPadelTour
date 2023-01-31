import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";

function Home() {
  const [listOfPlayers, setListOfPlayers] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3213/players").then((response) => {
      // console.log(response.data);
      console.log("Number of PLAYERS in the DB is : ", response.data.length);
      setListOfPlayers(response.data);
    });
  }, []);

  return (
    <div>
      <p>welcome home </p>
      <p>List of Players!</p>
      {listOfPlayers.map((value, key) => {
        return (
          <div className="player_h" key={key}>
            <div className="playerinfo_H">Player_ {value.first_name} _living in _ {value.address_city} _has_ {value.points} _poins.</div>
          </div>
        );
      })}
    </div>
  )
}

export default Home;
