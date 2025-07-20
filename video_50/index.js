// synchronous: synchronous means the code run in a particular sequence of instructions givn in the program.
// each instruction is executed one after another.
// each instruction waits for the previous instructions to complete its execution.
// function hello() {
//     console.log("hello");
// }
// setTimeout(hello, 2000); // this will run after 2 seconds
// setTimeout(() => {
//     console.log("hello");
// }, 4000);

// asyncronous: due to synchronous programming, sometimes important instructions get blocked due to some previous instuction, which causes a delay in the ui. 
// asyncronous programming allows the code to run in the background, so that the ui is not blocked.
// this is done by using callbacks, promises, and async/await.


// callbacks: a callback is a function passed as an argument to another function
// This technique allows a function to call another function

// A callback function can run after another function has finished

// +++++++++++++++callback example++++++++++++++++++
// function greet(name, callback){
//     console.log("hello " + name);
//     callback();
// }
// function sayBye(){
//     console.log("bye");
// }

// greet("nargis", sayBye);


// +++++++++++++++callback hell++++++++++++++++++
// function getData(dataId, getNextData){
//     setTimeout(() => {
//         console.log("data" , dataId);
//         if(getNextData){
//             getNextData();
//         }
//     }, 2000);
// }

// callback hell : nested callback : this type of programming becomes dificult to manage and understand.

// getData(1, () =>{
//     console.log("getting data 2.......");
//     getData(2, () => {
//         console.log("getting data 3 ..........");
//         getData(3, ()=> {
//             console.log("getting data 4..........");
//             getData(4);
//         });
//     });
// });

// +++++++++++++promises++++++++++++++++++
// A Promise in JavaScript represents the eventual completion (or failure) of an asynchronous operation and lets you handle the result when it’s ready.

// 🔹 Why Promises?
// Callbacks can get messy when you nest them deeply — this is known as callback hell. Promises solve that by:

// Making code cleaner

// Supporting chaining of .then() calls

// Making error handling easier with .catch()

// A Promise can be in one of three states:
// 1. Pending: The initial state, neither fulfilled nor rejected.
// 2. Fulfilled: The operation completed successfully.
// 3. Rejected: The operation failed.

// let promise = new Promise((resolve, reject) => {
//     let success = true;
//     if(success){
//         console.log("Task completed");
//     }else{
//         console.log("Task failed");
//     }
// });

// let promise = new Promise((resolve,reject) => {
//     console.log("i m a promises");
//     reject("some error occurred");
// });
// 🔹 Summary:Callback Hell 😵	Promise 🌟
// Hard to read & manage	|  Clean chaining
// No error catching	|  .catch() for errors
// Deeply nested functions	|  Flat structure

// +++++++++++++Promises chaining++++++++++++++++++

// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {   


function step1(){
    return new Promise((resolved)=>{
        setTimeout(() => {
            resolved("step 1 : woke up");
        }, 2000);
    })
}

function step2(prev){
    return new Promise((resolved) =>{
        setTimeout(() =>{
            resolved( prev + "-> step 2 : brushed teeth");
        }, 2000);
    });
}

function step3(prev){
    return new Promise((resolved) =>{
        setTimeout(() =>{
            resolved(prev + "-> step 3 : took a shower");
        }, 2000);
    });
}

// step1()
//  .then(step2)
//  .then(step3)
//  .then((finalMsg) =>{
//     console.log("result" + finalMsg);
//  } );

step1()
  .then(step2)
  .then(() => {
    throw new Error("Kuch galat ho gaya!");
  })
  .then(step3)
  .catch((err) => {
    console.log("Error caught:", err.message);
  });
