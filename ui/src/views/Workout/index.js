import React from "react";
import {
  TextField,
  Button,
  Box,
  Container,
  MenuItem,
  FormControl,
  Grid,
  Typography,
  Paper,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import { createNewWorkout, getAllExercises } from "../../utility/api";

function Workout(props) {
  const navigate = useNavigate();
  const [exercises, setExercises] = useState();
  const [bodyParts, setBodyParts] = useState();
  const [workoutData, setWorkoutData] = useState();
  const [duration, setDuration] = useState();

  //Get all crimes
  useEffect(() => {
    const getAllExerciseOptions = async () => {
      const results = await getAllExercises();
      setExercises(results);
    };
    getAllExerciseOptions();
  }, []);

  useEffect(() => {
    const setBodyPartData = async () => {
      if (exercises) {
        const arr = [];
        exercises.map((exercise) => {
          arr.push(exercise.bodyPart);
        });
        setBodyParts([...new Set(arr)]);
      }
    };
    setBodyPartData();
  }, [exercises]);

  //Function Logic
  const handleChange = (e) => {
    console.log(e);
    setWorkoutData({ ...workoutData, [e.target.name]: e.target.value });
  };
  const handleDurationChange = (e) => {
    console.log(e);
    const min = e.$m.toString();
    const secs = e.$s.toString();
    console.log(secs)
    const dur = min + ":" + secs;
    setDuration(dur)
    setWorkoutData({...workoutData, duration})
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(workoutData)
    const results = await createNewWorkout(workoutData)
    navigate('/myworkouts')
  };

  if (!bodyParts) {
    return <></>;
  }
  if (!exercises) {
    return <></>;
  }
  return (
    <Container maxWidth="sm">
      <Paper elevation={5} sx={{m: 5, p: 3}}>
        <Box textAlign={"center"}>
          <Typography variant="h4">Add a New Workout</Typography>
        </Box>
        <Container component={"form"} onSubmit={handleSubmit}>
          <Box sx={{ mt: 3, mb: 2 }}>
            <FormControl fullWidth>
              <InputLabel id="bodyPartLabel">Select Body Part</InputLabel>
              <Select
                labelId="bodyPartLabel"
                id="demo-simple-select"
                label="Select Body Part"
                name="bodyPart"
                onChange={(e) => handleChange(e)}
              >
                {bodyParts.map((bodyPart) => {
                  return <MenuItem value={bodyPart}>{bodyPart}</MenuItem>;
                })}
              </Select>
            </FormControl>
          </Box>
          <Box>
            <Grid container spacing={1}>
              <Grid item sm={6}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <TimePicker
                    labelId="durationLabel"
                    label="Duration"
                    views={["minutes", "seconds"]}
                    format="mm:ss"
                    onChange={(e) => handleDurationChange(e)}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item sm={6}>
                <Box>
                  <FormControl fullWidth>
                    <InputLabel id="bodyPartLabel">Select Exercise</InputLabel>
                    <Select
                      labelId="bodyPartLabel"
                      id="demo-simple-select"
                      label="Select Body Part"
                      name="exercise"
                      onChange={(e) => handleChange(e)}
                    >
                      {exercises.map((exercise) => {
                        return (
                          <MenuItem value={exercise.name}>
                            {exercise.name}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ mt: 2, mb: 2 }}>
            <TextField
              label="Reps"
              fullWidth
              variant="outlined"
              type="Reps"
              required
              name="reps"
              onChange={(e) => handleChange(e)}
            />
          </Box>
          <Box sx={{ mt: 2, mb: 2 }}>
            <TextField
              label="Weight"
              fullWidth
              variant="outlined"
              type="Reps"
              required
              name="exerciseWeight"
              onChange={(e) => handleChange(e)}
            />
          </Box>
          <Button
            sx={{ mb: 2 }}
            type="submit"
            variant="contained"
            color="primary"
          >
            Add Workout
          </Button>
        </Container>
      </Paper>
    </Container>
  );
}
export default Workout;
