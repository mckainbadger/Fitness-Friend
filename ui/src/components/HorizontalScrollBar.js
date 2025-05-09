import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import BodyPart from "./BodyPart";
import RightArrowIcon from "../assets/icons/right-arrow.png";
import LeftArrowIcon from "../assets/icons/left-arrow.png";
import { useContext } from "react";

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const HorizontalScrollBar = ({ data, bodyParts, setBodyPart }) => {
 


  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      <Grid container justifyContent='center' alignItems='center' mt={4}>
        {data.map((item) => (
          <Box
            key={item.id || item}
            itemId={item.id || item}
            title={item.id || item}
            m="0 40px"
          >
            <BodyPart
              item={item}
              bodyParts={bodyParts}
              setBodyPart={setBodyPart}
            />
          </Box>
        ))}
      </Grid>
    </ScrollMenu>
  );
};

export default HorizontalScrollBar;
