// Function: A block of code that perform specific task

// function defination
function sayName() {
    console.log("My name is John");
}

// function call
sayName();

// Function with parameters
function greet(name) {
    console.log("Hello, " + name);
}
// Function call with argument
greet("Alice");

// Function with return value
function add(a, b) {
    return a + b;
}       
// Function call and store return value
let sum = add(5, 10);
console.log("Sum is: " + sum);

// Function with default parameters
function multiply(a, b = 1) {
    return a * b;
}       
// Function call with default parameter
let product = multiply(5);
console.log("Product is: " + product);

function printCounting(){
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}

printCounting();

// function with parameters
function printNumbers(start, end) {
    for (let i = start; i <= end; i++) {
        console.log(i);
    }
}
// function call with arguments
printNumbers(1, 5);

function getAverage(num1, num2){
    let average = (num1+num2) /2;
    console.log("Average is: " + average);
}
// function call with arguments
getAverage(20,30);

// arrow function
const square = (x) => {
    return x * x;
};
// arrow function call
let result = square(4);
console.log("Square is: " + result);

// arrow function
const greetUser = (name) => {
    console.log("Welcome, " + name);
};
// arrow function call
greetUser("Bob");
