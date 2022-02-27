/**
 * 在 js 中我们使用 object 来组合对象，在 TS 中可以使用 object types
 * https://www.typescriptlang.org/docs/handbook/2/objects.html
 */

function greet(person: {name: string; age: number}) {
    return `Hello ${person.name}, age ${person.age}`;
}

// 也可以直接这样写
interface Person {
    name: string;
    age: number;
}
function greet2(person: Person) {
    return `Hello ${person.name}, age ${person.age}`;
}

// 也可以这样写
type PersonType = {
    name: string;
    age: number;
}
function greet3(person: PersonType) {
    return `Hello ${person.name}, age ${person.age}`;
}