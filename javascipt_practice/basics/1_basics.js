/**
 * Data Types
 */

/**
 * 
 * Primitives (stored by value, immutable): string, number, boolean, null, undefined, symbol, bigint
 * 
 *  JavaScript has 7 primitive data types. A primitive is data that is not an object and has no methods or properties. 
 * 
 * All primitives are immutable (their values cannot be changed, though the variables holding them can be reassigned).
 */

//STRING
/**
 * Represents textual data enclosed in single quotes, double quotes, or backticks.
 */
let name = "Alice";
let greeting = `Hello, ${name}`
console.log(greeting)

console.log(typeof(name))
console.log(typeof(greeting))

//NUMBER
/**
 * Represents both integer and floating-point numbers. 
 * It also includes special numeric values: Infinity, -Infinity, and NaN (Not-a-Number).
 */
let x1 = NaN;
let x2 = Infinity;
let x3 = -Infinity;
let x4 = 130;
let x5 = Math.PI;
let x6 = 3.1565445;

console.log(x1)
console.log(x2)
console.log(x3)
console.log(x4)
console.log(x5)
console.log(x6)

console.log(typeof(x1))
console.log(typeof(x2))
console.log(typeof(x3))
console.log(typeof(x4))
console.log(typeof(x5))
console.log(typeof(x6))


//BIGINT
/**
 * Represents integers of arbitrary precision, allowing safe storage and operations on large integers beyond the number safe limit ($2^{53} - 1$). Created by appending n to an integer.
 */
let largeNumber = 9007199254740991n;
console.log(largeNumber)
console.log(typeof(largeNumber))

//BOOLEAN
/**
 * Represents a logical entity with two values: true or false.
 */
let isActive = true;
let isCompleted = false;

console.log(isActive)
console.log(isCompleted)
console.log(typeof(isActive))
console.log(typeof(isCompleted))

//UNDEFINED
/**
 * Indicates that a variable has been declared but has not yet been assigned a value.
 */
let result;
console.log(result); // undefined
console.log(typeof(result))

//NULL
/**
 *
Represents the intentional absence of any object value. It is explicitly assigned to indicate "no value."
 */
let selectedUser = null;
console.log(selectedUser)
console.log(typeof(selectedUser))

//SYMBOL
/**
 * Represents a unique and anonymous value, often used as unique keys for object properties to avoid collisions.
 */
let id = Symbol("id");
console.log(id);
console.log(typeof(id))







/**
 * Reference types (stored by reference, mutable): object (includes arrays, functions, dates, etc.)
 */

