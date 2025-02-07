import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Account from "./components/AccountTable";
import AccountPage from "./components/AccountDetails";
// import Dashboard from "./components/Dashboard"; // Assuming you have a Dashboard component

function App() {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ marginLeft: "100px", padding: "10px", width: "100%" }}>
          <Routes>
            {/* Redirect from "/" to "/accounts" */}
            <Route path="/" element={<Navigate to="/accounts" />} />

            {/* <Route path="/" element={<Dashboard />} /> */}
            <Route path="/accounts" element={<Account />} />
            <Route path="/accounts/:org_id" element={<AccountPage />} />
            {/* Add more routes here */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

