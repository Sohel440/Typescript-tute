"use strict";
class Temp {
    #c = 0;
    constructor(c) {
        this.celsious = c;
    }
    get cel() {
        return this.#c;
    }
    set celsious(value) {
        this.#c = value;
    }
    get ferhenhite() {
        return (this.#c * 9) / 5 + 32;
    }
}
const t = new Temp(20);
console.log(t.cel);
t.celsious = 24;
console.log(t.cel);
