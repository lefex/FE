import {isDigit} from '../element/util';

export function add(a, b) {
    if (!isDigit(a) || !isDigit(b)) {
        return null;
    }
    let sum = a + b;
    return sum;
}

const sum = add(7, 8);
console.log(sum);