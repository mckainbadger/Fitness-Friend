import React from "react";
import { Box, Stack, Typography, Grid } from "@mui/material";
import Icon from "../assets/icons/gym.png";

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  return (
    <>
        <Grid
          item
          type="button"
          className="bodyPart-card"
          margin={3}
          onClick={() => {
            setBodyPart(item);
            window.scrollTo({ top: 1500, left: 100, behavior: "smooth" });
          }}
        >
          <img
            src={Icon}
            alt="dumbbell"
            style={{ width: "80px", height: "80px" }}
          />
          <Typography
            fontSize="24px"
            fontWeight="bold"
            color="#3A1212"
            textTransform="capitalize"
          >
            {item}
          </Typography>
        </Grid>
    </>
  );
};

export default BodyPart;
