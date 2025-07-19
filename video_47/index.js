let btn1 = document.querySelector("#btn1"); // Selects the element with ID "btn1"

btn1.onclick = () => {                      // Attaches an onclick event to that element
    alert("Button 1 clicked!");             // Shows an alert
    console.log("Button was clicked!");     // Logs a message to the console
    let a = 10;                             
    a++;                                     // Increments a (10 → 11)
    console.log(a);                         // Logs 11
// }
}
let div = document.querySelector("div"); // Selects the first <div> element
div.onmouseover = () => {                  // Attaches an onmouseover event to the <div>
    console.log("Mouse over event triggered!"); // Logs a message when the mouse hovers over the <div>
};