import React from "react";
import "./App.css";
import SignupPage from "./Components/SignUpPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Removed Switch
import Login from "./Components/Login";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignupPage />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </Router>
  
  );
}

export default App;
