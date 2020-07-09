import React from 'react';
import { useSelector } from 'react-redux';

import { selectOperations, selectResult, selectDisplayNumber } from './displaySlice';

const Display = () => {
    const operations = useSelector(selectOperations);
    const result = useSelector(selectResult);
    const displayNumber = useSelector(selectDisplayNumber);

    return (
        <tr>
            <td className="display" colspan="4">
                <p className="math">&nbsp;{operations}</p>
                <p className="number">{displayNumber}</p>
            </td>
        </tr>
    );
}

export default Display;
