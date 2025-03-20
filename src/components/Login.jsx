import axios from 'axios'
import React, { useState, useContext } from 'react'
import { UserContext } from '../context-demo/MyContext'

const Login = () => {
  // State for the login form
  const [user, setUser] = useState({ username: '', password: '' });

  // Access the context value for userLogin and setUserLogin
  const userCtx = useContext(UserContext);

  // Handle changes in form input
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((values) => ({ ...values, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('Form submitted with:', user);

    // Save user data in sessionStorage
    sessionStorage.setItem("usernameSS", user.username);

    // Update the user login state using context
    userCtx.setUserLogin(user.username);

    // Send the user data to the backend
    axios.post('http://localhost:3000/users', user)
      .then((response) => {
        console.log('User added successfully:', response);
      })
      .catch((error) => {
        console.error('Error adding user:', error);
      });
  };

  return (
    <div>
      {/* Display user login from context */}
      <div>Context with user: {userCtx.userLogin}</div>

      {/* Login form */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            value={user.username}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={user.password}
            onChange={handleChange}
          />
        </div>

        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default Login;
