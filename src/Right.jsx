import React from 'react'
import { Routes, Route, Link } from "react-router-dom"
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


        <Link to="/home" style={linkStyle}><div id='div1' className='options'>Home</div></Link>
        <Link to="/students" style={linkStyle}><div id='div2' className='options'>Students</div></Link>
        <Link to="/timetable" style={linkStyle}><div id='div3' className='options'>My Time Table</div></Link>
        <Link to="/notice" style={linkStyle}><div id='div4' className='options'>Notice</div></Link>
        <Link to="/attendance" style={linkStyle}><div id='div5' className='options'>Attendance</div></Link>
        <Link to="/assignments" style={linkStyle}><div id='div6' className='options'>Assignments</div></Link>

      </div>



    </>
  )
}

export default Right;
