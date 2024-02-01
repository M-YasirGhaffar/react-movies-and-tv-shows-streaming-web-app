import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import MovieDetail from './components/MovieDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        
        <Route path="*" element={<Dashboard />} />

        <Route path='/movie/:id' element={<MovieDetail/>} />

      </Routes>
    </Router>
  );
}

export default App;
