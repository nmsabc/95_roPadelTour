import React, { useState } from "react";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@material-ui/core";

const CreatePadelChampionship = () => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [category, setCategory] = useState("");
  const [city, setCity] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [venue, setVenue] = useState("");
  const [prize1stPlace, setPrize1stPlace] = useState("");

  const handleNameChange = (e) => setName(e.target.value);
  const handleGenderChange = (e) => setGender(e.target.value);
  const handleCategoryChange = (e) => setCategory(e.target.value);
  const handleCityChange = (e) => setCity(e.target.value);
  const handleStartDateChange = (e) => setStartDate(e.target.value);
  const handleEndDateChange = (e) => setEndDate(e.target.value);
  const handleVenueChange = (e) => setVenue(e.target.value);
  const handlePrize1stPlaceChange = (e) => setPrize1stPlace(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    // use the form values to create a new PadelChampionship record
    const newChampionship = {
      name,
      gender,
      category,
      city,
      startDate,
      endDate,
      venue,
      prize1stPlace,
    };
    console.log(newChampionship);
    // clear the form inputs
    setName("");
    setGender("");
    setCategory("");
    setCity("");
    setStartDate("");
    setEndDate("");
    setVenue("");
    setPrize1stPlace("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Name"
        value={name}
        onChange={handleNameChange}
        required
        fullWidth
      />
      <FormControl fullWidth required>
        <InputLabel>Gender</InputLabel>
        <Select value={gender} onChange={handleGenderChange}>
          <MenuItem value="male">Male</MenuItem>
          <MenuItem value="female">Female</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth required>
        <InputLabel>Category</InputLabel>
        <Select value={category} onChange={handleCategoryChange}>
          <MenuItem value="Male 1">Male 1</MenuItem>
          <MenuItem value="Male 2">Male 2</MenuItem>
        </Select>
      </FormControl>
      <TextField
        label="City"
        value={city}
        onChange={handleCityChange}
        required
        fullWidth
      />
      <TextField
        label="Start Date"
        type="date"
        value={startDate}
        onChange={handleStartDateChange}
        InputLabelProps={{ shrink: true }}
        required
        fullWidth
      />
      <TextField
        label="End Date"
        type="date"
        value={endDate}
        onChange={handleEndDateChange}
        InputLabelProps={{ shrink: true }}
        required
        fullWidth
      />
      <TextField
        label="Venue"
        value={venue}
        onChange={handleVenueChange}
        required
        fullWidth
      />
      <TextField
        label="Prize 1st Place"
        type="number"
        value={prize1stPlace}
        onChange={handlePrize1stPlaceChange}
        required
        fullWidth
      />
      <Button variant="contained" color="primary" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default CreatePadelChampionship;
