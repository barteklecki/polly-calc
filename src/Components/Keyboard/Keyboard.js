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
                <td className={'button'} onClick={()=> dispatch(addDigit(8))}> 8 </td>
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
                <td className={'button equals'} onClick={()=> dispatch(equals())} colspan="2"> = </td>
            </tr>
        </>
    );
}

export default Keyboard;
