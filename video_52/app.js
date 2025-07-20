// // const URL = "https://cat-fact.herokuapp.com/facts";
// const URL = "https://official-joke-api.appspot.com/jokes/random";
// // const factPara = document.querySelector("#fact");


// const getFacts = async () => {
//     console.log("getting data....");
//     let response = await fetch(URL);
//     console.log(response);
//     let data = await response.json();
//     // console.log(data[0].text);
//     // console.log(data);
//     // factPara.innerText = data[].text;
//           console.log("Joke: " + data.setup);
//         console.log("Punchline: " + data.punchline);
//     // document.querySelector("#joke").innerText = data.setup;
//     // document.querySelector("#punchline").innerText = data.punchline;
//     factPara.innerText = data.setup + " - " + data.punchline;
    
// };

// const URL = "https://official-joke-api.appspot.com/jokes/random";
// const factPara = document.querySelector("#fact");

// const getFacts = async () => {
//     console.log("getting data....");
//     let response = await fetch(URL);
//     let data = await response.json();
//     console.log(data);
//     factPara.innerText = `${data.setup} — ${data.punchline}`;
// };

// getFacts(); // Don't forget to call the function

const URL = "https://catfact.ninja/fact";
 const factPara = document.querySelector("#fact");
 const btn = document.querySelector("#btn");


const getFacts = async () => {
    console.log("getting data.....");
    let response = await fetch(URL);
    let data = await response.json();
    console.log(data);
    factPara.innerText = data.fact;
};

btn.addEventListener("click", getFacts);