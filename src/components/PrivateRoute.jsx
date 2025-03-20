import React from 'react'
import { useNavigate ,Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
  
  const isAuthenticated = false;
  
    return (
        isAuthenticated ? children : <Navigate to='/' />
  )
}

export default PrivateRoute