import React, { useContext } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Sidebar from "../../layouts/sidebar";
import Home from "../../views/Home";
import PrivateRoute from "./PrivateRoute";
import { SignatureBuilderPrivateRoute, privateRoutes } from "./routes";
import { AuthContext } from "../../context/AuthContext";
import ForgotPassword from "../../views/ForgotPassword";
import MailChecking from "../../views/CheckingMail";
import ResetPassword from "../../views/ResetPassword";
import SignatureBuilder from "../../views/SignatureBuilder";

const AppRoute = () => {
  const { token } = useContext(AuthContext);
  const access_token = localStorage.getItem("access_token") ?? token;
  return (
    <Router>
      <Routes>
        <Route
          path="/dashboard/*"
          element={
            <PrivateRoute
              token={access_token}
              children={
                <Sidebar>
                  <Routes>
                    {privateRoutes.map(({ path, element }) => {
                      return <Route path={path} element={element} />;
                    })}
                  </Routes>
                </Sidebar>
              }
            />
          }
        />
        <Route
          path="/SignatureBuilder/*"
          element={
            <PrivateRoute
              token={access_token}
              children={
                <Routes>
                  {SignatureBuilderPrivateRoute.map(({ path, element }) => {
                    return <Route path={path} element={element} />;
                  })}
                </Routes>
              }
            />
          }
        />

        <Route path="/" element={<Home />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/mail-checking" element={<MailChecking />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
      </Routes>
    </Router>
  );
};

export default AppRoute;
