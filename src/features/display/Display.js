import React from 'react';
import { useSelector } from 'react-redux';

import { selectOperations, selectResult, selectDisplayNumber } from './displaySlice';

const chLimit = 26;

const limitText = ( text, limit ) => {
    if ( text.length > limit ) {
        return '...' + text.slice(text.length - chLimit);
    } 
    return text;

}

const Display = () => {
    const operations = useSelector(selectOperations);
    const displayNumber = useSelector(selectDisplayNumber);

    return (
        <tr>
            <td className="display" colspan="4">
                <p className="math">&nbsp;{limitText(operations.join(''), chLimit)}</p>
                <p className={displayNumber.length > 9 ? 'numberLimited' : 'number'}>{displayNumber}</p>
            </td>
        </tr>
    );
}

export default Display;
