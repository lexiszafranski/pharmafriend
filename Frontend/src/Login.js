import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './App.css';

function Login() {
  let navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:4000', {email, password})
      .then((data) => {
        console.log(data);
        setEmail('');
        setPassword('');
      });
    navigate('/main');
  };

  const handleFAQ = () => {
    navigate('/faq'); // Use the correct route for FAQ
  };

  return (
    <div style={{ backgroundColor: "#D1D8DE", minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>  {/* This will set the background for the entire page view */}
      <div className="container" style={{ maxWidth: '400px', margin: 'auto', marginTop: '50px' }}>
        <button onClick={handleFAQ} className="button-54" style={{ position: 'absolute', top: 20, right: 80 }}>FAQ Page</button>
        <h2 style={{ textAlign: 'center', fontSize: "35px", color: 'black', marginBottom: '40px', fontFamily: "'Work Sans', sans-serif" }}> P H A R M A F R I E N D</h2>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div aria-label="Orange and tan hamster running in a metal wheel" role="img" className="wheel-and-hamster" style={{ display: 'flex', justifyContent: 'center'}}>
            <div className="wheel"></div>
            <div className="hamster">
              <div className="hamster__body">
                <div className="hamster__head">
                  <div className="hamster__ear"></div>
                  <div className="hamster__eye"></div>
                  <div className="hamster__nose"></div>
                </div>
                <div className="hamster__limb hamster__limb--fr"></div>
                <div className="hamster__limb hamster__limb--fl"></div>
                <div className="hamster__limb hamster__limb--br"></div>
                <div className="hamster__limb hamster__limb--bl"></div>
                <div className="hamster__tail"></div>
              </div>
            </div>
            <div className="spoke"></div>
          </div>
        </div>
        <h3 style={{ fontSize: "23px", textAlign: 'center', margin: '30px 0', fontWeight: '550', fontFamily: "'Work Sans', sans-serif", padding: '50px 10px 10px 10px' }}>LOG IN OR SIGN UP</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <p htmlFor="inputEmail"style ={{fontSize: "18px", textAlign: 'center', fontWeight: '0', fontFamily: "'Seaweed Script', cursive", padding: '0px 0px 40px 0px'}}>email</p>
            <input type="email" id="inputEmail" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="Email address" required autoFocus />
          </div>
          <div className="form-group">
            <label htmlFor="inputPassword">Password</label>
            <input type="password" id="inputPassword" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="Password" required />
          </div>
          <div className="checkbox mb-3" style={{ textAlign: 'left' }}>
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button type="submit" className="button-54" style={{ backgroundColor: 'lavender', display: 'block', margin: 'auto' }}>Sign in</button>
          <p className="text-muted" style={{ textAlign: 'center', marginTop: '20px' }}>By Lexi, Napat, Wyatt, and Imran</p>
        </form>
      </div>
    </div>
  );
}

export default Login;
