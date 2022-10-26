import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App-winter-campus">
      <Link to={'dish'}>
        <button type="button">Dishes</button>
      </Link>
      <Link to={'dish/pierogi'}>
        <button type="button">Pierogi</button>
      </Link>
      <Routes>
        <Route path="/" element={<div>Home</div>}></Route>
        <Route path="/dish" element={<div>Dishes</div>} />
        <Route path="/dish/:id" element={<div>Pierogi</div>} />
      </Routes>
    </div>
  );
}

export default App;
