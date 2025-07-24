// const BASE_URL = "https://v6.exchangerate-api.com/v6/8a83f95b1f65bd4885568dee/latest";

// const dropdowns = document.querySelectorAll(".dropdown select");
// const btn = document.querySelector("form button");
// const fromCurr = document.querySelector(".from select");
// const toCurr = document.querySelector(".to select");
// const msg = document.querySelector(".msg");

// // for (code in countryList) {
// //   console.log(code , countryList[code]); // This will log each currency code in the countryList object
// // }
// // Example countryList object. Replace with your actual countryList if needed.
// // const countryList = {
// //   USD: "US",
// //   INR: "IN",
// //   EUR: "EU",
// //   AUD: "AU",
// //   // Add more currency-country mappings as needed
// // };

// for( let select of dropdowns){
//   for(currCode in countryList){
//     let newOption = document.createElement("option");
//     newOption.innerText = currCode;
//     newOption.value = currCode;
//     if (select.name === "from" && currCode === "USD") {
//       newOption.selected = "selected";
//     } else if (select.name === "to" && currCode === "INR") {
//       newOption.selected = "selected";
//     }
//     select.append(newOption);
//    }
//   select.addEventListener("change", (evt) => {
//     updateFlag(evt.target);
//   });
// }
 
// const updateFlag = (element) => {
//   let currCode = element.value;
//   let countryCode = countryList[currCode];
//   let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
//   let img = element.parentElement.querySelector("img");
//   if (img) {
//     img.src = newSrc;
//   }
// };
// btn.addEventListener("click", async (evt) => { // Prevent form submission
//   evt.preventDefault(); 
//   // Prevent form submission
//   updateExchangeRate();
// }
// //   let amount = document.querySelector(".amount input"); // Get the amount input field
// //   let amtVal = amount.value; // Get the value of the amount input field
// //   // console.log(amtVal);
// //   if (amtVal === "" || amtVal < 1) { // Check if amount is empty or less than 1
// //     amtVal = 1; // Set default value to 1
// //     amount.value = "1"; // Update input field to show 1
// //   }
// //   // console.log(fromCurr.value, toCurr.value);
// //   // Construct the API URL with selected currencies
// // //   const URL =  `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
// // //    // Construct the API URL with selected currencies
// // //    let response =  await fetch(URL)
// // //    let data = await response.json(); // Parse the JSON response
// // //    console.log(data);
// // //   //  console.log(response);
// // // });


// //  const URL = `${BASE_URL}/${fromCurr.value}`;
// //   // try {
// //     let response = await fetch(URL);
// //     let data = await response.json();
// //     // console.log(data)
// //     let rate = data.conversion_rates[toCurr.value];
// //     let finalAmount = amtVal * rate;
// //     msg.innerText =  msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
// //     //  console.log(rate)
// //     // let finalAmount = (amtVal * rate).toFixed(2);
// //   //   msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
// //   // } catch (error) {
// //   //   msg.innerText = "Something went wrong. Please try again!";
// //   // }
// // });


// // for (let select of dropdowns) {
// //   for (currCode in countryList) {
// //     let newOption = document.createElement("option");
// //     newOption.innerText = currCode;
// //     newOption.value = currCode;
// //     if (select.name === "from" && currCode === "USD") {
// //       newOption.selected = "selected";
// //     } else if (select.name === "to" && currCode === "INR") {
// //       newOption.selected = "selected";
// //     }
// //     select.append(newOption);
// //   }

// //   select.addEventListener("change", (evt) => {
// //     updateFlag(evt.target);
// //   });
// // }

// const updateExchangeRate = async () => {
//   let amount = document.querySelector(".amount input");
//   let amtVal = amount.value;
//   if (amtVal === "" || amtVal < 1) {
//     amtVal = 1;
//     amount.value = "1";
//   }
//   const URL = `${BASE_URL}/${fromCurr.value}`;
//   try {
//     let response = await fetch(URL);
//     let data = await response.json();
//     let rate = data.conversion_rates[toCurr.value];
//     let finalAmount = (amtVal * rate).toFixed(2);
//     msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
//   } catch (error) {
//     msg.innerText = "Something went wrong. Please try again!";
//   }
// };

// // const updateFlag = (element) => {
// //   let currCode = element.value;
// //   let countryCode = countryList[currCode];
// //   let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
// //   let img = element.parentElement.querySelector("img");
// //   if (img) {
// //     img.src = newSrc;
// //   }
// // };

// // btn.addEventListener("click", (evt) => {
// //   evt.preventDefault();
// //   updateExchangeRate();
// // });

// window.addEventListener("load", () => {
//   updateExchangeRate();
// });

// +++++++++++++++++++++++JAVASCRIPT CODE++++++++++++++++++++++++++++
// // Base URL for the Exchange Rate API
// ➡️ This is the main API endpoint you'll use to get the latest exchange rates.

const BASE_URL = "https://v6.exchangerate-api.com/v6/8a83f95b1f65bd4885568dee/latest";


// // Selecting required DOM elements
const dropdowns = document.querySelectorAll(".dropdown select");// All dropdowns (from & to currency)
const btn = document.querySelector("form button");  // Get Exchange Rate button
const fromCurr = document.querySelector(".from select");  // From currency dropdown
const toCurr = document.querySelector(".to select");  // To currency dropdown
const msg = document.querySelector(".msg");// Area to display result message

// Sample countryList (use your actual one if different)
// const countryList = {
//   USD: "US",
//   INR: "IN",
//   EUR: "EU",
//   GBP: "GB",
//   JPY: "JP",
//   AUD: "AU",
//   CAD: "CA"
// };

for (let select of dropdowns) {
  for (currCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;
    if (select.name === "from" && currCode === "USD") {
      newOption.selected = "selected";
    } else if (select.name === "to" && currCode === "INR") {
      newOption.selected = "selected";
    }
    select.append(newOption);// Add option to dropdown
  }
  // When user changes selection, update the flag icon
  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });
}

const updateFlag = (element) => {
  let currCode = element.value; // Get currency selected (e.g., USD)
  let countryCode = countryList[currCode]; // Get country code (e.g., US)
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`; // Flag UR
  let img = element.parentElement.querySelector("img");// Select the image next to dropdown
  if (img) {
    img.src = newSrc;// Change the flag image
  }
};

btn.addEventListener("click", async (evt) => {
  evt.preventDefault(); // Prevent form from submitting or reloading page
  updateExchangeRate();// Call function to fetch and display exchange rate
});

const updateExchangeRate = async () => {
  let amount = document.querySelector(".amount input");// Get amount input field
  let amtVal = amount.value;// Get the entered value
    // If no value or value < 1, set default value
  if (amtVal === "" || amtVal < 1) {
    amtVal = 1;
    amount.value = "1";
  }

  const URL = `${BASE_URL}/${fromCurr.value}`; // Build API URL with base currency (e.g., USD)
  try {
    let response = await fetch(URL);  // Send API request
    let data = await response.json();     // Parse JSON response
    let rate = data.conversion_rates[toCurr.value];// Get rate from USD → selected "to" currency

    let finalAmount = (amtVal * rate).toFixed(2);// Calculate and round to 2 decimal places
    msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`; // Show result on screen
  } catch (error) {
    msg.innerText = "Something went wrong. Please try again!";    // Handle any error (like network issue or API failure)
  }
};

window.addEventListener("load", () => {
  updateExchangeRate();// Run when the page loads to show initial rate
});


// const btnn = document.getElementById("toggle-theme");

// btnn.onclick = () => {
//   document.body.classList.toggle("dark");
//   // Change button text
//   if (document.body.classList.contains("dark")) {
//     btnn.textContent = "☀️ Light Mode";
//   } else {
//     btnn.textContent = "🌙 Dark Mode";
//   }
// };
