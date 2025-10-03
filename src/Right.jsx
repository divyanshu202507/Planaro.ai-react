import React from 'react';
import { Link } from "react-router-dom";
import { IoMdPerson } from "react-icons/io";
import { FaTable, FaUserClock } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { IoMdHome } from "react-icons/io";
import { MdHomeWork } from "react-icons/md";
import './Right.css';

const Right = () => {
  return (
    <div className="sidebar">
      <Link to="/web/home" className="option">
        <IoMdHome className="icon" /> Home
      </Link>
      <Link to="/web/students" className="option">
        <IoMdPerson className="icon" /> Students
      </Link>
      <Link to="/web/timetable" className="option">
        <FaTable className="icon" /> Timetable
      </Link>
      <Link to="/web/notice" className="option">
        <IoIosNotifications className="icon" /> Notices
      </Link>
      <Link to="/web/attendance" className="option">
        <FaUserClock className="icon" /> Attendance
      </Link>
      <Link to="/web/assignments" className="option">
        <MdHomeWork className="icon" /> Assignments
      </Link>
    </div>
  );
};

export default Right;
