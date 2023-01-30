import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [listOfPosts, setListOfPosts] = useState([]);
  const [listOfPlayers, setListOfPlayers] = useState([]);
  const [listOfRankings, setListOfRankings] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3213/rankings").then((response) => {
      // console.log(response.data);
      console.log("Number of rankings in the DB is : ", response.data.length);
      setListOfRankings(response.data);
    });
  }, []);

  return (
    <div className="App">
      <p>FE works !</p>
      {listOfRankings.map((value, key) => {
        return (
          <div className="ranking">
            <div className="name">Ranking_ {value.r_name} _with_ {value.r_description} _is in category_ {value.r_category}</div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
