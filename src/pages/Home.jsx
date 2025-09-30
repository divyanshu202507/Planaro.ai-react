import React, { useState } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
    const [notices, setNotices] = useState([]);

    const handleCancelClass = (id) => {
        const message = `Class ${id} has been cancelled.`;
        setNotices(prev => [...prev, message]);
    };



    return (
        <>
            <h2 className='heading2'>My Today Classes</h2>
            <br />
            <div className='classes'>

                <div id='1' className='infocls-wrapper'>
                    <div className='infocls'>
                        <h4 className='subcode'>MHIC-101</h4>
                        <p className='time'>09:00 AM - 10:00 AM</p>
                        <p className='room'>Room 101</p>
                        <p className='branch'>Micro. VLSI</p>
                    </div>
                    <div className='optionstimetable'>
                        <button onClick={() => handleCancelClass(num)}>Cancel Class</button>
                        <button onClick={() => alert(`Change timings for class ${num}`)}>Change Timings</button>
                    </div>
                </div>

                <div id='2' className='infocls-wrapper'>
                    <div className='infocls'>
                        <h4 className='subcode'>MHIC-101</h4>
                        <p className='time'>10:00 AM - 11:00 AM</p>
                        <p className='room'>Room 104 </p>
                        <p className='branch'>Robotics</p>
                    </div>
                    <div className='optionstimetable'>
                        <button onClick={() => handleCancelClass(num)}>Cancel Class</button>
                        <button onClick={() => alert(`Change timings for class ${num}`)}>Change Timings</button>
                    </div>
                </div>

                <div id='3' className='infocls-wrapper'>
                    <div className='infocls'>
                        <h4 className='subcode'>MHIC-101</h4>
                        <p className='time'>11:00 AM - 12:00 AM</p>
                        <p className='room'>Room 108</p>
                        <p className='branch'>ECE</p>
                    </div>
                    <div className='optionstimetable'>
                        <button onClick={() => handleCancelClass(num)}>Cancel Class</button>
                        <button onClick={() => alert(`Change timings for class ${num}`)}>Change Timings</button>
                    </div>
                </div>

                <div id='4' className='infocls-wrapper'>
                    <div className='infocls'>
                        <h4 className='subcode'>MHIC-101</h4>
                        <p className='time'>02:00 PM - 03:00 PM</p>
                        <p className='room'>Room 107</p>
                        <p className='branch'>CSE</p>
                    </div>
                    <div className='optionstimetable'>
                        <button onClick={() => handleCancelClass(num)}>Cancel Class</button>
                        <button onClick={() => alert(`Change timings for class ${num}`)}>Change Timings</button>
                    </div>
                </div>

                <div id='5' className='infocls-wrapper'>
                    <div className='infocls'>
                        <h4 className='subcode'>MHIC-101</h4>
                        <p className='time'>04:00 PM - 05:00 PM</p>
                        <p className='room'>Room 105</p>
                        <p className='branch'>Electrical Eng.</p>
                    </div>
                    <div className='optionstimetable'>
                        <button onClick={() => handleCancelClass(num)}>Cancel Class</button>
                        <button onClick={() => alert(`Change timings for class ${num}`)}>Change Timings</button>
                    </div>
                </div>

            </div>

            <br />
            <br />

            <div className='notifications'>
                <h3 className='notifi'>New Notifications</h3>
                <br />

                <div className='noti1'>
                    <a className='a1' href='https://nitkkr.ac.in/wp-content/uploads/2025/08/Notification-Regarding-Internal-Reappear-Examination-for-AugSept-2025-Examination-Session.pdf' target="_blank" rel="noopener noreferrer">Notification Regarding UG/PG Internal Reappear Examination for Nov/Dec-2025 Examination Session</a>
                </div>
                <div className='noti1'>
                    <a className='a1' href='https://nitkkr.ac.in/wp-content/uploads/2025/09/Revised-Notification-Schedule-of-Mid-Sem-Exam-I-18.09.2025.pdf' target="_blank" rel="noopener noreferrer">Revised Notification and time slots for Mid Semester Exam-I for Nov./Dec.-2025 Examination Session</a>
                </div>
                <div className='noti1'>
                    <a className='a1' href='https://docs.google.com/forms/d/e/1FAIpQLSfqgGy7NauzYunvNx0ESsdvwqqxSEdRzRczTF9TVL3nOGzrfA/viewform' target="_blank" rel="noopener noreferrer">The Department of Computer Applications, NIT Kurukshetra, Haryana is going to jointly organize FDP on Recent Advancements in Deep Learning Architectures (RADA-2025) with E & ICT Academy IIIT Jabalpur in Online mode during November 13-19, 2025.</a>
                </div>
                <div className='noti1'>
                    <a className='a1' href='https://nitkkr.ac.in/wp-content/uploads/2025/08/Notification-Regarding-Internal-Reappear-Examination-for-AugSept-2025-Examination-Session.pdf' target="_blank" rel="noopener noreferrer">Notification Regarding UG/PG Internal Reappear Examination for Nov/Dec-2025 Examination Session</a>
                </div>
                <div className='noti1'>
                    <a className='a1' href='https://nitkkr.ac.in/wp-content/uploads/2025/09/Detailed-Advertisement-Advt.No_.23.2025.pdf' target="_blank" rel="noopener noreferrer">Recruitment of Junior Research Fellows (JRFs) for the MeitY, Govt. of India sponsored project</a>
                </div>

                <a href='#' className='viewall'>View All Notifications</a>

            </div>

        </>
    );
};

export default Home;
