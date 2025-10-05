// src/PrivateRoute.js
import { useState,useEffect } from "react";
import React from "react";
import { Navigate } from "react-router-dom";
import BlueNotification from "../../Notification/BlueNotification";
import AlertNotification from "../../Notification/AlertNotification";
const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token data");
     console.log(token)

  // return token ? children :<Navigate to="/loginData" /> && <AlertNotification show={true} text=" Login First than use the page"/>
  
  // return token ? children :<AlertNotification show={true} text=" Login First than use the page
        // "/>

const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    if (!token) {
      // 2 second बाद redirect
      const timer = setTimeout(() => setRedirect(true), 2000);
      return () => clearTimeout(timer);
    }
  }, [token]);

  if (token) return children;

  return (
    <>
      <AlertNotification show={true} text="Login First then use the page" />
      {redirect && <Navigate to="/loginData" replace />}
    </>
  );



};

export default PrivateRoute;