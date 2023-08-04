import React from 'react'
import {Box, Stack, Typography, Button} from '@mui/material'
import HeroBannerImage from "../assets/icons/banner.png"
const HeroBanner = () => {
  return(
    <Box sx= {{
      mt: {lg: '150px', xs: "50px"},
      ml: {sm: '50px'}
    }} postition= "relative" p="20px">
 <Typography color='#FF2625' fontWeight="600" fontSize="26px">
  Fitness Friend
 </Typography>
 <Typography fontWeight={700}
 sx= {{fontSize: {lg: '44px', xs: '30px'}}}>
  Sweat, Smile, <br/> and Repeat
 </Typography>
 <Typography fontSize="20px"
 lineHeight={20} mb={0}>
  Check out the most effective exerecises
 </Typography>
 <Button variant="contained" color="error"
 href="#exercises">Explore Exercises</Button>
    <Typography fontWeight={600} color="#FF2625" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
      Exercise
    </Typography>
 <img src={HeroBannerImage} alt='banner' className='hero-banner-img'/>
 </Box>
)}

export default HeroBanner