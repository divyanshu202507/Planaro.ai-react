import React from 'react';
import './Body.css';
import Right from './Right.jsx';
import { Routes, Route, Navigate } from 'react-router-dom';

import Home from './pages/Home';
import Students from './pages/Students';
import Timetable from './pages/Timetable';
import Notice from './pages/Notice';
import Attendance from './pages/Attendance';
import Assignments from './pages/Assignments';

const Body = () => {
  return (
    <div className="body">
      <Right />  {/* Sidebar */}

      <div className="content-area">
        <Routes>
          <Route path="/" element={<Navigate to="home" />} />
          <Route path="home" element={<Home />} />
          <Route path="students" element={<Students />} />
          <Route path="timetable" element={<Timetable />} />
          <Route path="notice" element={<Notice />} />
          <Route path="attendance" element={<Attendance />} />
          <Route path="assignments" element={<Assignments />} />
        </Routes>
      </div>
    </div>
  );
};

export default Body;
