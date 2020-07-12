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
        { id: 1, name: '%', classes: 'key', dispatch: percentage },
        { id: 2, name: '+/-', classes: 'key', dispatch: negative },
        { id: 3, name: 'C', classes: 'key', dispatch: reset },
        { id: 4, name: '/', classes: 'key operation', dispatch: divide },
        { id: 5, name: '7', classes: 'key', dispatch: addDigit, payload: '7' },
        { id: 6, name: '8', classes: 'key', dispatch: addDigit, payload: '8' },
        { id: 7, name: '9', classes: 'key', dispatch: addDigit, payload: '9' },
        { id: 8, name: '*', classes: 'key operation', dispatch: multiply },
        { id: 9, name: '4', classes: 'key', dispatch: addDigit, payload: '4' },
        { id: 10, name: '5', classes: 'key', dispatch: addDigit, payload: '5' },
        { id: 11, name: '6', classes: 'key', dispatch: addDigit, payload: '6' },
        { id: 12, name: '-', classes: 'key operation', dispatch: subtract },
        { id: 13, name: '1', classes: 'key', dispatch: addDigit, payload: '1' },
        { id: 14, name: '2', classes: 'key', dispatch: addDigit, payload: '2' },
        { id: 15, name: '3', classes: 'key', dispatch: addDigit, payload: '3' },
        { id: 16, name: '+', classes: 'key operation', dispatch: add },
        { id: 17, name: '0', classes: 'key bl-rad', dispatch: addDigit, payload: '0' },
        { id: 18, name: '.', classes: 'key', dispatch: addComma },
        { id: 19, name: '=', classes: 'key equals span-2 br-rad', dispatch: equals },
]

const Keyboard = () => {
    const dispatch = useDispatch();

    const printKeyboard = config.map( key => 
        <button
            key = {key.id}
            className={key.classes}
            onClick={() => dispatch(key.dispatch(key.payload ? key.payload : null))}
        >
            { key.name }
        </button>

    );

    return <div class="keyboard">{ printKeyboard }</div>;
}

export default Keyboard;
