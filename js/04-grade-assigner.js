document.write(`<h2>The “Grade Assigner” Application</h2>`);

let score = prompt("Enter your score to get a grade...", "1 - 100");
console.log(`score: ${score}`);

switch (true) {
    case score < 1 || score > 100:
        alert("Invalid input, must be a number between 1 and 100");
        location.reload();
    case score >= 90:
        console.log("You received an A");
        break;
    case score >= 80:
        console.log("You received a B");
        break;
    case score >= 70:
        console.log("You received a C");
        break;
    case score >= 60: 
        console.log("You received a D");
        break;
    default:
        console.log("You received an F");
}