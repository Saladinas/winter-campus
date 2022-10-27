import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import Dishes from './views/Dishes/Dishes';
import Dish from './views/Dishes/Dish/Dish';
import NavBar from './components/NavBar/NavBar';
import CssBaseline from '@mui/material/CssBaseline';

function App() {

  return (
    <div>
      <CssBaseline />
      <NavBar />
      <Box sx={{ m: 3 }}>
        <Routes>
          <Route path="/" element={<Dishes />}></Route>
          <Route path="dishes" element={<Dishes />} />
          <Route path="dishes/:id" element={<Dish />} />
        </Routes>
      </Box>
    </div>
  );
}

export default App;
