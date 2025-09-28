import React, { useState } from 'react';
import './Timetable.css';

const Timetable = () => {
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

       
        </>
    );
};

export default Timetable;
