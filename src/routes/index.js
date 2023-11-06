import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Sidebar from "../layouts/sidebar";
import Coworkers from "../views/CoWorker";
import Department from "../views/Department";
import Settings from "../views/Settings";
import Analytic from "../views/Analytic";
const AppRoute = () => {
  return (
    <Router>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Department />} />
          <Route path="/co-worker" element={<Coworkers />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/analytic" element={<Analytic />} />
        </Routes>
      </Sidebar>
    </Router>
  );
};

export default AppRoute;
