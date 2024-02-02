import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import MovieDetail from './components/MovieDetail';
import TvDetail from './components/TvDetail';
import SeasonDetail from './components/SeasonDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        
        <Route path="*" element={<Dashboard />} />

        <Route path='/movie/:id' element={<MovieDetail/>} />

        <Route path='/tv/:id' element={<TvDetail />} />

        <Route path="/tv/:tvId/season/:seasonNumber" element={<SeasonDetail />} />

      </Routes>
    </Router>
  );
}

export default App;
