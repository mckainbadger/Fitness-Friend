import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box} from '@mui/material'
import Detail from '../../components/Detail'
import { exerciseOptions, fetchData } from '../../utility/fetchData'

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const {id} = useParams()

  useEffect (() => {
    const fetchExercisesData = async () => {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com'

      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`,
      exerciseOptions);
      setExerciseDetail(exerciseDetailData)
    }
    fetchExercisesData()
  }, [id]);
  return(
   <Box>
  <Detail exerciseDetail={exerciseDetail}/>
  </Box>
  )
}

export default ExerciseDetail