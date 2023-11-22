import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Check if user is present in local storage
    const storedUser = localStorage.getItem('user');

    if (storedUser && username === storedUser && password === localStorage.getItem('password')) {
      navigate("/Homepage");
      alert("Login successful");
    } else {
      alert('Invalid username or password');
    }

    // Set user information in local storage
    localStorage.setItem('user', username);
    localStorage.setItem('password', password);
  };

  return (
    <div>
      <h2>Login</h2>
      <div>
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginForm;