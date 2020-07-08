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
            state.displayNumber = -+state.displayNumber + '';
        },
        percentage: state => {
            state.displayNumber.push('%');
            console.log('[dispatch: %]');
        },
        equals: state => {
            //
        },
        addComma: state => {
            console.log('[dispatch: comma]');
            let { displayNumber } = state;
            if (displayNumber.indexOf('.') === -1) {
                displayNumber += '.';
            }
        },
        addDigit: (state, action) => {
            if(state.nextOperationFlag) {
                state.displayNumber = '';
                state.nextOperationFlag = false;
            }
            console.log('[dispatch: digit]', state.displayNumber, action.payload);
            state.displayNumber = +(state.displayNumber + action.payload) + '';
            return
        },
    },
});

export const resultCalc = arr => {
    let result = convertPercent(arr[0]);
    let tempSum = 0;
    for (let i = 1; i < arr.length; i += 2) {
        arr[i + 1] = convertPercent(arr[i + 1]);
        switch (arr[i]) {
            case '+':
                if (arr[i + 2] === '*' || arr[i + 2] === '/') {
                    tempSum = result;
                    result = +arr[i + 1];
                    break;
                }
                result += +arr[i + 1];
                break;
            case '-':
                if (arr[i + 2] === '*' || arr[i + 2] === '/') {
                    tempSum = result;
                    result = +arr[i + 1];
                    break;
                }
                result -= +arr[i + 1];
                break;
            case '*':
                result *= arr[i + 1];
                if (arr[i - 2] === '-') {
                    result = -result;
                }
                break;
            case '/':
                if (!+arr[i + 1]) {
                    return ' Cannot divide by zero! ';
                }
                result /= +arr[i + 1];
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
} = displaySlice.actions;
export default displaySlice.reducer;

export const selectOperations = state => state.display.mathOperations;
export const selectResult = state => state.display.result;
export const selectDisplayNumber = state => state.display.displayNumber;
