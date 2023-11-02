import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Department from "../views/Department";
import Coworkers from "../views/CoWorker";
import Sidebar from "../layouts/sidebar";
import Settings from "../views/Settings";
const AppRoute = () => {
  return (
    <Router>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Department />} />
          <Route path="/co-worker" element={<Coworkers />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Sidebar>
    </Router>
  );
};

export default AppRoute;
