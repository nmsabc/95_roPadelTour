import { useState, useEffect } from "react";
// import { makeStyles } from "@material-ui/core/styles";

import Button from "@mui/material/Button";

import InputLabel from "@mui/material/InputLabel";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

// const useStyles = makeStyles((theme) => ({
//   formControl: {
//     margin: theme.spacing(1),
//     minWidth: 120,
//   },
//   selectEmpty: {
//     marginTop: theme.spacing(2),
//   },
// }));

export default function SavePadelTeamInfo() {
  // const classes = useStyles();
  const [players, setPlayers] = useState([]);
  const [selectedPlayer1, setSelectedPlayer1] = useState("");
  const [selectedPlayer2, setSelectedPlayer2] = useState("");

  // Fetch players from the database on component mount
  useEffect(() => {
    async function fetchPlayers() {
      const response = await fetch("/api/players");
      const data = await response.json();
      setPlayers(data);
    }
    fetchPlayers();
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();

    // Create a new team with the selected players
    const response = await fetch("/api/teams", {
      method: "POST",
      body: JSON.stringify({
        player1: selectedPlayer1,
        player2: selectedPlayer2,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      console.log("Team created successfully!");
    } else {
      console.error("Failed to create team");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormControl className="formControlPlayer1">
        <InputLabel id="player1-label">Player 1</InputLabel>
        <Select
          labelId="player1-label"
          id="player1-select"
          value={selectedPlayer1}
          onChange={(event) => setSelectedPlayer1(event.target.value)}
        >
          {players.map((player) => (
            <MenuItem key={player.id} value={player.id}>
              {player.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl className="formControlPlayer2">
        <InputLabel id="player2-label">Player 2</InputLabel>
        <Select
          labelId="player2-label"
          id="player2-select"
          value={selectedPlayer2}
          onChange={(event) => setSelectedPlayer2(event.target.value)}
        >
          {players.map((player) => (
            <MenuItem key={player.id} value={player.id}>
              {player.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button variant="contained" color="primary" type="submit">
        Create Team
      </Button>
    </form>
  );
}
