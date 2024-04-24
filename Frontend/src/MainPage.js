import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import dog1 from './images/1.png';
import dog2 from './images/2.png';
import dog3 from './images/3.png';
import dog4 from './images/4.png';
import dog5 from './images/5.png';

const dogImages = [dog1, dog2, dog3, dog4, dog5];

export default function MainPage() {
  const [points, setPoints] = useState(0);
  const [medications, setMedications] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Get the user ID from local storage
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.userID) {
      axios.get(`http://localhost:4000/get-medications?userID=${user.userID}`)
        .then((response) => {
          // Set the medications state with the fetched data
          setMedications(response.data);
        })
        .catch((error) => {
          console.error('Error fetching medications:', error);
          // Redirect to login if there's an error fetching medications
          navigate('/login');
        });
    } else {
      // Redirect to login if there's no user in local storage
      navigate('/login');
    }
  }, [navigate]);
  const logMedication = () => {
    if (window.confirm("Are you sure?")) {
      setPoints((prevPoints) => (prevPoints + 1) % dogImages.length);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('user'); // Clear session data
    navigate('/'); // Use the correct route for logout
  };

  const handleFAQ = () => {
    navigate('/faq'); // Use the correct route for logout
  };

  function formatDate(dateString) {
    if (!dateString) return ''; // Guard clause for invalid or empty date strings
    
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateString);
    const timeZoneOffset = date.getTimezoneOffset() * 60000; // Convert offset to milliseconds
    const localTime = new Date(date.getTime() - timeZoneOffset);

    return localTime.toLocaleDateString(undefined, options);
  }

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: 'auto', textAlign: 'center', backgroundColor: '#D1D8DE' }}>
       <button onClick={handleLogout} className="button-54" style={{ position: 'absolute', top: 20, right: 165 }}>Logout</button>
       <button onClick={handleFAQ} className="button-54" style={{ position: 'absolute', top: 20, right: 20 }}>FAQ Page</button>
       <h2 style={{ fontSize: "35px", color: 'black', marginBottom: '40px', fontFamily: "'Work Sans', sans-serif" }}>P H A R M A F R I E N D</h2>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <div style={{ flex: 1, marginRight: '20px' }}>
          <h2 style={{ marginBottom: '15px', fontFamily: "Trykker, serif" }}>Your Medication List</h2>
          {medications.map((med) => (
            <div key={med.medicine_id} style={{ background: '#D1D8DE', padding: '10px', margin: '10px 0', borderRadius: '5px' }}>
            <p><strong>Name:</strong> {med.prescriptionName}</p>
              <p><strong>Dose:</strong> {med.timesPerDay}</p>
              <p><strong>Start Date:</strong> {formatDate(med.startDate)}</p>
              <p><strong>End Date:</strong> {formatDate(med.endDate)}</p>
          </div>
        ))}
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
