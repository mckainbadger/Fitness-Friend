import React from "react";
import { Grid, Box, Link } from "@mui/material";
import Logo from "../assets/icons/logo.png";
import { useState } from "react";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const Navbar = () => {
  const [curPage, setCurPage] = useState(undefined);
  return (
    <Box >
      <Grid container >
        <Grid item mr={-5}>
          <Link href="/">
            <img src={Logo} alt="logo" style={{width: '50%', marginLeft: '10%', marginTop: '10%'}} />
          </Link>
        </Grid>
        <Grid item mt={6.5} mr={5}>
          <Link
            href="/myworkouts"
            style={{ textDecoration: "none", color: "#3A1212" }}
          >
            <FitnessCenterIcon fontSize="large" />
          </Link>
        </Grid>
        <Grid item mt={6.5}>
          <Link
            href="/workout"
            style={{ textDecoration: "none", color: "#3A1212" }}
          >
            <AddCircleIcon fontSize="large"  />
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Navbar;
