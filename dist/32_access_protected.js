"use strict";
class Animal {
    energy = 23;
    eat(amount) {
        this.energy = Math.min(100, this.energy + amount);
    }
}
class dog extends Animal {
    run() {
        this.energy -= 10;
    }
    status() {
        return this.energy;
    }
}
const d = new dog();
d.eat(20);
d.run();
console.log(d.status());
