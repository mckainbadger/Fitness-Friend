import React from "react";
import { useEffect, useState } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import HorizontalScrollBar from './HorizontalScrollBar';
import { exerciseOptions, fetchData } from "../utility/fetchData";

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);
  // const [exercise, setExercise] = useState([]);

  useEffect(() => {
      const fetchExercisesData = async () => {
        const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

        setBodyParts(['all', ...bodyPartsData]);
      };

      fetchExercisesData();
    }, []);

  //Search for exercise
  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );
      console.log("exercise data:", exercisesData)
      //filter through data for specific exercises
      const searchedExercises = exercisesData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
      );
      //Clear the search
      setSearch("");
      setExercises(searchedExercises);
    }
  };

  return (
    <Stack alignItems={"center"} mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="50px"
        textAlign="center"
      >
        Awesome Exercises You Should Know <br />
        <Box position="relative" mb="72px">
          <TextField
            sx={{
              input: {
                fontWeight: "700",
                border: "none",
                borderRadius: "4px",
              },
              width: { lg: "1170px", xs: "350px" },
              backgroundColor: "#fff",
            }}
            id="outlined-basic"
            label="Search Exercises"
            variant="outlined"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <Button
            classname="search-btn"
            sx={{
              bgcolor: "#ff2625",
              color: "#fff",
              textTransform: "None",
              width: { lg: "175px", xs: "14px" },
              fontSize: { lg: "20px", xs: "14px" },
              height: "56px",
              position: "absolute",
            }}
            onClick={handleSearch}
          >
            Search
          </Button>
        </Box>
        <Box sx={{position: "relative", width: "100%" , p: "20px"}}>
          <HorizontalScrollBar data={bodyParts} />
        </Box>
      </Typography>
    </Stack>
  );
};

export default SearchExercises;
