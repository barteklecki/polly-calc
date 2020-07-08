import React from 'react';
import { useSelector } from 'react-redux';

import { selectOperations, selectResult } from './displaySlice';

const Display = () => {
    const operations = useSelector(selectOperations);
    const result = useSelector(selectResult);

    return (
        <div>
            <p>M: {operations}</p>
            <p>R: {result}</p>
        </div>
    );
}

export default Display;
