import { createSlice } from '@reduxjs/toolkit';

export const displaySlice = createSlice({
    name: 'display',
    initialState: {
        nextOperationFlag: false,
        mathOperations: [],
        result: 0,
        displayNumber: '0',
    },
    reducers: {
        add: state => {
            state.mathOperations.push(state.displayNumber);
            state.result = resultCalc(state.mathOperations);
            state.displayNumber = state.result + '';
            state.mathOperations.push('+');
            state.nextOperationFlag = true;
        },
        subtract: state => {
            state.mathOperations.push(state.displayNumber);
            state.result = resultCalc(state.mathOperations);
            state.displayNumber = state.result + '';
            state.mathOperations.push('-');
            state.nextOperationFlag = true;
        },
        multiply: state => {
            state.mathOperations.push(state.displayNumber);
            state.result = resultCalc(state.mathOperations);
            state.mathOperations.push('*');
            state.nextOperationFlag = true;
        },
        divide: state => {
            state.mathOperations.push(state.displayNumber);
            state.result = resultCalc(state.mathOperations);
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
            state.result = resultCalc(state.mathOperations);
            state.displayNumber = state.result;
            state.mathOperations = [];
            state.nextOperationFlag = false;
        },
        addComma: state => {
            if (state.displayNumber.indexOf('.') === -1) {
                let perc = '';
                if( state.displayNumber.slice(-1) === '%' ) {
                    perc = '%';
                    state.displayNumber = state.displayNumber.slice(0, -1);
                }
                state.displayNumber += '.';
                state.displayNumber += perc;
            }
        },
        addDigit: (state, action) => {
            if( state.nextOperationFlag ) {
                state.displayNumber = '';
                state.nextOperationFlag = false;
            }
            let perc = '';
            if( state.displayNumber.slice(-1) === '%' ) {
                perc = '%';
                state.displayNumber = state.displayNumber.slice(0, -1);
            }
            state.displayNumber = +(state.displayNumber + action.payload) + perc;
            return
        },
        reset: state => {
            state.nextOperationFlag = false;
            state.mathOperations = [];
            state.result = 0;
            state.displayNumber = '0';
        },

    },
});

export const resultCalc = arr => {
    let result = convertPercent(arr[0]);
    let tempSum = 0;
    for (let i = 1; i < arr.length; i += 2) {
        let temp = convertPercent(arr[i + 1]);
        switch (arr[i]) {
            case '+':
                if (arr[i + 2] === '*' || arr[i + 2] === '/') {
                    tempSum = result;
                    result = +temp;
                    break;
                }
                result += +temp;
                break;
            case '-':
                if (arr[i + 2] === '*' || arr[i + 2] === '/') {
                    tempSum = result;
                    result = +temp;
                    break;
                }
                result -= +temp;
                break;
            case '*':
                result *= temp;
                if (arr[i - 2] === '-') {
                    result = -result;
                }
                break;
            case '/':
                if (!+temp) {
                    return ' Cannot divide by zero! ';
                }
                result /= +temp;
                if (arr[i - 2] === '-') {
                    result = -result;
                }
                break;
            default:
                return ' Unknown math operations! ';
        }
        if (arr[i + 2] !== '*' && arr[i + 2] !== '/') {
            result += tempSum;
            tempSum = 0;
        }
    }
    return result;
};

const convertPercent = val => {
    if (val && isNaN(val)) {
        if (val.slice(-1) === '%') {
            val = +val.slice(0, -1) / 100;
            return val;
        } else {
            return ' Cannot calculate result from NaN! ';
        }
    }
    return +val;
};

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
export const selectResult = state => state.display.result;
export const selectDisplayNumber = state => state.display.displayNumber;
