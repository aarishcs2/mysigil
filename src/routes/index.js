import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Department from "../views/Department";
import Coworkers from "../views/CoWorker";
import Sidebar from "../layouts/sidebar";
const AppRoute = () => {
  return (
    <Router>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Department />} />
          <Route path="/co-worker" element={<Coworkers />} />
        </Routes>
      </Sidebar>
    </Router>
  );
};

export default AppRoute;
