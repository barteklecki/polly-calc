import React from 'react';
import { useSelector } from 'react-redux';

import { selectOperations, selectDisplayNumber } from './displaySlice';

const Display = () => {
    const operations = useSelector(selectOperations);
    const displayNumber = useSelector(selectDisplayNumber);

    return (
        <div>
            <p>M: {operations}</p>
            <p>R: {displayNumber}</p>
        </div>
    );
}

export default Display;
