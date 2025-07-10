// Strings 
// let firstName = "Nargis";
let lastName = "Perween";

let name = `nargis
perween 
love 
to 
solve 
js`

console.log(name);

let firstName = new String("Nargis Perween");

console.log(firstName); //[String: 'Nargis Perween']

let  op1 = 'English';
let op2 = 'Hindi';

console.log(`i love speaking ${op1} and ${op2}.`); //i love speaking English and Hindi.
console.log(op2.length); //5
console.log(op1.toUpperCase()); //ENGLISH
console.log(op2.toLowerCase()); //hindi
console.log(op1.trim()); //remove white spaces

let str = 'Nargis';
console.log(str[2]); //r
console.log(str.substring(2));//rgis
console.log(str.substring(1,3));//ar ending index not considered!

let sentence = 'hello jee kaise hai sare';
let words = sentence.split(' ');
console.log(words); //[ 'hello', 'jee', 'kaise', 'hai', 'sare' ]
