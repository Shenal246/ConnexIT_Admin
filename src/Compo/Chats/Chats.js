import 'animate.css';
import './Chats.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import React, { useState } from 'react';
import Dateandtime from '../date_and_time/Dateandtime';
import { useNavigate } from 'react-router-dom';

const Chats = () => {
  const navigate = useNavigate();
    const handleMouseEnter = () => {
        var messageSpan = document.getElementById('alerts');
  
  // Update the text content of the span
  messageSpan.textContent = ' New 0';
      };
      const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('cntid');
        navigate('/');
    };
 

  return (
    <>
      
      <div className={`main2`}>
        <div className={`com ` } onMouseEnter={handleMouseEnter}>
        <label><i className="bi bi-person-circle"></i> Community <span id='alerts' className='message'>New</span></label>
         
        </div>
      <hr></hr>
      <button className='lg2' onClick={handleLogout}>Log Out</button>
      <Dateandtime/>
      </div>
    </>
  );
};

export default Chats;
