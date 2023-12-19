import React, {useState} from 'react';
import FeeItem from './feeitem';
import './feelist.css'

const FeeList = ({data}) => {
  const [selectedItemId, setSelectedItemId] = useState(null);

  const handleItemClick = (id) => {
    setSelectedItemId(id);
  }
    return (
        <div className="tariffs">
        {data.map((tariff, index) => (
          <FeeItem key={index} 
          {...tariff}
          isSelected={selectedItemId === index}
          onClick={() => handleItemClick(index)}/>
        ))}
        </div>
    );
};

export default FeeList;