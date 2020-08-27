import React from 'react';
import './Purchase.css'

const Purchase = (props) => {
    const purchase = props.purchase;
    let totalAmount = 0;
    for (let i = 0; i < purchase.length; i++) {
        const courses = purchase[i];
        totalAmount = totalAmount + courses.courseFee;
    }
    return (
        <div className="Purchase">
            <h1>Online Courses</h1>
            <h3>Purchased Courses:{purchase.length}</h3>
            <h2>Total Amount:{totalAmount}</h2>
        </div>
    );
};

export default Purchase;