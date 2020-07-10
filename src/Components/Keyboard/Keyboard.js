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

const config = {
    colCount: 4,
    keys: [
        { id: 1, name: '%', classes: 'button', dispatch: percentage },
        { id: 2, name: '+/-', classes: 'button', dispatch: negative },
        { id: 3, name: 'C', classes: 'button', dispatch: reset },
        { id: 4, name: '/', classes: 'button operation', dispatch: divide },
        { id: 5, name: '7', classes: 'button', dispatch: addDigit, payload: 7 },
        { id: 6, name: '8', classes: 'button', dispatch: addDigit, payload: 8 },
        { id: 7, name: '9', classes: 'button', dispatch: addDigit, payload: 9 },
        { id: 8, name: '*', classes: 'button operation', dispatch: multiply },
        { id: 9, name: '4', classes: 'button', dispatch: addDigit, payload: 4 },
        { id: 10, name: '5', classes: 'button', dispatch: addDigit, payload: 5 },
        { id: 11, name: '6', classes: 'button', dispatch: addDigit, payload: 6 },
        { id: 12, name: '-', classes: 'button operation', dispatch: subtract },
        { id: 13, name: '1', classes: 'button', dispatch: addDigit, payload: 1 },
        { id: 14, name: '2', classes: 'button', dispatch: addDigit, payload: 2 },
        { id: 15, name: '3', classes: 'button', dispatch: addDigit, payload: 3 },
        { id: 16, name: '+', classes: 'button operation', dispatch: add },
        { id: 17, name: '0', classes: 'button', dispatch: addDigit, payload: 0 },
        { id: 18, name: '.', classes: 'button', dispatch: addComma },
        { id: 19, name: '=', classes: 'button equals', dispatch: equals, colSpan: 2 },
    ]
}

const Keyboard = () => {
    const dispatch = useDispatch();

    return (
        <>
            <tr>
                <td className={'button'} onClick={()=> dispatch(percentage())}> % </td>
                <td className={'button'} onClick={()=> dispatch(negative())}>+/-</td>
                <td className={'button'} onClick={()=> dispatch(reset())}> C </td>
                <td className={'button operation'} onClick={()=> dispatch(divide())}> / </td>
            </tr>
            <tr>
                <td className={'button'} onClick={()=> dispatch(addDigit(7))}> 7 </td>
                <td className={'button'} onClick={()=> dispatch(addDigit('8'))}> 8 </td>
                <td className={'button'} onClick={()=> dispatch(addDigit(9))}> 9 </td>
                <td className={'button operation'} onClick={()=> dispatch(multiply())}> * </td>
            </tr>
            <tr>
                <td className={'button'} onClick={()=> dispatch(addDigit(4))}> 4 </td>
                <td className={'button'} onClick={()=> dispatch(addDigit(5))}> 5 </td>
                <td className={'button'} onClick={()=> dispatch(addDigit(6))}> 6 </td>
                <td className={'button operation'} onClick={()=> dispatch(subtract())}> - </td>
            </tr>
            <tr>
                <td className={'button'} onClick={()=> dispatch(addDigit(1))}> 1 </td>
                <td className={'button'} onClick={()=> dispatch(addDigit(2))}> 2 </td>
                <td className={'button'} onClick={()=> dispatch(addDigit(3))}> 3 </td>
                <td className={'button operation'} onClick={()=> dispatch(add())}> + </td>
            </tr>
            <tr>
                <td className={'button'} onClick={()=> dispatch(addDigit(0))}> 0 </td>
                <td className={'button'} onClick={()=> dispatch(addComma())}> . </td>
                <td className={'button equals'} onClick={()=> dispatch(equals())} colSpan="2"> = </td>
            </tr>
        </>
    );
}

export default Keyboard;
