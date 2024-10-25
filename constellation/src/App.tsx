import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation, useNavigate, Navigate } from "react-router-dom";
import Login from "./pages/Login"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
      </Routes>

    </Router>
  );
}

export default App;
