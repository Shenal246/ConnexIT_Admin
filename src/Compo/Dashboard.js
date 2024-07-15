import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AddNews from './AddNews';
import Navbar from './Navbar/Navbar'
import CTTobbar from './topbar/CTTobbar'
import Chats from './Chats/Chats'
import AddVendor from './AddVendor';
import './dash.css'
import 'animate.css';
import img1 from './ConnexIT.png'
import VVendor from './VVendor';
import Vnews from './Vnews';
import Vmsg from './Vmsg.js'
import RVmsg from './RVmsg.js';
import Addblog from './Addblog.js';
import Vblog from './Vblog.js';
import ViewContactUs from './ViewContactUs.js';
import NewUpcomingEvent from './NewUpcomingEvent.js';
import VewUpcoming from './VewUpcoming.js';
import UpcomingRegister from './UpcomingRegister.js';
import ViewReadContactUs from './ViewReadContactUs.js';

const Dashboard = () => {
    useEffect(() => {
        // Check if this is the first load
        const firstLoad = sessionStorage.getItem('firstLoad');

        if (!firstLoad) {
            // If this is the first load, reload the page
            sessionStorage.setItem('firstLoad', 'true');
            window.location.reload();
        }
    }, []);

    return (
        <div className='contain'>
            <Navbar />
            <CTTobbar />
            <Chats />
            <AddNews />
            <AddVendor />
            <VVendor />
            <Vnews />
            <Vmsg />
            <RVmsg />
            <Vblog />
            <Addblog />
            <ViewContactUs />
            <NewUpcomingEvent />
            <VewUpcoming />
            <UpcomingRegister />
            <ViewReadContactUs />
            <div className='welcome' id='sv5'>
                <img src={img1} alt="ConnexIT Logo" />
                <h1>Welcome To Connex IT !</h1>
                <h4>Introducing New Connex IT Web Application.</h4>
                <p>This Portal can be use to add and change News & events <br />and Add vendor information to new Connex IT web pages.</p>
                <hr />
                <h6>Designed and Developed By ConnexIT SE Team</h6>
                <h7>Copyright © 2024 - Connex information Technology (PVT) Ltd</h7>
            </div>
        </div>
    );
};

export default Dashboard;