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
            <button onClick={()=> dispatch(percentage())}> % </button>
            <button onClick={()=> dispatch(negative())}>+/-</button>
            <button onClick={()=> dispatch(reset())}> C </button>
            <button onClick={()=> dispatch(divide())}> / </button>
            <br/>
            <button onClick={()=> dispatch(addDigit(7))}> 7 </button>
            <button onClick={()=> dispatch(addDigit(8))}> 8 </button>
            <button onClick={()=> dispatch(addDigit(9))}> 9 </button>
            <button onClick={()=> dispatch(multiply())}> * </button>
            <br/>
            <button onClick={()=> dispatch(addDigit(4))}> 4 </button>
            <button onClick={()=> dispatch(addDigit(5))}> 5 </button>
            <button onClick={()=> dispatch(addDigit(6))}> 6 </button>
            <button onClick={()=> dispatch(subtract())}> - </button>
            <br/>
            <button onClick={()=> dispatch(addDigit(1))}> 1 </button>
            <button onClick={()=> dispatch(addDigit(2))}> 2 </button>
            <button onClick={()=> dispatch(addDigit(3))}> 3 </button>
            <button onClick={()=> dispatch(add())}> + </button>
            <br/>
            <button onClick={()=> dispatch(addDigit(0))}> 0 </button>
            <button onClick={()=> dispatch(addComma())}> , </button>
            <button onClick={()=> dispatch(equals())} id="equals"> = </button>
        </div>
    );
}

export default Keyboard;
