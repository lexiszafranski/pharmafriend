import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const FAQPage = () => {
  let navigate = useNavigate();

  const handleLogin = () => {
    navigate('/'); // Navigate to the homepage or the intended route
  };

  return (
    <>
      <header className="jumbotron text-center">
        <button onClick={handleLogin} style={{ position: 'absolute', top: 20, right: 80 }}>Login</button>
        <h1 style={{ textAlign: 'center', fontSize: '2rem', color: '#333', marginBottom: '40px', fontFamily: "'Trykker', serif" }}>Frequently Asked Questions</h1>
        <p style={{ textAlign: 'center', fontSize: '1rem' }}>Need help? We got you covered!</p>
      </header>
      <section className="container">
        <div className="row align-items-start">
          <div className="col-md-12 text-left feature-box questions" style={{ backgroundColor: 'lavender' }}>
            <h2>What is Pharmafriend?</h2>
            <p>Pharmafriend is a medication reminder app that uses a virtual pet to gamify the experience of taking medications and incentivize users to be consistent with their medication schedules.</p>
          </div>
          <div className="col-md-12 text-left feature-box questions" style={{ backgroundColor: '#48C6F9' }}>
            <h2>How do I use Pharmafriend?</h2>
            <p>Navigate to the login page and create an account. Then click the Add Medication button to log your medication. To feed your pet click the Log Medication button, and watch your pet grow!</p>
          </div>
          <div className="col-md-12 text-left feature-box questions" style={{ backgroundColor: 'lavender' }}>
            <h2>How much does Pharmafriend cost?</h2>
            <p>Pharmafriend is a free service!</p>
          </div>
          <div className="col-md-12 text-left feature-box questions" style={{ backgroundColor: '#48C6F9' }}>
            <h2>Is my information safe with Pharmafriend?</h2>
            <p>Yes! Your information is kept private and secure. If you decide to leave Pharmafriend, your information will be deleted.</p>
          </div>
        </div>
      </section>
      <footer className="text-center mt-4">
        <p>By Lexi, Napat, Wyatt, and Imran</p>
      </footer>
    </>
  );
};

export default FAQPage;
