import React from 'react';
import { useSelector } from 'react-redux';

import { selectOperations, selectDisplayNumber } from './displaySlice';
import { limitText } from '../../utils';

const chLimit = 26;

const Display = () => {
    const operations = useSelector(selectOperations);
    const displayNumber = useSelector(selectDisplayNumber);

    return (
        <tr>
            <td className="display" colSpan="4">
                <p className="math">&nbsp;{limitText(operations.join(''), chLimit)}</p>
                <p className={displayNumber.length > 9 ? 'numberLimited' : 'number'}>{displayNumber}</p>
            </td>
        </tr>
    );
}

export default Display;
