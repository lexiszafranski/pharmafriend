import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import dog1 from './images/1.png';
import dog2 from './images/2.png';
import dog3 from './images/3.png';
import dog4 from './images/4.png';
import dog5 from './images/5.png';

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

  const handleFAQ = () => {
    navigate('/faq'); // Use the correct route for logout
  };


  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: 'auto', textAlign: 'center', backgroundColor: '#D1D8DE' }}>
       <button onClick={handleLogout} className="button-54" style={{ position: 'absolute', top: 20, right: 165 }}>Logout</button>
       <button onClick={handleFAQ} className="button-54" style={{ position: 'absolute', top: 20, right: 20 }}>FAQ Page</button>
       <h2 style={{ fontSize: "35px", color: 'black', marginBottom: '40px', fontFamily: "'Work Sans', sans-serif" }}>P H A R M A F R I E N D</h2>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <div style={{ flex: 1, marginRight: '20px' }}>
          <h2 style={{ marginBottom: '15px', fontFamily: "Trykker, serif" }}>Your Medication List</h2>
          {/* Placeholder for medication list */}
          <div style={{ marginBottom: '20px' }}>
            <Link to="/add-medication" className="button-54" style={{ textDecoration: 'none', color: 'black' }}>Add Medication</Link>
          </div>
        </div>
        <div style={{ flex: 2, textAlign: 'center' }}>
          <img src={dogImages[points]} alt="Dog" style={{ width: '100%', maxWidth: '600px', height: 'auto', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }} />
        </div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <button onClick={logMedication} className="button-54" style={{ backgroundColor: 'pink', color: 'white', padding: '10px 20px', fontSize: '16px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Log Medication</button>
      </div>
    </div>
  );
}
