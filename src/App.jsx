import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import MovieDetail from './components/MovieDetail';
import TvDetail from './components/TvDetail';

function App() {
  return (

    <>
      <Router>
        <Routes>

          <Route path="/" element={<Dashboard />} />

          <Route path="*" element={<Dashboard />} />

          <Route path='/movie/:id' element={<MovieDetail />} />

          <Route path='/tv/:id' element={<TvDetail />} />

        </Routes>
      </Router>
    </>

  );
}

export default App;
