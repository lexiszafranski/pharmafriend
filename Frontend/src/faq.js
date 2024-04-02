import React from 'react';
import { Link } from 'react-router-dom';

const FAQPage = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          {/* Ensure the logo path is correct */}
          <img src="/path-to-logo/logo.png" alt="Home" width="72" height="72" />
        </Link>
        <div className="navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/faq">Help Using PharmaFriend</Link>
            </li>
            {/* Add other navigation links */}
          </ul>
        </div>
      </nav>
      
      <header className="jumbotron text-center">
        <h1>Frequently Asked Questions</h1>
        <p>Need help? We got you covered!</p>
      </header>

      <section className="container">
        <div className="row align-items-start">
          {/* FAQ Questions and Answers */}
          <div className="col-md-12 text-left feature-box questions">
            <h2>Question 1</h2>
            <p>Answer 1</p>
          </div>
          {/* Repeat for other questions */}
        </div>
      </section>

      <footer className="text-center mt-4">
        <p>By Lexi, Napat, Wyatt, and Imran</p>
      </footer>
    </>
  );
};

export default FAQPage;
