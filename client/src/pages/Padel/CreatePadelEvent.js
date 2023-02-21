import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";

import InputLabel from "@mui/material/InputLabel";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function CreatePadelEvent() {
  const [eventName, setEventName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [eventType, setEventType] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can use the form data here to submit to the server or do something else
    console.log({
      eventName,
      startDate,
      eventType,
    });
  };

  const handleChange = (event) => {
    setEventType(event.target.value);
  };

  return (
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit}>
        <TextField
          label="Please provide a name for this Event"
          required
          value={eventName}
          fullWidth
          onChange={(event) => setEventName(event.target.value)}
        />
        <TextField
          label="Start Date"
          type="date"
          fullWidth
          margin="normal"
          value={startDate}
          onChange={(event) => setStartDate(event.target.value)}
        />

        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Event Type:</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={eventType}
              label="eventType"
              onChange={handleChange}
            >
              <MenuItem value="Training">Training</MenuItem>
              <MenuItem value="Simple Tournament">Simple Tournament</MenuItem>
              <MenuItem value="Championship">Championship</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Button type="submit" variant="contained" color="primary">
          Save
        </Button>
      </form>
    </Container>
  );
}

export default CreatePadelEvent;
