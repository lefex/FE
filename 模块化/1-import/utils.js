export function getUserName() {
    return 'suyan';
}
export class Suyan {
    constructor() {
        console.log('suyan created!');
    }
}
export let age = 24, name = 'suyan';

const curTime = () => {
    return new Date();
}
const DEFAULT_AGE = 10;
export {
    curTime,
    DEFAULT_AGE as dAge
};

export default function welcome() {
    return 'welcome to learn js module by suyan';
}

export { join } from './stringUtils';