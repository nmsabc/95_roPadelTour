import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/material";

const SavePadelGameInfo = () => {
  const [team1Name, setTeam1Name] = useState("");
  const [team2Name, setTeam2Name] = useState("");
  const [set1Team1Score, setSet1Team1Score] = useState("");
  const [set1Team2Score, setSet1Team2Score] = useState("");
  const [set2Team1Score, setSet2Team1Score] = useState("");
  const [set2Team2Score, setSet2Team2Score] = useState("");
  const [set3Team1Score, setSet3Team1Score] = useState("");
  const [set3Team2Score, setSet3Team2Score] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can add your logic to submit the form data to the server
    console.log({
      Game: {
        Team1: {
          Team: team1Name,
          set1Team1Score,
          set2Team1Score,
          set3Team1Score,
        },
        Team2: {
          Team: team2Name,
          set1Team2Score,
          set2Team2Score,
          set3Team2Score,
        },
      },
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Container className="t1">
      <TextField
        label="Team 1 Name"
        value={team1Name}
        onChange={(event) => setTeam1Name(event.target.value)}
      />

      <TextField
        label="Set 1 Team 1 Score"
        type="number"
        value={set1Team1Score}
        onChange={(event) => setSet1Team1Score(event.target.value)}
      />

      <TextField
        label="Set 2 Team 1 Score"
        type="number"
        value={set2Team1Score}
        onChange={(event) => setSet2Team1Score(event.target.value)}
      />

      <TextField
        label="Set 3 Team 1 Score"
        type="number"
        value={set3Team1Score}
        onChange={(event) => setSet3Team1Score(event.target.value)}
      />
      </Container>
      <br />
      <Container className="t2">
        <TextField
          label="Team 2 Name"
          value={team2Name}
          onChange={(event) => setTeam2Name(event.target.value)}
        />
        <TextField
          label="Set 1 Team 2 Score"
          type="number"
          value={set1Team2Score}
          onChange={(event) => setSet1Team2Score(event.target.value)}
        />

        <TextField
          label="Set 2 Team 2 Score"
          type="number"
          value={set2Team2Score}
          onChange={(event) => setSet2Team2Score(event.target.value)}
        />

        <TextField
          label="Set 3 Team 2 Score"
          type="number"
          value={set3Team2Score}
          onChange={(event) => setSet3Team2Score(event.target.value)}
        />
      </Container>
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
};

export default SavePadelGameInfo;
