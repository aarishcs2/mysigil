import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children, token }) =>
  token ? children : <Navigate to="/" />;

export default PrivateRoute;
