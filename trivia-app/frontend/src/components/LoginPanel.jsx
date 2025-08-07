import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPanel() {
  const inputRef = useRef(null);
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', 
        body: JSON.stringify(inputs),
      });

      const data = await response.json();
      console.log('Response from backend:', data);

      if (response.ok) {
        alert(`Welcome!`);
        navigate('/dashboard'); 
      } else {
        alert(`Error: ${data.error || "Login failed"}`);
      }
    } catch (error) {
      console.error('Error sending form data:', error);
    }
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }));
  };

  return (
    <div className="main-container">
      <div className="login-container">
        <h2>Login to Trivia</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="email" placeholder="Email" value={inputs.email || ""} onChange={handleChange} />
          <input type="password" name="password" placeholder="Password" value={inputs.password || ""} onChange={handleChange} />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPanel;