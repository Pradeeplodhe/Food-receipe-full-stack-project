// src/PrivateRoute.js
import React from "react";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token data");
     console.log(token)
  return token ? children : <Navigate to="/loginData"
     
  />;
};

export default PrivateRoute;