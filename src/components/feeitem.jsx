import React from 'react';
import './feeitem.css'



const FeeItem = ({title, price, features, color, isPremium, isSelected, onClick}) => {
    return (
    <div className={"fee-item" + (isPremium ? " premium-tarrif" : "") + (isSelected ? " selected" : "")} onClick={onClick}>
        <h2 className="fee-title">{title}</h2>
        <div className="fee-price">{price}р/мес</div>
        <ul className="fee-features" style={{ backgroundColor: color }}>
        {features.map((item, index) => (
            <li key={index}>{item}</li>
        ))}
        </ul>
    </div>
    );
};

export default FeeItem;