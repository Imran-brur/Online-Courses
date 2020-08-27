import React from 'react';
import './Courses.css'

const Courses = (props) => {
    console.log(props)
    const {name,by,courseFee} = props.courses;
    const handleAddCourses = props.handleAddCourses;
    return (
        <div>
           <div className="coursePart">
            <h1>Course Name: {name}</h1>
            <h3>Instractor: {by}</h3>
            <h3>Course Fee: {courseFee}</h3>
            <button onClick={() => handleAddCourses(props.courses)} className="btn btn-danger btn-lg">Enroll now</button>
           </div>
        </div>
           
        
    );
};

export default Courses;