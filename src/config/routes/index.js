import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Sidebar from "../../layouts/sidebar";
import Home from "../../views/Home";
import PrivateRoute from "./PrivateRoute";
import { privateRoutes } from "./routes";

const AppRoute = () => {
  const token = localStorage.getItem("access_token");
  return (
    <Router>
      <Routes>
        <Route
          path="/dashboard/*"
          element={
            <PrivateRoute
              token={token}
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
