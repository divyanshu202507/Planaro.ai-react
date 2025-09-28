import React, { useState } from 'react'
import './Students.css'



const StudentsData = () => {
    const [formData, setFormData] = useState({
        course: '',
        branch: '',
        year: '',

    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);

        // You can send formData to an API or process it further here
    };

    return (
        <>
            <h2 className='heading1'>Students Information</h2>

            <form onSubmit={handleSubmit}>
                <div>

                    <select name="course" value={formData.course} onChange={handleChange} required>
                        <option value="">Select Course</option>
                        <option value="btech">B.Tech</option>
                        <option value="mtech">M.Tech</option>
                    </select>
                </div>

                <div>

                    <select name="branch" value={formData.branch} onChange={handleChange} required>
                        <option value="">Select Branch</option>
                        <option value="cse">CSE</option>
                        <option value="ece">ECE</option>
                        <option value="vlsi">VLSI</option>
                        <option value="ee">EE</option>

                        <option value="iiot">IIoT</option>
                    </select>
                </div>

                <div>

                    <select name="year" value={formData.year} onChange={handleChange} required>
                        <option value="">Select Year</option>
                        <option value="first">First Year</option>
                        <option value="second">Second Year</option>
                        <option value="third">Third Year</option>
                        <option value="fourth">Fourth Year</option>
                    </select>
                </div>



                <button id='formsubmit' type="submit">Continue </button>

            </form>

        </>
    );

}

export default StudentsData;