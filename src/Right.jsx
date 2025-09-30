import React from 'react'
import { Routes, Route, Link } from "react-router-dom";

import { IoMdPerson } from "react-icons/io";
import { FaTable } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { IoMdHome } from "react-icons/io";
import { MdHomeWork } from "react-icons/md";
import { FaUserClock } from "react-icons/fa";
import './Right.css'

const Right = () => {

  const linkStyle = {
    textDecoration: 'none',
    color: 'inherit',
    padding: '0px',
    display: 'block'
  };

  return (
    <>
      <div className='right'>


        <Link to="/home" style={linkStyle}><div id='div1' className='options'> <IoMdHome    className='icon'  /> Home </div></Link>
        <Link to="/students" style={linkStyle}><div id='div2' className='options'><IoMdPerson  className='icon'  /> Students </div></Link>
        <Link to="/timetable" style={linkStyle}><div id='div3' className='options'><FaTable  id='timeicon1' className='icon' />Time-Table  </div></Link>
        <Link to="/notice" style={linkStyle}><div id='div4' className='options'><IoIosNotifications id='timeicon4'  className='icon' />Notice </div></Link>
        <Link to="/attendance" style={linkStyle}><div id='div5' className='options'><FaUserClock id='timeicon2' className='icon'  />Attendance  </div></Link>
        <Link to="/assignments" style={linkStyle}><div id='div6' className='options'><MdHomeWork id='timeicon3' className='icon'  />Assignments </div></Link>

      </div>



    </>
  )
}

export default Right;
