// Arrays: collection of elements /items
// - Can be of any type
// - Can be of different types
// - Can be of any length
// - Can be empty
//  stack: boolean , integer, string,
// heap: function, object, array

// object is a collection of key-value pairs
// - key is a string
// - value can be of any type
// - can be empty
// - can be of any length

let fruits = ["apple", "banana", "orange"];
console.log(fruits); // ["apple", "banana", "orange"]

let object = {
    name : "John",
    age: 30,
    isStudent: false,
    greet: function() {
        console.log("Hello, " + this.name);
    }
}
console.log(object); // { name: 'John', age: 30, isStudent: false }
console.log(object.name); // John
console.log(object.age); // 30

// shallow copy
let shallowCopy = object;
shallowCopy.name = "Alice";
console.log(shallowCopy.name); // Alice
console.log(object.name); // Alice
// deep copy
let deepCopy = JSON.parse(JSON.stringify(object));  
deepCopy.name = "Bob";
console.log(deepCopy.name); // Bob
