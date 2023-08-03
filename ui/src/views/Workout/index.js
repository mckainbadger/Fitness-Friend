

import React from "react";
import { TextField, Button, Box, Container } from "@mui/material";

const Workout = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
  };

  return (
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit}>
        <Box sx={{ mb: 2 }}>
          <TextField
            label="First Name"
            fullWidth
            variant="outlined"
            required
            name="Workout"
          />
        </Box>
        <Box sx={{ mb: 2 }}>
          <TextField
            label="Last Name"
            fullWidth
            variant="outlined"
            required
            name="lastName"
          />
        </Box>
        <Box sx={{ mb: 2 }}>
          <TextField
            label="Email"
            fullWidth
            variant="outlined"
            type="email"
            required
            name="email"
          />
        </Box>
        <Box sx={{ mb: 2 }}>
          <TextField
            label="Password"
            fullWidth
            variant="outlined"
            type="password"
            required
            name="password"
          />
        </Box>
        <Button type="submit" variant="contained" color="primary">
          Add Workout
        </Button>
      </form>
    </Container>
  );
};

export default Workout
