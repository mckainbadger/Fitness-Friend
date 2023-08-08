import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import HeroBannerImage from "../assets/icons/banner.png";
const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: 4,
        ml: 4,
      }}
      postition="relative"
    >
      <Typography color="#FF2625" fontWeight="600" fontSize="26px">
        Fitness Friend
      </Typography>
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
      >
        Sweat, Smile, <br /> and Repeat
      </Typography>
      {/* <Typography fontSize="20px"
 lineHeight={10}>
  Check out the most effective exerecises
 </Typography> */}
      <Typography
        fontWeight={600}
        color="#FF2625"
        sx={{
          opacity: "0.1",
          display: { lg: "block", xs: "none" },
          fontSize: "200px",
        }}
      >
        Exercise
      </Typography>
      <img src={HeroBannerImage} alt="banner" className="hero-banner-img" style={{width: '30%', height: '60%'}}/>
    </Box>
  );
};

export default HeroBanner;
