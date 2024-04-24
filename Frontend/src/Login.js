import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './App.css';

function Login() {
  let navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      setIsLoggedIn(true);
      navigate('/main');
    }
  }, [navigate]);

  function logout() {
    localStorage.removeItem('user');  // This removes the user data from local storage
    navigate('/login', { replace: true });  // Use 'replace' to avoid navigating back to '/main' via browser back button
  }

  
  function isValidInput(input) {
    return /^[a-zA-Z0-9@._-]+$/.test(input);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  

    if (!isValidInput(email)) {
      setError('Invalid input: Please use only valid characters.');
      return;
    }

    axios.post('http://localhost:4000', { email, password })
      .then(response => {
        //console.log(response.data);
        localStorage.setItem('user', JSON.stringify({ userID: response.data.userID }));
        navigate('/main');
      })
      .catch(error => {
        if (error.response && error.response.status === 400) {
          setError('Invalid input: Please use only valid characters in email and password.'); // Specific error for 400
        } else {
          setError('Authentication failed. Please try again.'); // Generic error for other cases
        }
      });
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
