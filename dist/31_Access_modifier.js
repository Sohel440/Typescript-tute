"use strict";
class Bank {
    owner;
    balance = 0;
    #otp = 12345;
    constructor(owner) {
        this.owner = owner;
    }
    deposite(amt) {
        if (amt <= 0)
            throw new Error("amount must be positive");
        this.balance += amt;
    }
    getBalance() {
        return this.balance;
    }
    verify(code) {
        return this.#otp === code;
    }
}
const acc = new Bank('Sohel');
acc.deposite(6000);
console.log(acc.getBalance());
