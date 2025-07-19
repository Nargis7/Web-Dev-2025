// DOM: document object model 
// The DOM (Document Object Model) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. In JavaScript, you use the DOM to access and manipulate HTML elements, like changing text, styles, or adding/removing elements dynamically. For example, in your code:
// console.log(window);
// window.console.log("Hello World");
// window.alert("Hello World");
// console.log(document);
// console.log(document.body);
// console.dir(document.body);

// document.body.style.backgroundColor = "red";
// document.body.childNodes[3].innerText = "Ankit";
// Accessing elements
// console.log(document); // The whole document
// console.log(document.body); // The body element
// console.dir(document.body); // Detailed body properties

// Changing styles
// document.body.style.backgroundColor = "red";

// Changing text
// document.body.innerText = "Hello World";

// Accessing by ID
// document.getElementById("myId").innerText = "Changed by ID";
// let heading = document.getElementById("heading");
// console.log(heading);

// Accessing by class
// document.getElementsByClassName("myClass")[0].style.color = "blue";
// let headings = document.getElementsByClassName("myClass");
// console.log(headings);



// Accessing by tag
// document.getElementsByTagName("h1")[0].innerText = "New Heading";
// let para = document.getElementsByTagName("p");
// console.log(para);



// Creating new elements
// let newDiv = document.createElement("div");
// newDiv.innerText = "I am a new div!";
// document.body.appendChild(newDiv);

// Removing elements
// let elem = document.getElementById("removeMe");
// elem.remove();

// Adding event listeners
// document.getElementById("btn").addEventListener("click", function() {
//   alert("Button clicked!");
// });

// Selector :querySelector is a DOM method that returns the first element that matches a CSS selector.
// let firstPara = document.querySelector("p");
// console.log(firstPara); // Prints the first <p> element

// let myClassElem = document.querySelector(".myClass");
// console.log(myClassElem); // Prints the first element with class "myClass"

// let myIdElem = document.querySelector("#myId");
// console.log(myIdElem); // Prints the element with id "myId"
// let firstPara = document.querySelectorAll("p");
// console.log(firstPara); // Prints the first <p> element
// let firstPara = document.querySelector("p");
// console.log(firstPara); // Prints the first <p> element

// let div = document.querySelector("div");
// console.dir(div); // Prints the first <div> element

// let heading = document.querySelector("h1");

// let h2 = document.querySelector("h2");
// console.dir(h2.innerText); 
// h2.innerText = h2.innerText + " from apna college students"; 

// Prints the first <h2> 

let divs = document.querySelectorAll(".box");
// console.log(divs[0]); 
// // Prints all elements with class "box"
let idx = 1;
for(let div of divs) {
    // console.log(div);
    // console.dir(div.innerText);
    div.innerText =     `nargis div ${idx}`; // Updates text of each div
    idx++;
}
// divs[0].innerText = "Updated first div";
//  // Updates text of the first div
//  divs[1].innerText = "Updated second div"; // Updates text of the second div
//  divs[2].innerText = "Updated third div"; // Updates text of the third div


























// // innerText: Gets/sets the text inside an element
// let heading = document.getElementById("heading");
// console.log(heading.innerText); // Prints text inside #heading
// heading.innerText = "New Heading Text";

// // innerHTML: Gets/sets HTML content inside an element
// let div = document.getElementById("myDiv");
// console.log(div.innerHTML); // Prints HTML inside #myDiv
// div.innerHTML = "<b>Bold Text</b>";

// // style: Change CSS styles
// let para = document.querySelector("p");
// para.style.color = "blue"; // Changes text color to blue

// // id: Gets/sets the element’s id
// console.log(para.id); // Prints the id of the <p> element
// para.id = "newParaId";

// // className: Gets/sets the element’s class
// console.log(para.className); // Prints class name(s)
// para.className = "highlight";

// // value: Gets/sets value of input elements
// let input = document.getElementById("myInput");
// console.log(input.value); // Prints input value
// input.value = "New Value";

// // src: Gets/sets image source
// let img = document.getElementById("myImg");
// console.log(img.src); // Prints image source
// img.src = "new-image.jpg";

// // href: Gets/sets link URL
// let link = document.getElementById("myLink");
// console.log(link.href); // Prints link URL
// link.href = "https://www.example.com";

// // children: Returns child elements
// console.log(div.children); // Prints HTMLCollection of child elements

// // parentElement: Returns parent element
// console.log(para.parentElement); // Prints parent of <p> element