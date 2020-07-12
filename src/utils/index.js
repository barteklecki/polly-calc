export const resultCalc = arr => {
    let result = percent2Num(arr[0]);
    let tempSum = 0;
    for (let i = 1; i < arr.length; i += 2) {
        let temp = percent2Num(arr[i + 1]);
        switch (arr[i]) {
            case '+':
                if (arr[i + 2] === 'x' || arr[i + 2] === '/') {
                    tempSum = result;
                    result = +temp;
                    break;
                }
                result += +temp;
                break;
            case '-':
                if (arr[i + 2] === 'x' || arr[i + 2] === '/') {
                    tempSum = result;
                    result = +temp;
                    break;
                }
                result -= +temp;
                break;
            case 'x':
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
        if (arr[i + 2] !== 'x' && arr[i + 2] !== '/') {
            result += tempSum;
            tempSum = 0;
        }
    }
    return result;
};

const percent2Num = val => {
    if (val && isNaN(val)) {
        if (val.slice(-1) === '%') {
            val = +val.slice(0, -1) / 100;
            return val;
        } else {
            return ' Cannot calculate from NaN! ';
        }
    }
    return +val;
};

export const limitText = ( text, limit ) => {
    if ( text.length > limit ) {
        return '...' + text.slice(text.length - limit);
    } 
    return text;

}