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
        <div>
            <div className={'button'} onClick={()=> dispatch(percentage())}> % </div>
            <div className={'button'} onClick={()=> dispatch(negative())}>+/-</div>
            <div className={'button'} onClick={()=> dispatch(reset())}> C </div>
            <div className={'button operation'} onClick={()=> dispatch(divide())}> / </div>
            <br/>
            <div className={'button'} onClick={()=> dispatch(addDigit(7))}> 7 </div>
            <div className={'button'} onClick={()=> dispatch(addDigit(8))}> 8 </div>
            <div className={'button'} onClick={()=> dispatch(addDigit(9))}> 9 </div>
            <div className={'button operation'} onClick={()=> dispatch(multiply())}> * </div>
            <br/>
            <div className={'button'} onClick={()=> dispatch(addDigit(4))}> 4 </div>
            <div className={'button'} onClick={()=> dispatch(addDigit(5))}> 5 </div>
            <div className={'button'} onClick={()=> dispatch(addDigit(6))}> 6 </div>
            <div className={'button operation'} onClick={()=> dispatch(subtract())}> - </div>
            <br/>
            <div className={'button'} onClick={()=> dispatch(addDigit(1))}> 1 </div>
            <div className={'button'} onClick={()=> dispatch(addDigit(2))}> 2 </div>
            <div className={'button'} onClick={()=> dispatch(addDigit(3))}> 3 </div>
            <div className={'button operation'} onClick={()=> dispatch(add())}> + </div>
            <br/>
            <div className={'button'} onClick={()=> dispatch(addDigit(0))}> 0 </div>
            <div className={'button'} onClick={()=> dispatch(addComma())}> , </div>
            <div className={'button equals'} onClick={()=> dispatch(equals())}> = </div>
        </div>
    );
}

export default Keyboard;
