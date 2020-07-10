import React from 'react';
import { useDispatch } from 'react-redux';

import {
    add,
    subtract,
    multiply,
    divide,
    negative,
    percentage,
    equals,
    addComma,
    addDigit,
    reset,
} from '../../features/display/displaySlice';

const config = [
    [  
        { id: 1, name: '%', classes: 'button', dispatch: percentage },
        { id: 2, name: '+/-', classes: 'button', dispatch: negative },
        { id: 3, name: 'C', classes: 'button', dispatch: reset },
        { id: 4, name: '/', classes: 'button operation', dispatch: divide }
    ],[
        { id: 5, name: '7', classes: 'button', dispatch: addDigit, payload: '7' },
        { id: 6, name: '8', classes: 'button', dispatch: addDigit, payload: '8' },
        { id: 7, name: '9', classes: 'button', dispatch: addDigit, payload: '9' },
        { id: 8, name: '*', classes: 'button operation', dispatch: multiply }
    ],[
        { id: 9, name: '4', classes: 'button', dispatch: addDigit, payload: '4' },
        { id: 10, name: '5', classes: 'button', dispatch: addDigit, payload: '5' },
        { id: 11, name: '6', classes: 'button', dispatch: addDigit, payload: '6' },
        { id: 12, name: '-', classes: 'button operation', dispatch: subtract },
    ],[
        { id: 13, name: '1', classes: 'button', dispatch: addDigit, payload: '1' },
        { id: 14, name: '2', classes: 'button', dispatch: addDigit, payload: '2' },
        { id: 15, name: '3', classes: 'button', dispatch: addDigit, payload: '3' },
        { id: 16, name: '+', classes: 'button operation', dispatch: add }
    ],[
        { id: 17, name: '0', classes: 'button', dispatch: addDigit, payload: '0' },
        { id: 18, name: '.', classes: 'button', dispatch: addComma },
        { id: 19, name: '=', classes: 'button equals', dispatch: equals, colSpan: 2 }
    ]
]

const Keyboard = () => {
    const dispatch = useDispatch();

    const printKeyboard = config.map( (row, index) => {
        const rowPrint = row.map(key => 
                <td
                    key = {key.id}
                    className={key.classes}
                    onClick={() => dispatch(key.dispatch(key.payload ? key.payload : null))}
                    colSpan={key.colSpan ? key.colSpan : 1}
                >
                { key.name }
                </td> 
        );
        return <tr key={'row'+index}>{rowPrint}</tr> ;
    });

    return printKeyboard;
}

export default Keyboard;
