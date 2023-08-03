
import {Route, Routes } from 'react-router-dom'
import {Box } from '@mui/material'
import './App.css';
import ExerciseDetail from './views/ExerciseDetails';
import Home from './views/Home';
import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';
import Workout from './views/Workout'
import Login from './views/Login'

function App() {  
  return (
    <Box width= "400px" sx={{ width: { xl: "1488"}}} m="auto">
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/exercise/:id" element={<ExerciseDetail />} />
      <Route path="/workout" element={<Workout/>} />
      <Route path="/login" element={<Login/>} />
    </Routes>
    <Footer/>
    </Box>
  );
}

export default App;
