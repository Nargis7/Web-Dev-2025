let btn1 = document.querySelector("#btn1"); // Selects the element with ID "btn1"

// btn1.onclick = (evt) => {
//     console.log(evt);
//     console.log(evt.type);    
//     console.log(evt.target);
//     console.log(evt.clientX, evt.clientY);                  // Attaches an onclick event to that element
//     // alert("Button 1 clicked!");             // Shows an alert
//     // console.log("Button was clicked!");     // Logs a message to the console
//     // let a = 10;                             
//     // a++;                                     // Increments a (10 → 11)
//     // console.log(a);                         // Logs 11
// // }
// }
// let div = document.querySelector("div"); // Selects the first <div> element
// div.onmouseover = () => {                  // Attaches an onmouseover event to the <div>
//     console.log("Mouse over event triggered!"); // Logs a message when the mouse hovers over the <div>
// };
// event handlers are functions that run when a specific event occurs

// event listeners: node.addEventListener(event,callback)
// node.removeEventListener(event,callback)
// note: the callback reference should be the same to remove

btn1.addEventListener("click" , (evt) => {
    console.log("button1 was clicked - handler 1");
    // console.log(evt);
    // console.log(evt.type);
});
btn1.addEventListener("click" , () => {
    console.log("button1 was clicked - handler 2");
});
const handler3 = () => {
     console.log("button1 was clicked - handler 3");
}
btn1.addEventListener("click" , handler3);



btn1.addEventListener("click" , () => {
    console.log("button1 was clicked - handler 4");
});
// btn1.removeEventListener("click", () => {
//     console.log("button1 was clicked - handler 2");
// }); // This will not remove the handler because the reference is different

btn1.removeEventListener("click", handler3); // This will remove handler3 because the reference is the same

