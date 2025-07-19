// let div = document.querySelector("div");
// console.log(div); // Prints the first <div> element
// let id = div.getAttribute("id")
// console.log(id);

// let name = div.getAttribute("name")
// console.log(name);

// let para = document.querySelector("p");
// // console.dir(para.getAttribute("class")); // Prints the first <p> element
// console.log(para.setAttribute("class", "newClass")); // Sets a new class for the <p> element

// style ++++++++++++++++++++++ in js +++++++++++++++++
// let div = document.querySelector("div");
// div.style.backgroundColor = "green"; 
// // Changes the background color of the first <div> element
// div.style.fontSize = "20px";
// div.innerText = "hello world";


// +++++++++++++++++++ insert element +++++++++++++++++++++
// let newbutton = document.createElement("button");
// newbutton.innerText = "Click Me!";
// // let div = document.querySelector("div");    
// let p = document.querySelector("p");    
// // div.appendChild(newbutton); // Appends the button to the <div>
// // div.prepend(newbutton); // Prepends the button to the <div>
// // div.before(newbutton); // Inserts the button before the <div>
// p.after(newbutton); // Inserts the button after the <p>
// // newbutton.innerText = "Click Me!";

// let heading = document.createElement("h1");
// heading.innerHTML = "<i>hi i m new heading</i>";

// document.querySelector("body").prepend(heading); // Prepends the new heading to the <body>

// let para = document.querySelector("p");
// para.remove(); // Removes the <p> element from the document

// heading.remove(); // Removes the new heading from the document

let newbtn = document.createElement("button");
newbtn.innerText = "Click Me!";

newbtn.style.color = "white";
newbtn.style.backgroundColor = "blue";


document.querySelector("body").prepend(newbtn); // Prepends the new button to the <body>



let para = document.querySelector("p");
// para.getAttribute("class"); // Gets the class attribute of the <p> element
// para.setAttribute("class", "newClass"); // Sets a new class for the <p overwrite


para.classList.add("newClass"); // Adds a new class to the <p> element
// para.classList.remove("newClass"); // Removes the class from the <p> element