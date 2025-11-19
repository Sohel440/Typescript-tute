"use strict";
function printId(id) {
    if (typeof id === 'string') {
        console.log(id.toLocaleUpperCase());
    }
    else {
        console.log(id.toFixed());
    }
}
function describeUser(u) {
    if (u.role === 'admin') {
        console.log(u.role, 'admin user');
    }
    else {
        console.log(u.loyaltyPoints);
    }
}
const arrOfunion = ["a", 1, "b", 2];
const unionOfArrays = Math.random() > 0.1 ? ["a", "b"] : [1, 2, 33];
