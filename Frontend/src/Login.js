import React from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission
    navigate('/main'); 
  };

  return (
    <div className="container" style={{ maxWidth: '400px', margin: 'auto', marginTop: '50px' }}>
      <h2 style={{ textAlign: 'center', fontSize: '2rem', color: '#333', marginBottom: '40px', fontFamily: "'Trykker', serif" }}>Welcome to PharmaFriend</h2>
      <h3 style={{ textAlign: 'center', margin: '20px 0', fontWeight: 'normal' }}>Log in/Sign Up</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="inputEmail">Email address</label>
          <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus />
        </div>
        <div className="form-group">
          <label htmlFor="inputPassword">Password</label>
          <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
        </div>
        <div className="checkbox mb-3" style={{ textAlign: 'left' }}>
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <button type="submit" className="btn" style={{ backgroundColor: 'lavender', display: 'block', margin: 'auto' }}>Sign in</button>
        <p className="text-muted" style={{ textAlign: 'center', marginTop: '20px' }}>By Lexi, Napat, Wyatt, and Imran</p>
      </form>
    </div>
  );
}

export default Login;
