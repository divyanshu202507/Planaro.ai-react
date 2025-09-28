import React from 'react';
import svg from './assets/logout.svg'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import './Top.css';

const Top = () => {
  return (
    <>
      <header>
        <div><h1>Planora.ai</h1></div>
        <div className='right-section'>
          <h4>Admin</h4>
          <button> <h3>Logout</h3> <img src={svg} alt="icon" className='img1' /></button>
          </div>
      </header>

    </>
  )
}

export default Top 