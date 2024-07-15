import './Navbar.css';
import conexlog from './Src/ConnexIT.png';
import React, { useState, useEffect } from 'react';
import click2 from './Src/click.wav';

const Navbar = () => {
  const [audio2, setAudio2] = useState(null);
  const [isUserInteracted, setIsUserInteracted] = useState(false);

  useEffect(() => {
    const audio = new Audio(click2);
    setAudio2(audio);

    const handleUserInteraction = () => {
      setIsUserInteracted(true);
    };

    window.addEventListener('click', handleUserInteraction);
    window.addEventListener('keydown', handleUserInteraction);

    return () => {
      window.removeEventListener('click', handleUserInteraction);
      window.removeEventListener('keydown', handleUserInteraction);
    };
  }, []);

  const handleMouseEnter = () => {
    if (isUserInteracted && audio2) {
      audio2.currentTime = 0; // Restart the audio if already playing
      audio2.play();
    }
  };
  const handleMouseClick = () => {
    if (isUserInteracted && audio2) {
      audio2.currentTime = 0; // Restart the audio if already playing
      audio2.play();
    }
  };

  const click1 = () => {
    document.getElementById('viewblog').style.zIndex = '-1000';
    document.getElementById('viewblog').style.width = '0%';
    document.getElementById('sv5').style.display = 'none';
    document.getElementById('frm1').style.width = '35%';
    document.getElementById('frmblog').style.zIndex = '-1000';
    document.getElementById('frmblog').style.width = '0%';
    document.getElementById('frm1').style.zIndex = '1000';
    document.getElementById('frm2').style.zIndex = '-10';
    document.getElementById('frm2').style.width = '0%';
    document.getElementById('view1').style.zIndex = '-1000';
    document.getElementById('view1').style.width = '0%';
    document.getElementById('viewmsg').style.zIndex = '-1000';
    document.getElementById('viewmsg').style.width = '0%';
    document.getElementById('rdmsg').style.zIndex = '-1000';
    document.getElementById('rdmsg').style.width = '0%';
    document.getElementById('view2').style.zIndex = '-1000';
    document.getElementById('view2').style.width = '0%';
    document.getElementById('viewContactUs').style.zIndex = '-1000';
    document.getElementById('viewContactUs').style.width = '0%';
    document.getElementById('viewNewUpcoming').style.zIndex = '-1000';
    document.getElementById('viewNewUpcoming').style.width = '0%';
    document.getElementById('viewViewUpcoming').style.zIndex = '-1000';
    document.getElementById('viewViewUpcoming').style.width = '0%';
    document.getElementById('viewUpcomingRegistered').style.zIndex = '-1000';
    document.getElementById('viewUpcomingRegistered').style.width = '0%';
    document.getElementById('viewReadContactUs').style.zIndex = '-1000';
    document.getElementById('viewReadContactUs').style.width = '0%';
  }
  const clickblog = () => {
    document.getElementById('viewblog').style.zIndex = '-1000';
    document.getElementById('viewblog').style.width = '0%';
    document.getElementById('sv5').style.display = 'none';
    document.getElementById('frmblog').style.width = '35%';
    document.getElementById('frmblog').style.zIndex = '1000';
    document.getElementById('frm1').style.width = '0%';
    document.getElementById('frm1').style.zIndex = '-10';
    document.getElementById('frm2').style.zIndex = '-10';
    document.getElementById('frm2').style.width = '0%';
    document.getElementById('view1').style.zIndex = '-1000';
    document.getElementById('view1').style.width = '0%';
    document.getElementById('viewmsg').style.zIndex = '-1000';
    document.getElementById('viewmsg').style.width = '0%';
    document.getElementById('rdmsg').style.zIndex = '-1000';
    document.getElementById('rdmsg').style.width = '0%';
    document.getElementById('view2').style.zIndex = '-1000';
    document.getElementById('view2').style.width = '0%';
    document.getElementById('viewContactUs').style.zIndex = '-1000';
    document.getElementById('viewContactUs').style.width = '0%';
    document.getElementById('viewNewUpcoming').style.zIndex = '-1000';
    document.getElementById('viewNewUpcoming').style.width = '0%';
    document.getElementById('viewViewUpcoming').style.zIndex = '-1000';
    document.getElementById('viewViewUpcoming').style.width = '0%';
    document.getElementById('viewUpcomingRegistered').style.zIndex = '-1000';
    document.getElementById('viewUpcomingRegistered').style.width = '0%';
    document.getElementById('viewReadContactUs').style.zIndex = '-1000';
    document.getElementById('viewReadContactUs').style.width = '0%';

  }
  const click4 = () => {
    document.getElementById('viewblog').style.zIndex = '-1000';
    document.getElementById('viewblog').style.width = '0%';
    document.getElementById('sv5').style.display = 'none';
    document.getElementById('rdmsg').style.zIndex = '-1000';
    document.getElementById('rdmsg').style.width = '0%';
    document.getElementById('frm1').style.width = '0%';
    document.getElementById('frmblog').style.zIndex = '-1000';
    document.getElementById('frmblog').style.width = '0%';
    document.getElementById('frm1').style.zIndex = '-1000';
    document.getElementById('frm2').style.zIndex = '1000';
    document.getElementById('frm2').style.width = '35%';
    document.getElementById('view1').style.zIndex = '-1000';
    document.getElementById('view1').style.width = '0%';
    document.getElementById('viewmsg').style.zIndex = '-1000';
    document.getElementById('viewmsg').style.width = '0%';
    document.getElementById('view2').style.zIndex = '-1000';
    document.getElementById('view2').style.width = '0%';
    document.getElementById('viewContactUs').style.zIndex = '-1000';
    document.getElementById('viewContactUs').style.width = '0%';
    document.getElementById('viewNewUpcoming').style.zIndex = '-1000';
    document.getElementById('viewNewUpcoming').style.width = '0%';
    document.getElementById('viewViewUpcoming').style.zIndex = '-1000';
    document.getElementById('viewViewUpcoming').style.width = '0%';
    document.getElementById('viewUpcomingRegistered').style.zIndex = '-1000';
    document.getElementById('viewUpcomingRegistered').style.width = '0%';
    document.getElementById('viewReadContactUs').style.zIndex = '-1000';
    document.getElementById('viewReadContactUs').style.width = '0%';

  }
  const click5 = () => {
    document.getElementById('sv5').style.display = 'none';
    document.getElementById('viewblog').style.zIndex = '-1000';
    document.getElementById('viewblog').style.width = '0%';
    document.getElementById('frm1').style.width = '0%';
    document.getElementById('frm1').style.zIndex = '-1000';
    document.getElementById('frm2').style.zIndex = '-1000';
    document.getElementById('frm2').style.width = '0%';
    document.getElementById('view1').style.zIndex = '1000';
    document.getElementById('view1').style.width = '65%';
    document.getElementById('viewmsg').style.zIndex = '-1000';
    document.getElementById('viewmsg').style.width = '0%';
    document.getElementById('rdmsg').style.zIndex = '-1000';
    document.getElementById('rdmsg').style.width = '0%';
    document.getElementById('frmblog').style.zIndex = '-1000';
    document.getElementById('frmblog').style.width = '0%';
    document.getElementById('view2').style.zIndex = '-1000';
    document.getElementById('view2').style.width = '0%';
    document.getElementById('viewContactUs').style.zIndex = '-1000';
    document.getElementById('viewContactUs').style.width = '0%';
    document.getElementById('viewNewUpcoming').style.zIndex = '-1000';
    document.getElementById('viewNewUpcoming').style.width = '0%';
    document.getElementById('viewViewUpcoming').style.zIndex = '-1000';
    document.getElementById('viewViewUpcoming').style.width = '0%';
    document.getElementById('viewUpcomingRegistered').style.zIndex = '-1000';
    document.getElementById('viewUpcomingRegistered').style.width = '0%';
    document.getElementById('viewReadContactUs').style.zIndex = '-1000';
    document.getElementById('viewReadContactUs').style.width = '0%';

  }
  const click6 = () => {
    document.getElementById('sv5').style.display = 'none';
    document.getElementById('viewblog').style.zIndex = '-1000';
    document.getElementById('viewblog').style.width = '0%';
    document.getElementById('frm1').style.width = '0%';

    document.getElementById('frm1').style.zIndex = '-1000';
    document.getElementById('frm2').style.zIndex = '-1000';
    document.getElementById('frm2').style.width = '0%';
    document.getElementById('view2').style.zIndex = '1000';
    document.getElementById('view2').style.width = '65%';
    document.getElementById('frmblog').style.zIndex = '-1000';
    document.getElementById('frmblog').style.width = '0%';
    document.getElementById('view1').style.zIndex = '-1000';
    document.getElementById('view1').style.width = '0%';
    document.getElementById('rdmsg').style.zIndex = '-1000';
    document.getElementById('rdmsg').style.width = '0%';
    document.getElementById('viewmsg').style.zIndex = '-1000';
    document.getElementById('viewmsg').style.width = '0%';
    document.getElementById('viewContactUs').style.zIndex = '-1000';
    document.getElementById('viewContactUs').style.width = '0%';
    document.getElementById('viewNewUpcoming').style.zIndex = '-1000';
    document.getElementById('viewNewUpcoming').style.width = '0%';
    document.getElementById('viewViewUpcoming').style.zIndex = '-1000';
    document.getElementById('viewViewUpcoming').style.width = '0%';
    document.getElementById('viewUpcomingRegistered').style.zIndex = '-1000';
    document.getElementById('viewUpcomingRegistered').style.width = '0%';
    document.getElementById('viewReadContactUs').style.zIndex = '-1000';
    document.getElementById('viewReadContactUs').style.width = '0%';
  }

  const clickvblog = () => {
    document.getElementById('sv5').style.display = 'none';
    document.getElementById('viewblog').style.zIndex = '-1000';
    document.getElementById('viewblog').style.width = '0%';
    document.getElementById('frm1').style.width = '0%';

    document.getElementById('frm1').style.zIndex = '-1000';
    document.getElementById('frm2').style.zIndex = '-1000';
    document.getElementById('frm2').style.width = '0%';
    document.getElementById('view2').style.zIndex = '-1000';
    document.getElementById('view2').style.width = '0%';
    document.getElementById('viewblog').style.zIndex = '1000';
    document.getElementById('viewblog').style.width = '65%';
    document.getElementById('frmblog').style.zIndex = '-1000';
    document.getElementById('frmblog').style.width = '0%';
    document.getElementById('view1').style.zIndex = '-1000';
    document.getElementById('view1').style.width = '0%';
    document.getElementById('rdmsg').style.zIndex = '-1000';
    document.getElementById('rdmsg').style.width = '0%';
    document.getElementById('viewmsg').style.zIndex = '-1000';
    document.getElementById('viewmsg').style.width = '0%';
    document.getElementById('viewContactUs').style.zIndex = '-1000';
    document.getElementById('viewContactUs').style.width = '0%';
    document.getElementById('viewNewUpcoming').style.zIndex = '-1000';
    document.getElementById('viewNewUpcoming').style.width = '0%';
    document.getElementById('viewViewUpcoming').style.zIndex = '-1000';
    document.getElementById('viewViewUpcoming').style.width = '0%';
    document.getElementById('viewUpcomingRegistered').style.zIndex = '-1000';
    document.getElementById('viewUpcomingRegistered').style.width = '0%';
    document.getElementById('viewReadContactUs').style.zIndex = '-1000';
    document.getElementById('viewReadContactUs').style.width = '0%';
  }

  const clickhome = () => {
    document.getElementById('sv5').style.display = 'block';

    document.getElementById('frm1').style.width = '0%';
    document.getElementById('viewblog').style.zIndex = '-1000';
    document.getElementById('viewblog').style.width = '0%';
    document.getElementById('frm1').style.zIndex = '-1000';
    document.getElementById('frm2').style.zIndex = '-1000';
    document.getElementById('frm2').style.width = '0%';
    document.getElementById('view2').style.zIndex = '-1000';
    document.getElementById('view2').style.width = '0%';
    document.getElementById('frmblog').style.zIndex = '-1000';
    document.getElementById('frmblog').style.width = '0%';
    document.getElementById('view1').style.zIndex = '-1000';
    document.getElementById('view1').style.width = '0%';
    document.getElementById('rdmsg').style.zIndex = '-1000';
    document.getElementById('rdmsg').style.width = '0%';
    document.getElementById('viewmsg').style.zIndex = '-1000';
    document.getElementById('viewmsg').style.width = '0%';
    document.getElementById('viewContactUs').style.zIndex = '-1000';
    document.getElementById('viewContactUs').style.width = '0%';
    document.getElementById('viewNewUpcoming').style.zIndex = '-1000';
    document.getElementById('viewNewUpcoming').style.width = '0%';
    document.getElementById('viewViewUpcoming').style.zIndex = '-1000';
    document.getElementById('viewViewUpcoming').style.width = '0%';
    document.getElementById('viewUpcomingRegistered').style.zIndex = '-1000';
    document.getElementById('viewUpcomingRegistered').style.width = '0%';
    document.getElementById('viewReadContactUs').style.zIndex = '-1000';
    document.getElementById('viewReadContactUs').style.width = '0%';
  }
  const clickmsg = () => {
    document.getElementById('sv5').style.display = 'none';

    document.getElementById('frm1').style.width = '0%';
    document.getElementById('viewblog').style.zIndex = '-1000';
    document.getElementById('viewblog').style.width = '0%';
    document.getElementById('frm1').style.zIndex = '-1000';
    document.getElementById('frm2').style.zIndex = '-1000';
    document.getElementById('frm2').style.width = '0%';
    document.getElementById('view2').style.zIndex = '-1000';
    document.getElementById('view2').style.width = '0%';
    document.getElementById('frmblog').style.zIndex = '-1000';
    document.getElementById('frmblog').style.width = '0%';
    document.getElementById('view1').style.zIndex = '-1000';
    document.getElementById('view1').style.width = '0%';
    document.getElementById('viewmsg').style.zIndex = '1000';
    document.getElementById('viewmsg').style.width = '65%';
    document.getElementById('rdmsg').style.zIndex = '-1000';
    document.getElementById('rdmsg').style.width = '0%';
    document.getElementById('viewContactUs').style.zIndex = '-1000';
    document.getElementById('viewContactUs').style.width = '0%';
    document.getElementById('viewNewUpcoming').style.zIndex = '-1000';
    document.getElementById('viewNewUpcoming').style.width = '0%';
    document.getElementById('viewViewUpcoming').style.zIndex = '-1000';
    document.getElementById('viewViewUpcoming').style.width = '0%';
    document.getElementById('viewUpcomingRegistered').style.zIndex = '-1000';
    document.getElementById('viewUpcomingRegistered').style.width = '0%';
    document.getElementById('viewReadContactUs').style.zIndex = '-1000';
    document.getElementById('viewReadContactUs').style.width = '0%';
  }

  const clickContactUs = () => {
    document.getElementById('sv5').style.display = 'none';

    document.getElementById('frm1').style.width = '0%';
    document.getElementById('viewblog').style.zIndex = '-1000';
    document.getElementById('viewblog').style.width = '0%';
    document.getElementById('frm1').style.zIndex = '-1000';
    document.getElementById('frm2').style.zIndex = '-1000';
    document.getElementById('frm2').style.width = '0%';
    document.getElementById('view2').style.zIndex = '-1000';
    document.getElementById('view2').style.width = '0%';
    document.getElementById('frmblog').style.zIndex = '-1000';
    document.getElementById('frmblog').style.width = '0%';
    document.getElementById('view1').style.zIndex = '-1000';
    document.getElementById('view1').style.width = '0%';
    document.getElementById('viewmsg').style.zIndex = '-1000';
    document.getElementById('viewmsg').style.width = '0%';
    document.getElementById('rdmsg').style.zIndex = '-1000';
    document.getElementById('rdmsg').style.width = '0%';
    document.getElementById('viewContactUs').style.zIndex = '1000';
    document.getElementById('viewContactUs').style.width = '65%';
    document.getElementById('viewNewUpcoming').style.zIndex = '-1000';
    document.getElementById('viewNewUpcoming').style.width = '0%';
    document.getElementById('viewViewUpcoming').style.zIndex = '-1000';
    document.getElementById('viewViewUpcoming').style.width = '0%';
    document.getElementById('viewUpcomingRegistered').style.zIndex = '-1000';
    document.getElementById('viewUpcomingRegistered').style.width = '0%';
    document.getElementById('viewReadContactUs').style.zIndex = '-1000';
    document.getElementById('viewReadContactUs').style.width = '0%';
  }

  const clickReadContactUs = () => {
    document.getElementById('sv5').style.display = 'none';

    document.getElementById('frm1').style.width = '0%';
    document.getElementById('viewblog').style.zIndex = '-1000';
    document.getElementById('viewblog').style.width = '0%';
    document.getElementById('frm1').style.zIndex = '-1000';
    document.getElementById('frm2').style.zIndex = '-1000';
    document.getElementById('frm2').style.width = '0%';
    document.getElementById('view2').style.zIndex = '-1000';
    document.getElementById('view2').style.width = '0%';
    document.getElementById('frmblog').style.zIndex = '-1000';
    document.getElementById('frmblog').style.width = '0%';
    document.getElementById('view1').style.zIndex = '-1000';
    document.getElementById('view1').style.width = '0%';
    document.getElementById('viewmsg').style.zIndex = '-1000';
    document.getElementById('viewmsg').style.width = '0%';
    document.getElementById('rdmsg').style.zIndex = '-1000';
    document.getElementById('rdmsg').style.width = '0%';
    document.getElementById('viewContactUs').style.zIndex = '-1000';
    document.getElementById('viewContactUs').style.width = '0%';
    document.getElementById('viewNewUpcoming').style.zIndex = '-1000';
    document.getElementById('viewNewUpcoming').style.width = '0%';
    document.getElementById('viewViewUpcoming').style.zIndex = '-1000';
    document.getElementById('viewViewUpcoming').style.width = '0%';
    document.getElementById('viewUpcomingRegistered').style.zIndex = '-1000';
    document.getElementById('viewUpcomingRegistered').style.width = '0%';
    document.getElementById('viewReadContactUs').style.zIndex = '1000';
    document.getElementById('viewReadContactUs').style.width = '65%';
  }

  const clickrmsg = () => {
    document.getElementById('sv5').style.display = 'none';

    document.getElementById('frm1').style.width = '0%';

    document.getElementById('frm1').style.zIndex = '-1000';
    document.getElementById('frm2').style.zIndex = '-1000';
    document.getElementById('frm2').style.width = '0%';
    document.getElementById('frmblog').style.zIndex = '-1000';
    document.getElementById('frmblog').style.width = '0%';
    document.getElementById('view2').style.zIndex = '-1000';
    document.getElementById('view2').style.width = '0%';
    document.getElementById('viewblog').style.zIndex = '-1000';
    document.getElementById('viewblog').style.width = '0%';
    document.getElementById('view1').style.zIndex = '-1000';
    document.getElementById('view1').style.width = '0%';
    document.getElementById('viewmsg').style.zIndex = '-1000';
    document.getElementById('viewmsg').style.width = '0%';
    document.getElementById('rdmsg').style.zIndex = '1000';
    document.getElementById('rdmsg').style.width = '65%';
    document.getElementById('viewContactUs').style.zIndex = '-1000';
    document.getElementById('viewContactUs').style.width = '0%';
    document.getElementById('viewNewUpcoming').style.zIndex = '-1000';
    document.getElementById('viewNewUpcoming').style.width = '0%';
    document.getElementById('viewViewUpcoming').style.zIndex = '-1000';
    document.getElementById('viewViewUpcoming').style.width = '0%';
    document.getElementById('viewUpcomingRegistered').style.zIndex = '-1000';
    document.getElementById('viewUpcomingRegistered').style.width = '0%';
    document.getElementById('viewReadContactUs').style.zIndex = '-1000';
    document.getElementById('viewReadContactUs').style.width = '0%';
  }

  const clickNewUpcoming = () => {
    document.getElementById('sv5').style.display = 'none';

    document.getElementById('frm1').style.width = '0%';
    document.getElementById('viewblog').style.zIndex = '-1000';
    document.getElementById('viewblog').style.width = '0%';
    document.getElementById('frm1').style.zIndex = '-1000';
    document.getElementById('frm2').style.zIndex = '-1000';
    document.getElementById('frm2').style.width = '0%';
    document.getElementById('view2').style.zIndex = '-1000';
    document.getElementById('view2').style.width = '0%';
    document.getElementById('frmblog').style.zIndex = '-1000';
    document.getElementById('frmblog').style.width = '0%';
    document.getElementById('view1').style.zIndex = '-1000';
    document.getElementById('view1').style.width = '0%';
    document.getElementById('viewmsg').style.zIndex = '-1000';
    document.getElementById('viewmsg').style.width = '0%';
    document.getElementById('rdmsg').style.zIndex = '-1000';
    document.getElementById('rdmsg').style.width = '0%';
    document.getElementById('viewContactUs').style.zIndex = '-1000';
    document.getElementById('viewContactUs').style.width = '0%';
    document.getElementById('viewNewUpcoming').style.zIndex = '1000';
    document.getElementById('viewNewUpcoming').style.width = '35%';
    document.getElementById('viewViewUpcoming').style.zIndex = '-1000';
    document.getElementById('viewViewUpcoming').style.width = '0%';
    document.getElementById('viewUpcomingRegistered').style.zIndex = '-1000';
    document.getElementById('viewUpcomingRegistered').style.width = '0%';
    document.getElementById('viewReadContactUs').style.zIndex = '-1000';
    document.getElementById('viewReadContactUs').style.width = '0%';
  }

  const clickViewUpcoming = () => {
    document.getElementById('sv5').style.display = 'none';

    document.getElementById('frm1').style.width = '0%';
    document.getElementById('viewblog').style.zIndex = '-1000';
    document.getElementById('viewblog').style.width = '0%';
    document.getElementById('frm1').style.zIndex = '-1000';
    document.getElementById('frm2').style.zIndex = '-1000';
    document.getElementById('frm2').style.width = '0%';
    document.getElementById('view2').style.zIndex = '-1000';
    document.getElementById('view2').style.width = '0%';
    document.getElementById('frmblog').style.zIndex = '-1000';
    document.getElementById('frmblog').style.width = '0%';
    document.getElementById('view1').style.zIndex = '-1000';
    document.getElementById('view1').style.width = '0%';
    document.getElementById('viewmsg').style.zIndex = '-1000';
    document.getElementById('viewmsg').style.width = '0%';
    document.getElementById('rdmsg').style.zIndex = '-1000';
    document.getElementById('rdmsg').style.width = '0%';
    document.getElementById('viewContactUs').style.zIndex = '-1000';
    document.getElementById('viewContactUs').style.width = '0%';
    document.getElementById('viewNewUpcoming').style.zIndex = '-1000';
    document.getElementById('viewNewUpcoming').style.width = '0%';
    document.getElementById('viewViewUpcoming').style.zIndex = '1000';
    document.getElementById('viewViewUpcoming').style.width = '65%';
    document.getElementById('viewUpcomingRegistered').style.zIndex = '-1000';
    document.getElementById('viewUpcomingRegistered').style.width = '0%';
    document.getElementById('viewReadContactUs').style.zIndex = '-1000';
    document.getElementById('viewReadContactUs').style.width = '0%';
  }

  const clickViewRegistered = () => {
    document.getElementById('sv5').style.display = 'none';

    document.getElementById('frm1').style.width = '0%';
    document.getElementById('viewblog').style.zIndex = '-1000';
    document.getElementById('viewblog').style.width = '0%';
    document.getElementById('frm1').style.zIndex = '-1000';
    document.getElementById('frm2').style.zIndex = '-1000';
    document.getElementById('frm2').style.width = '0%';
    document.getElementById('view2').style.zIndex = '-1000';
    document.getElementById('view2').style.width = '0%';
    document.getElementById('frmblog').style.zIndex = '-1000';
    document.getElementById('frmblog').style.width = '0%';
    document.getElementById('view1').style.zIndex = '-1000';
    document.getElementById('view1').style.width = '0%';
    document.getElementById('viewmsg').style.zIndex = '-1000';
    document.getElementById('viewmsg').style.width = '0%';
    document.getElementById('rdmsg').style.zIndex = '-1000';
    document.getElementById('rdmsg').style.width = '0%';
    document.getElementById('viewContactUs').style.zIndex = '-1000';
    document.getElementById('viewContactUs').style.width = '0%';
    document.getElementById('viewNewUpcoming').style.zIndex = '-1000';
    document.getElementById('viewNewUpcoming').style.width = '0%';
    document.getElementById('viewViewUpcoming').style.zIndex = '-1000';
    document.getElementById('viewViewUpcoming').style.width = '0%';
    document.getElementById('viewUpcomingRegistered').style.zIndex = '1000';
    document.getElementById('viewUpcomingRegistered').style.width = '65%';
    document.getElementById('viewReadContactUs').style.zIndex = '-1000';
    document.getElementById('viewReadContactUs').style.width = '0%';
  }

  useEffect(() => {
    clickhome();
  }, []);

  return (
    <div className="main">
      <div className="des">
        <img src={conexlog} alt="logo" />
        <p className='imgtt'>Empowering Technologies</p>
      </div>
      <div className="title">
        <h1>Connex IT Web Site</h1>
      </div>
      <hr />

      <div className='navbarContainer'>
        <div className="service">
          <label>Services</label>
          <div className="sbtnset">
            <button onMouseEnter={handleMouseEnter} onClick={clickhome}>Home</button>
            <button onMouseEnter={handleMouseEnter} onClick={click4}>Add New Vendor</button>
            <button onMouseEnter={handleMouseEnter} onClick={click1}>Add New News</button>
            <button onMouseEnter={handleMouseEnter} onClick={clickblog}>Add New Blog</button>
            <button onMouseEnter={handleMouseEnter} onClick={click5}>View Vendors</button>
            <button onMouseEnter={handleMouseEnter} onClick={click6}>View News</button>
            <button onMouseEnter={handleMouseEnter} onClick={clickvblog}>View Blog</button>
          </div>
        </div>


        <div className="service">
          <label>Messages</label>
          <div className="sbtnset">
            <button onMouseEnter={handleMouseEnter} onClick={clickmsg}>New Messages</button>
            <button onMouseEnter={handleMouseEnter} onClick={clickrmsg}>Read Messages</button>
          </div>
        </div>

        {/* Upcoming Events Section */}
        <div className="service">
          <label>Upcoming Events</label>
          <div className="sbtnset">
            <button onMouseEnter={handleMouseEnter} onClick={clickNewUpcoming}>New UpcomingEvent</button>
            <button onMouseEnter={handleMouseEnter} onClick={clickViewUpcoming}>View UpcomingEvent</button>
            <button onMouseEnter={handleMouseEnter} onClick={clickViewRegistered}>View Registered</button>
          </div>
        </div>

        {/* Contact Us Section */}
        <div className="service">
          <label>Contact Us</label>
          <div className="sbtnset">
            <button onMouseEnter={handleMouseEnter} onClick={clickContactUs}>New ContactUs Msg</button>
            <button onMouseEnter={handleMouseEnter} onClick={clickReadContactUs}>Viewed Msg</button>
          </div>
        </div>


        <div className="service">
          <label>Setting</label>
          <div className="sbtnset">
            <button onMouseEnter={handleMouseEnter} onClick={handleMouseClick}>Settings</button>
          </div>
        </div>
        <div className='destm' onLoad={clickhome}><p>Designed And Develope By <br></br> Connex IT <br /><br /><b>Software Engineer Team</b> <br /><br /> &#169; 2024 Connex Information Technologies (PVT) LTD</p></div>
      </div>
    </div>
  );
};

export default Navbar;
