// let boxes = document.querySelectorAll(".box"); // Selects all elements with class "box"
// let resetBtn = document.querySelector("#reset"); // Selects the element with ID "resetBtn"
// let newGame = document.querySelector("#newGame"); // Selects the element with ID "newGameBtn"
// let msgContainer = document.querySelector(".msg-Container"); // Selects the element with ID "msgContainer"
// let msg = document.querySelector("#msg"); // Selects the element with ID "msg"

// let turnO = true; // Initializes the turn to "O"

// const winPatterns = [
//     [0, 1, 2], // Row 1
//     [0, 3, 6], // Row 2 
//     [0, 4, 8], // Row 3
//     [1, 4, 7], // Column 1
//     [2, 5, 8], // Column 2
//     [2, 4, 6], // Diagonal 1
//     [3, 4, 5], // Column 3
//     [6, 7, 8]  // Column 4
// ];

// boxes.forEach((box, index) => {
//     box.addEventListener("click", () => {
//         if (turnO) { // Checks if it's O's turn
//             box.innerText = "O"; // Sets the text to "O"
//             turnO = false; // Toggles the turn
//             // checkWin(); // Calls the function to check for a win
//         }else {
//             box.innerText = "X"; // Sets the text to "X"
//             turnO = true; // Toggles the turn
//             // checkWin(); // Calls the function to check for a win
//         }
//         box.disabled = true; // Disable the box after it's clicked
//         checkWin(); // Calls the function to check for a win
//     });
// });
// const showWinner = (winner) => {
//     msg.innerText = `congratulation, winner is ${winner}`; // Displays the winner
//     msg-Container.classList.remove("hide"); // Removes the "hide" class to show the message
// }

// const checkWin = () => {
//     for(let pattern of winPatterns){
//      let pos1Val = boxes[pattern[0]].innerText; // Gets the value of the first position in the pattern
//      let pos2Val = boxes[pattern[1]].innerText; // Gets the value
//      let pos3Val = boxes[pattern[2]].innerText;

//      if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
//         if(pos1Val === pos2Val && pos2Val === pos3Val){ // Checks if all three positions have the same value
//             console.log("winner" , pos1Val);
//             showWinner(pos1Val); // Calls the function to show the winner
//         }
//      }
//     }
// };

let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newGameBtn = document.querySelector("#newGame");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; // O starts first
let count = 0; // total moves

const winPatterns = [
  [0, 1, 2], // Row 1
  [3, 4, 5], // Row 2
  [6, 7, 8], // Row 3
  [0, 3, 6], // Column 1
  [1, 4, 7], // Column 2
  [2, 5, 8], // Column 3
  [0, 4, 8], // Diagonal 1
  [2, 4, 6], // Diagonal 2
];

const checkWin = () => {
  for (let pattern of winPatterns) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;

    if (pos1 !== "" && pos1 === pos2 && pos2 === pos3) {
      showWinner(pos1);
      return true;
    }
  }
  return false;
};

const showWinner = (winner) => {
  msg.innerText = `🎉 Congratulations! Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableAllBoxes();
};

const disableAllBoxes = () => {
  boxes.forEach((box) => box.disabled = true);
};

const enableAllBoxes = () => {
  boxes.forEach((box) => {
    box.innerText = "";
    box.disabled = false;
  });
  msgContainer.classList.add("hide");
  turnO = true;
  count = 0;
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (box.innerText !== "") return;

    box.innerText = turnO ? "O" : "X";
    box.disabled = true;
    turnO = !turnO;
    count++;

    let win = checkWin();
    if (!win && count === 9) {
      msg.innerText = "😐 It's a Draw!";
      msgContainer.classList.remove("hide");
    }
  });
});

resetBtn.addEventListener("click", enableAllBoxes);
newGameBtn.addEventListener("click", enableAllBoxes);
