import React from 'react';
import { useSelector } from 'react-redux';

const Display = () => {
    const mathSummary = useSelector();
    const number = useSelector();
    
    return (
        <div>
            <p>{mathSummary}</p>
            <p>{number}</p>
        </div>
    );
}

export default Display;
