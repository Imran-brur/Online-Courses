import React from 'react';
import fakeData from '../../fakeData/Course'
import { useState } from 'react';
import Courses from '../Courses/Courses';
import './Body.css'
import Purchase from '../Purchase/Purchase';


const Body = () => {
    const data = fakeData.slice(0,12);
    const [courses, setCourses] =useState(data);
    const [purchase, setPurchase] = useState([])

    const handleAddCourses = (courses) => {
        const newPurchase = [...purchase, courses]
        setPurchase(newPurchase);
    }
    
    return (
        <div className="bodyPart">
           <div>
             {
                 courses.map(course => <Courses courses= {course} handleAddCourses={handleAddCourses}></Courses>)
             }
           </div>   
    
            <div>
              <Purchase purchase={purchase}></Purchase>
            </div>
        </div>
    );
};

export default Body;