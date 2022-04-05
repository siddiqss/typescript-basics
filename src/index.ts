// Basic
let id: number = 100;
let hello: string = "Hello";
let check: boolean = false;
let x: any = false;

x = "World";

let ids: number[] = [1, 2, 4, 5, 6, 7];
ids.push(10);
let arr: any = ["hello", 1, false];

// Tuple
let person: [number, string, boolean] = [1, "Talha", true];

// Tuple Array
let employee: [number, string][];
employee = [
  [1, "Adam"],
  [2, "Eve"],
];

// Union
let pid: number | string;
pid = 10;

// Enum

enum direction1 {
  up = 4,
  down,
  left,
  right,
}
console.log(direction1.down);

enum direction2 {
  up = "hello",
  down = "world",
  left = "whats",
  right = "up",
}
console.log(direction2.down);

// Objects

type User = {
  id: number;
  name: string;
};

const user: User = {
  id: 1,
  name: "Talha",
};

// Type Assertion
let cid: any = 10000000;

let customerId = <number>cid; // or cid as number

// Functions
function addNum(x: number, y: number): number {
  return x + y;
}

console.log(addNum(50, 50));

function log(msg: string | number): void{
    console.log(msg)
}

log('Hello TS');

// Interfaces
interface UserInterface {
    readonly id: number;
    name: string;
    age?: number; // ? denotes optional property
  };
  
  const user1: UserInterface  = {
    id: 1,
    name: "Talha",
  };

//   user1.id = 10;

interface MathFunc {
    (x:number, y:number):number
}

const add: MathFunc = (x:number, y:number)=> x+y

//  Classes

interface PersonInterface {
    id: number;
    name: string;
    register(): string
  };

class Person implements PersonInterface{
    id: number
    name: string

    constructor(id: number, name: string){
        this.id = id
        this.name = name
    }

    register(){
        return `${this.name} is now registered`
    }

}

const talha = new Person(1, 'Talha');
console.log(talha.register())
// Subclass
class Employee extends Person {
    position: string

    constructor(id: number, name: string, position: string){
        super(id,name)
        this.position = position
    }
}

const emp = new Employee(2,'Brad', 'Director')
console.log(emp.register());

// Generics

function getArray<T>(items: T[]): T[]{
    return new Array().concat(items);
}

const numArray = getArray([1,2,3,4]);
numArray.push(1);
// numArray.push('hello');
const strArray = getArray(['hello','world']);
// strArray.push(1);



