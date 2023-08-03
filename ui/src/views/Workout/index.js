import React from "react";
import { TextField, Button, Box, Container } from "@mui/material";
  import { useState, useEffect, useRef, useMemo } from "react";
  import { Grid, Typography, Box, TextField, Button } from "@mui/material";
  import {
    getCoordsByAddress,
    getCountyByCoords,
    createNewReport,
    getCountyByAddress,
    getZipByCoords,
  } from "../../utility/api";
  import parse from "autosuggest-highlight/parse";
  import Autocomplete from "@mui/material/Autocomplete";
  import LocationOnIcon from "@mui/icons-material/LocationOn";
  import { debounce } from "@mui/material/utils";
  import { getToken } from "../../utility/utils";
  import InputLabel from "@mui/material/InputLabel";
  import MenuItem from "@mui/material/MenuItem";
  import FormControl from "@mui/material/FormControl";
  import Select from "@mui/material/Select";
  import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
  import { getAllCrimes, getMe } from "../../utility/api";
  
function Workout(props) {
    const [coords, setCoords] = useState(null)
    const [waterways, setWaterways] = useState()
    const [spots, setSpots] = useState()
    const [zoom, setZoom] = useState(4)
    const [spotTypeId, setSpotTypeId] = useState({});
    const [spotModeId, setSpotModeId] = useState({});
    const [spotWaterwayId, setSpotWaterwayId] = useState({});
    const [open, setOpen] = useState(null)
    const [user, setUser] = useState(null)
    const [latitude, setLatitude] = useState("")
    const [longitude, setLongitude] = useState("")
    const [spotData, setSpotData] = useState({
      name: "",
      state: "",
      county: "",
      city: "",
      lon: "",
      lat: "",
      type: "",
      mode: "",
      description: "",
      waterwayId: ""
    });
  
  
    //Get all crimes
    useEffect(() => {
      const getCrimes = async () => {
        const crimes = await getAllCrimes();
        setCrimes(crimes);
        return crimes;
      };
      getCrimes();
    }, []);
  
  
    //Function Logic
    const handleSubmit = async (event) => {
      const coords = await getCoordsByAddress(addressData, cityData, stateData);
      const county = await getCountyByCoords(coords.lat, coords.lon);
      const zipcode = await getZipByCoords(coords.lat, coords.lon);
      

    };
    if (!crimes) {
      return <>Loading Crimes...</>;
    }
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
