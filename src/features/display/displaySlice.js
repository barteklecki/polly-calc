import { createSlice } from '@reduxjs/toolkit';

export const displaySlice = createSlice({
    name: 'display',
    initialState: {
        nextOperationFlag: false,
        mathOperations: [''],
        result: 0,
        displayNumber: '0',
    },
    reducers: {
        add: state => {
            state.mathOperations.push(`${state.displayNumber} + `);
            state.result += state.displayNumber;
            state.displayNumber = state.result;
            state.nextOperationFlag = true;
        },
        subtract: state => {
            state.mathOperations.push(`${state.displayNumber} - `);
            state.result -= state.displayNumber;
            state.displayNumber = state.result;
            state.nextOperationFlag = true;
        },
        multiply: state => {
            state.mathOperations.push(`${state.displayNumber} * `);
            state.result *= state.displayNumber;
            state.displayNumber = state.result;
            state.nextOperationFlag = true;
        },
        divide: state => {
            state.mathOperations.push(`${state.displayNumber} / `);
            if (state.displayNumber) {
                state.result /= state.displayNumber;
                state.displayNumber = state.result;
                state.nextOperationFlag = true;
            } else {
                state.displayNumber = 'Cannot divide by zero!!!';
            }
        },
        negative: state => {
            state.mathOperations.push('(-1) * ');
            state.result = -state.displayNumber;
            state.displayNumber = state.result;
            state.nextOperationFlag = true;
        },
        percentage: state => {
            state.mathOperations.push('%');
            state.values.push(action.payload.value);
            state.result /= action.payload.value;
        },
        equals: (state) => {
            state.mathOperations.push('/');
            state.values.push(action.payload.value);
            state.result /= action.payload.value;
        },
    },
  });

  export const resultCalc = arr 

  export const { add, subtract, multiply, divide, negative, percentage, equals } = displaySlice.actions;
  export default displaySlice.reducer;