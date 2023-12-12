import React from 'react';
import FeeItem from './feeitem';
import './feelist.css'

const FeeList = ({data}) => {
    return (
        <div className="tariffs">
        {data.map((tariff, index) => (
          <FeeItem key={index} {...tariff}/>
        ))}
        </div>
    );
};

export default FeeList;