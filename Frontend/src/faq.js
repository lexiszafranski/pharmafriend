import React from 'react';
import { Link } from 'react-router-dom';

const FAQPage = () => {
  return (
    <>
      
      <header className="jumbotron text-center">
        <h1 style={{ textAlign: 'center', fontSize: '2rem', color: '#333', marginBottom: '40px', fontFamily: "'Trykker', serif" }}>Frequently Asked Questions</h1>
        <p style={{ textAlign: 'center', fonrtSize: '2rem'}}>Need help? We got you covered!</p>
      </header>
      <section className="container">
        <div className="row align-items-start" >
          {/* FAQ Questions and Answers */}
          <div className="col-md-12 text-left feature-box questions" style={{backgroundColor: 'lavender'}}>
            <h2>What is Pharmafriend?</h2>
            <p>Pharmafriend is a medication reminder app that uses a virtual pet to gamify the experience of medications and incentivize users to take their medications on time!</p>
          </div>
          <div className="col-md-12 text-left feature-box questions" style={{backgroundColor: '#48C6F9'}}>
            <h2>How do I use Pharmafriend?</h2>
            <p>Navigate to the login page and create an account. Then click the Add Medication button to log your medication. To feed your pet click the Log Medication button, and bam watch your pet grow!</p>   
          </div>
          <div className="col-md-12 text-left feature-box questions" style={{backgroundColor: 'lavender'}}>
            <h2>How much does Pharmafriend cost?</h2>
            <p>Nothing! Pharmafriend is a free service!</p>
            <div className="col-md-12 text-left feature-box questions" style={{backgroundColor: '#48C6F9'}}>
            <h2>Is my information safe with Pharmafriend?</h2>
            <p>Yes! Your information will be kept private and secure with Pharmafriend. If you ever decide to leave Pharmafriend, your information will be deleted.</p>   
          </div>
          </div>
          
          {/* Repeat for other questions */}
        </div>
      </section>

      <footer className="text-center mt-4" style={{ textAlign: 'center'}}>
        <p>By Lexi, Napat, Wyatt, and Imran</p>
      </footer>
    </>
  );
};

export default FAQPage;
