import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import MedicationList from './MedicationList';
import Login from './Login'
import FAQ from './faq'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/add-medication" element={<MedicationList />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </Router>
  );
}

export default App;
