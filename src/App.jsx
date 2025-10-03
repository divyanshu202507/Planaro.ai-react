import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login.jsx";
import Web from "./Web.jsx";
import './App.css';

function App() {
  return (
    <Routes>
      {/* Login page */}
      <Route path="/" element={<Login />} />

      {/* Authenticated app */}
      <Route path="/web/*" element={<Web />} />

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
