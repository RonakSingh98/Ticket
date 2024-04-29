import React, { useState } from 'react';
import './login.css';

const SignUp = ({ setShowLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setname] = useState('');
  const [phone, setphone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your sign-up logic goes here
    console.log('Sign-up submitted:', { email, password ,name ,phone });
  };

  return (
    <div className="form-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
      <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setname(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        
        <div className="form-group">
          <label>Contact No.:</label>
          <input
            type="password"
            value={phone}
            onChange={(e) => setphone(e.target.value)}
            required
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <p>Already have an account? <span onClick={() => setShowLogin(true)}>Log In</span></p>
    </div>
  );
};

const Login = ({ setShowLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your login logic goes here
    console.log('Login submitted:', { email, password });
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <span onClick={() => setShowLogin(false)}>Sign Up</span></p>
    </div>
  );
};

const App1 = () => {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="App1">
      {showLogin ? <Login setShowLogin={setShowLogin} /> : <SignUp setShowLogin={setShowLogin} />}
    </div>
  );
};

export default App1;
