import React from 'react';
import svg from './assets/logout.svg'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { TbLogout } from "react-icons/tb";

import './Top.css';

const Top = () => {
  return (
    <>
      <header>
        <div><h1>Planora.ai</h1></div>
        <div className='right-section'>
          <h4>Admin</h4>
          <button className='logoutbtn'> <h3>Logout</h3><TbLogout className='logout'/></button>
          </div>
      </header>

    </>
  )
}

export default Top 