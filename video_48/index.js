let modeBtn = document.querySelector("#mode"); // Selects the element with ID "modeBtn"
let currMode = "light"; // Initializes the current mode to "light"
let body = document.querySelector("body"); // Selects the body element
modeBtn.addEventListener("click", () => {
    // console.log("you are trying to change the mode"); // Logs a message when the mode button is clicked
    // document.body.classList.toggle("dark-mode"); // Toggles the "dark-mode" class on the body element
    // modeBtn.textContent = document.body.classList.contains("dark-mode") ? "Light Mode" : "Dark Mode"; // Updates button text based on mode
    if(currMode === "light"){
        currMode = "dark"; // Changes current mode to "dark"
        // document.querySelector("body").style.backgroundColor = "black"; // Sets background color to black
        // document.querySelector("body").classList.add("dark"); // Adds "dark" class to body
        body.classList.add("dark"); // Adds "dark" class to body
        body.classList.remove("light"); // Removes "light" class from body
    }else{
        currMode = "light"; // Changes current mode to "light"
        // document.querySelector("body").style.backgroundColor = "white"; // Sets background color to white
        // document.querySelector("body").classList.remove("light"); // Removes "dark" class from body
        body.classList.add("light"); // Adds "light" class to body
        body.classList.remove("dark"); // Removes "dark" class from body
    }
    console.log(currMode); // Logs the current mode
}); // Attaches a click event listener to the mode button