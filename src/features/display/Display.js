import React from 'react';
import { useSelector } from 'react-redux';

import { selectOperations, selectResult, selectDisplayNumber } from './displaySlice';

const Display = () => {
    const operations = useSelector(selectOperations);
    const result = useSelector(selectResult);
    const displayNumber = useSelector(selectDisplayNumber);

    return (
        <div>
            <p>M: {operations}</p>
            <p>DN: {displayNumber}</p>
            <p>R: {result}</p>
        </div>
    );
}

export default Display;
