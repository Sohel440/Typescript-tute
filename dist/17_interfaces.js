"use strict";
const hello = {
    id: '1',
    name: "sohel",
    createdAt: new Date(),
};
console.log(hello.createdAt.toLocaleDateString().substring(0, 10));
const person = {
    id: '1',
    name: "sohel",
    createdAt: new Date(),
    permission: ["edit", "Delete"]
};
console.log(person);
