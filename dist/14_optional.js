"use strict";
function greetPersonOption(name) {
    const upper = name ? name?.toUpperCase() : "Guest";
    return `hello ${upper}`;
}
;
console.log(greetPersonOption("sohel"));
console.log(greetPersonOption());
// console.log();
function greet(name = "Guest") {
    return `Hello ${name.toLocaleUpperCase()}.`;
}
function gg(name, roll, year) {
    console.log(name, roll, year);
}
gg("sohel");
console.log(greet());
console.log(greet("Mollick"));
