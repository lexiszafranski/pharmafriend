import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import dog1 from './images/dog1.png';
import dog2 from './images/dog2.png';
import dog3 from './images/dog3.png';
import dog4 from './images/dog4.png';
import dog5 from './images/dog5.png';

const dogImages = [dog1, dog2, dog3, dog4, dog5];

export default function MainPage() {
  const [points, setPoints] = useState(0);
  let navigate = useNavigate(); // Correctly placed useNavigate

  const logMedication = () => {
    if (window.confirm("Are you sure?")) {
      setPoints((prevPoints) => (prevPoints + 1) % dogImages.length);
    }
  };

  const handleLogout = () => {
    navigate('/'); // Use the correct route for logout
  };

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: 'auto', textAlign: 'center', backgroundColor: 'lavender' }}>
       <button onClick={handleLogout} style={{ position: 'absolute', top: 20, right: 20 }}>Logout</button>
       <h1 style={{ textAlign: 'center', fontSize: '2rem', color: '#333', marginBottom: '40px', fontFamily: "'Trykker', serif" }}>PharmaFriend</h1>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <div style={{ flex: 1, marginRight: '20px' }}>
          <h2 style={{ marginBottom: '15px' }}>Your Medication List</h2>
          {/* Placeholder for medication list */}
          <div style={{ marginBottom: '20px' }}>
            <Link to="/add-medication" style={{ textDecoration: 'none', color: '#007bff' }}>Add Medication</Link>
          </div>
        </div>
        <div style={{ flex: 2, textAlign: 'center' }}>
          <img src={dogImages[points]} alt="Dog" style={{ width: '100%', maxWidth: '600px', height: 'auto', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }} />
        </div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <button onClick={logMedication} style={{ backgroundColor: '#007bff', color: 'white', padding: '10px 20px', fontSize: '16px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Log Medication</button>
      </div>
    </div>
  );
}
