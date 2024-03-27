import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import MedicationList from './MedicationList';
import Login from './Login'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/add-medication" element={<MedicationList />} />
      </Routes>
    </Router>
  );
}

export default App;
