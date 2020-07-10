import { createSlice } from '@reduxjs/toolkit';
import { resultCalc } from '../../utils';

export const displaySlice = createSlice({
    name: 'display',
    initialState: {
        nextOperationFlag: false,
        mathOperations: [],
        supportVar: 0,
        displayNumber: '0',
    },
    reducers: {
        add: state => {
            state.mathOperations.push(state.displayNumber);
            state.supportVar = resultCalc(state.mathOperations);
            state.displayNumber = state.supportVar + '';
            state.mathOperations.push('+');
            state.nextOperationFlag = true;
        },
        subtract: state => {
            state.mathOperations.push(state.displayNumber);
            state.supportVar = resultCalc(state.mathOperations);
            state.displayNumber = state.supportVar + '';
            state.mathOperations.push('-');
            state.nextOperationFlag = true;
        },
        multiply: state => {
            state.mathOperations.push(state.displayNumber);
            state.supportVar = resultCalc(state.mathOperations);
            state.mathOperations.push('*');
            state.nextOperationFlag = true;
        },
        divide: state => {
            state.mathOperations.push(state.displayNumber);
            state.supportVar = resultCalc(state.mathOperations);
            state.mathOperations.push('/');
            state.nextOperationFlag = true;
        },
        negative: state => {
            let perc = '';
            if( state.displayNumber.slice(-1) === '%' ) {
                perc = '%';
                state.displayNumber = state.displayNumber.slice(0, -1);
            }
            state.displayNumber = -+state.displayNumber + perc;
        },
        percentage: state => {
            if ( state.displayNumber.slice( -1 ) !== '%' ) {
                state.displayNumber += '%';
            } else {
                state.displayNumber = state.displayNumber.slice( 0, -1 );
            }
        },
        equals: state => {
            state.mathOperations.push(state.displayNumber);
            state.supportVar = resultCalc(state.mathOperations);
            state.displayNumber = state.supportVar+'';
            state.mathOperations = [];
            state.nextOperationFlag = false;
        },
        addComma: state => {
            if (state.displayNumber.indexOf('.') === -1) {
                let trailingChar = '';
                if( state.displayNumber.slice(-1) === '%' ) {
                    trailingChar = '%';
                    state.displayNumber = state.displayNumber.slice(0, -1);
                }
                state.displayNumber += '.';
                state.displayNumber += trailingChar;
            }
        },
        addDigit: (state, action) => {
            if( state.nextOperationFlag ) {
                state.displayNumber = '';
                state.nextOperationFlag = false;
            }
            let trailingChar = '';
            if( state.displayNumber.slice(-1) === '%' ) {
                trailingChar = '%';
                state.displayNumber = state.displayNumber.slice(0, -1);
            }
            state.displayNumber = +(state.displayNumber + action.payload) + trailingChar;
            return
        },
        reset: state => {
            state.nextOperationFlag = false;
            state.mathOperations = [];
            state.supportVar = 0;
            state.displayNumber = '0';
        },

    },
});

export const {
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
} = displaySlice.actions;
export default displaySlice.reducer;

export const selectOperations = state => state.display.mathOperations;
export const selectSupportVar = state => state.display.supportVar;
export const selectDisplayNumber = state => state.display.displayNumber;
