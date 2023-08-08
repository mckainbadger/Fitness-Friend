import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { getMyWorkouts } from "../../utility/api";
import { Button, Link, Typography } from "@mui/material";

const MyWorkouts = () => {
  const [rows, setRows] = useState();

  useEffect(() => {
    const getMyWorkoutData = async () => {
      const results = await getMyWorkouts();
      console.log(results);
      setRows(results);
    };
    getMyWorkoutData();
  }, []);

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "bodyPart",
      headerName: "Body Part",
      width: 150,
      editable: true,
    },
    {
      field: "exercise",
      headerName: "Exercise",
      width: 450,
      editable: true,
    },
    {
      field: "exerciseWeight",
      headerName: "Weight",
      width: 110,
      editable: true,
      renderCell: (params) => <>{params.value} lbs</>,
    },
    {
      field: "reps",
      headerName: "Repetitions",
      width: 110,
      editable: true,
    },
    {
      field: "duration",
      headerName: "Duration",
      width: 110,
      editable: true,
      renderCell: (params) => <>{params.value}0</>,
    },
  ];

  if (!rows) {
    return <></>;
  }

  return (
    <>
      <Box display={"flex"} justifyContent={"center"} alignContent={"center"}>
        <Box
          sx={{
            height: 400,
            width: "80%",
            m: 5,
            bgcolor: "whitesmoke",
            border: 0.5,
            borderRadius: 1,
          }}
        >
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            pageSizeOptions={[5]}
            checkboxSelection
            disableRowSelectionOnClick
          />
        </Box>
      </Box>
      <Box display={'flex'} justifyContent={'center'} mt={-2} mb={3}>
        <Link href="/workout">
          <Button variant="contained">Add New Workout</Button>
        </Link>
      </Box>
    </>
  );
};

export default MyWorkouts;
