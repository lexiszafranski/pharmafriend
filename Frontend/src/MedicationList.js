import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function MedicationList() {
  const [name, setName] = useState('');
  const [dose, setDose] = useState('');
  const [start_date, setStartDate] = useState('');
  const [end_date, setEndDate] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your logic for adding medication here
    axios.post('http://localhost:4000/add-medication', {name: name, dose: dose, start_date: start_date, end_date: end_date})
    .then((data) => {
      console.log(data)
    })
    navigate('/main');
  }

  return (
    <div className="medication-form-container" style={{ padding: "20px" }}>
      <h2 style={{ fontSize: "35px", color: 'black', marginBottom: '40px', fontFamily: "'Work Sans', sans-serif", textAlign: 'center' }}>P H A R M A F R I E N D</h2>
      <h3 style={{ textAlign: "center", padding: "0px"}}>A D D</h3>
      <h3 style={{ textAlign: "center", marginBottom: "30px" }}>M E D I C A T I O N</h3>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <label>
          Medication Name: 
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Times Per Day/Doseage: 
          <input type="text" value={dose} onChange={(e) => setDose(e.target.value)} />
        </label>
        <label>
          Start Date: 
          <input type="date" value={start_date} onChange={(e) => setStartDate(e.target.value)} />
        </label>
        <label>
          End Date: 
          <input type="date" value={end_date} onChange={(e) => setEndDate(e.target.value)} />
        </label>
        <button type="submit" className="button-54" style={{ marginTop: "20px" }}>Add Medication</button>
      </form>
    </div>
  );
}
