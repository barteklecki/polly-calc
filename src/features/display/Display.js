import React from 'react';
import { useSelector } from 'react-redux';

import { selectOperations, selectDisplayNumber } from './displaySlice';
import { limitText } from '../../utils';

const chLimit = 25;

const Display = () => {
    const operations = useSelector(selectOperations);
    const displayNumber = useSelector(selectDisplayNumber);

    return (
        <div className="display tl-rad tr-rad">
            <p className="math">&nbsp;{limitText(operations.join(''), chLimit)}</p><br/>
            <p className={displayNumber.length > 8 ? 'numberLimited' : 'number'}>{displayNumber}</p>
        </div>
    );
}

export default Display;
