import React, { useState } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
    const [notices, setNotices] = useState([]);

    const handleCancelClass = (id) => {
        const message = `Class ${id} has been cancelled.`;
        setNotices(prev => [...prev, message]);
    };

    const handleclick = () => {
       window.open("C:/Users/shash/OneDrive/Desktop/Madhur Ka Past.pdf", "_blank");    
    }

    return (
        <>
            <h2 className='heading2'>My Today Classes</h2>
            <br />
            <div className='classes'>
                {[1, 2, 3, 4, 5].map((num) => (
                    <div key={num} className='infocls-wrapper'>
                        <div className='infocls'>
                            <p>Class {num}</p>
                        </div>
                        <div className='optionstimetable'>
                            <button onClick={() => handleCancelClass(num)}>Cancel Class</button>
                            <button onClick={() => alert(`Change timings for class ${num}`)}>Change Timings</button>
                        </div>
                    </div>
                ))}
            </div>

            <br />
            <br />

            <div className='notifications'>
                <h3 className='notifi'>New Notifications</h3>
                <br />

                <div  onClick={handleclick} className='noti1'></div>
                <div className='noti1'></div>
                <div className='noti1'></div>
                <div className='noti1'></div>
                <div className='noti1'></div>

            </div>

        </>
    );
};

export default Home;
