"use strict";
function ExtractUserInfo(id, isRxtraInfo = false) {
    return {
        id,
        name: "sohel",
        log: isRxtraInfo ? "details" : undefined
    };
}
const argsInfo = ['u1', true];
const resturnTypeInfo = ExtractUserInfo(...argsInfo);
console.log(resturnTypeInfo);
class PersonN1 {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        return `I am this ${this.name}`;
    }
}
const resultInfo1 = ["sohel", 22];
const abc = new PersonN1(...resultInfo1);
console.log(abc.greet());
