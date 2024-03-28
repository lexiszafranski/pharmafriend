import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function MedicationList() {
  const [name, setName] = useState('');
  const [dose, setDose] = useState('');
  const [start_date, setStartDate] = useState('');
  const [end_date, setEndDate] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your logic for adding medication here
    navigate('/main'); // Optionally navigate back to the main page
  };

  return (
    <div className="medication-form-container" style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>Add Medication</h1>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <label>
          Medication Name: 
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Dose: 
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
        <button type="submit" style={{ marginTop: "20px" }}>Add Medication</button>
      </form>
    </div>
  );
}
