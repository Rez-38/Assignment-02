document.write(`<h2>The “Coin Flip” Game</h2>`);

let coinFlip;

let randomNum = Math.round(Math.random());

coinFlip = randomNum;
console.log(`coinFlip result: ${coinFlip}`);

// User choice
let choice = prompt(`Heads or Tails?`, `Heads/Tails`);
choice = choice.charAt(0).toUpperCase() + choice.slice(1);
console.log(`User choice: ${choice}`);
if (choice !== "Heads" && choice !== "Tails") {alert("No valid input, type in choice and check spelling"); location.reload()} else {

// Conditional Check
if (coinFlip < 1) {
    coinFlip = "Heads";
    console.log(coinFlip);
    
    // nested check - strChoice vs strHeads
    if (coinFlip == choice) {alert("The flip was heads and you chose heads...you win!")} else
        if (coinFlip !== choice) {alert("The flip was heads but you chose tails...you lose!")}
} else {
    coinFlip = "Tails"; 
    console.log(coinFlip);

    // nested check - strChoice vs strTails
    if (coinFlip !== choice) {alert("The flip was tails but you chose heads...you lose!")} else 
        if (coinFlip == choice) {alert("The flip was tails and you chose tails...you win!")}
}

}