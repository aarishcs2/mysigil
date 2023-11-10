import React, { useContext } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Sidebar from "../../layouts/sidebar";
import Home from "../../views/Home";
import PrivateRoute from "./PrivateRoute";
import { privateRoutes } from "./routes";
import { AuthContext } from "../../context/AuthContext";

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
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default AppRoute;
