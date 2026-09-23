console.log("Hello world!");

let integer;
let integer2;

integer = prompt("Value for integer 1...");
integer2 = prompt("Value for integer 2...");

if (integer == integer2) {
    alert('Values can\'t be equal to each other, choose again... ');
    location.reload();
}

if (integer > integer2) {
    document.write(`Here is the largest value: ${integer} (integer)`);
} else {
    document.write(`Here is the largest value: ${integer2} (integer2)`);
}