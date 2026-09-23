document.write(`<h2>The World Translator</h2>`);
let lang = prompt("Choose a language code from the following options...", "es, de, en, fr");


if (lang == "es") {
    document.write(`Hello World translated in Spanish is: Hola mundo`);
    console.log("Hola mundo!");
} else 

if (lang == "de") {
    document.write(`Hello World translated in Deutsch is: Hallo welt`);
    console.log("Hallo welt!");
} else

if (lang == "en") {
    document.write(`Hello World!`);
    console.log("Hello world!");
} else 

if (lang == "fr") {
    document.write(`Hello World translated in French is: Bonjour le monde`);
    console.log("Bonjour le monde!");
} else {document.write(`Hello World!`); console.log("Hello world!")}