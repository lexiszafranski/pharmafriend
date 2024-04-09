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
    <div style={{ backgroundColor: "#D1D8DE", minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <div className="container" style={{ maxWidth: '400px', width: '100%', textAlign: 'center' }}>
        <button onClick={handleFAQ} className="button-54" style={{ position: 'absolute', top: 20, right: 20 }}>FAQ Page</button>
        <h2 style={{ fontSize: "35px", color: 'black', marginBottom: '40px', fontFamily: "'Work Sans', sans-serif" }}>P H A R M A F R I E N D</h2>
        <div className="wheel-and-hamster" style={{ margin: 'auto' }}>
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
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <p htmlFor="inputEmail" style={{ fontSize: "15px", fontFamily: "'Trykker', serif", marginBottom: '10px' }}>EMAIL</p>
          <input type="email" id="inputEmail" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="Email Address" required autoFocus style={{ width: '100%', textAlign: 'center' }} />
          <p htmlFor="inputPassword" style={{ fontSize: "15px", fontFamily: "'Trykker', serif", marginBottom: '10px' }}>PASSWORD</p>
          <input type="password" id="inputPassword" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="Password" required style={{ width: '100%', textAlign: 'center'}} />
         <div className="checkbox mb-3" style={{ alignSelf: 'flex-start',fontFamily: "'Work Sans', sans-serif", padding: '15px 0px 15px 0px' }}>
            <label>
              <input type="checkbox" value="remember-me" /> remember me
            </label>
          </div>
          <button type="submit" className="button-54" style={{ backgroundColor: 'lavender', display: 'block', width: '100%' }}>Sign in</button>
          <p className="text-muted" style={{ marginTop: '20px' }}>By Lexi, Napat, Wyatt, and Imran</p>
        </form>
      </div>
    </div>
  );
}

export default Login;
