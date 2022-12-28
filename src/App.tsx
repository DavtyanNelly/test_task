import React from "react";
import { withLayout } from "./layout/Layout";
import Organization from "./pages/Organization/Organization";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OrganizationDetail from "./pages/OrganizationDetail/OrganizationDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Organization />} />
        <Route path="/:idOrganization" element={<OrganizationDetail />} />
      </Routes>
    </Router>
  );
}

export default withLayout(App);
