// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Listing from './pages/Listing';
import Detail from './pages/Detail';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Listing />} />
        <Route path="/details/:id" element={<Detail />} />
      </Routes>
    </Router>
  );
};

export default App;
