"use strict";
// Basic
let id = 100;
let hello = "Hello";
let check = false;
let x = false;
x = "World";
let ids = [1, 2, 4, 5, 6, 7];
ids.push(10);
let arr = ["hello", 1, false];
// Tuple
let person = [1, "Talha", true];
// Tuple Array
let employee;
employee = [
    [1, "Adam"],
    [2, "Eve"],
];
// Union
let pid;
pid = 10;
// Enum
var direction1;
(function (direction1) {
    direction1[direction1["up"] = 4] = "up";
    direction1[direction1["down"] = 5] = "down";
    direction1[direction1["left"] = 6] = "left";
    direction1[direction1["right"] = 7] = "right";
})(direction1 || (direction1 = {}));
console.log(direction1.down);
var direction2;
(function (direction2) {
    direction2["up"] = "hello";
    direction2["down"] = "world";
    direction2["left"] = "whats";
    direction2["right"] = "up";
})(direction2 || (direction2 = {}));
console.log(direction2.down);
const user = {
    id: 1,
    name: "Talha",
};
// Type Assertion
let cid = 10000000;
let customerId = cid; // or cid as number
// Functions
function addNum(x, y) {
    return x + y;
}
console.log(addNum(50, 50));
function log(msg) {
    console.log(msg);
}
log('Hello TS');
;
const user1 = {
    id: 1,
    name: "Talha",
};
const add = (x, y) => x + y;
;
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const talha = new Person(1, 'Talha');
console.log(talha.register());
// Subclass
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(2, 'Brad', 'Director');
console.log(emp.register());
// Generics
function getArray(items) {
    return new Array().concat(items);
}
const numArray = getArray([1, 2, 3, 4]);
numArray.push(1);
// numArray.push('hello');
const strArray = getArray(['hello', 'world']);
// strArray.push(1);
