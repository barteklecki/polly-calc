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
            let { mathOperations, result, displayNumber } = state;
            mathOperations.push(displayNumber);
            result = resultCalc(mathOperations);
            displayNumber = result+'';
            mathOperations.push('+');
        },
        subtract: state => {
            let { mathOperations, result, displayNumber } = state;
            mathOperations.push(displayNumber);
            result = resultCalc(mathOperations);
            displayNumber = result+'';
            mathOperations.push('-');
        },
        multiply: state => {
            let { mathOperations, result, displayNumber } = state;
            mathOperations.push(displayNumber);
            result = resultCalc(mathOperations);
            displayNumber = result+'';
            mathOperations.push('*');
        },
        divide: state => {
            let { mathOperations, result, displayNumber } = state;
            mathOperations.push(displayNumber);
            result = resultCalc(mathOperations);
            displayNumber = result+'';
            mathOperations.push('/');
        },
        negative: state => {
            //
        },
        percentage: state => {
            //
        },
        equals: state => {
            //
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
} = displaySlice.actions;
export default displaySlice.reducer;

export const selectOperations = state => state.display.mathOperations;
export const selectResult = state => state.display.result;