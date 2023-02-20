import React, { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';




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

  return (
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit}>
        <TextField
          label="Event Name"
          fullWidth
          margin="normal"
          value={eventName}
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
        <TextField
          select
          label="Event Type"
          fullWidth
          margin="normal"
          value={eventType}
          onChange={(event) => setEventType(event.target.value)}
        >
          <option value="Training">Training</option>
          <option value="Simple Tournament">Simple Tournament</option>
          <option value="Championship">Championship</option>
        </TextField>
        <Button type="submit" variant="contained" color="primary">
          Save
        </Button>
      </form>
    </Container>
  );
};

export default CreatePadelEvent;
