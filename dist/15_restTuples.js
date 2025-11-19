"use strict";
function sumAllNumber(...xs) {
    return xs.reduce((s, n) => s + n, 0);
}
;
console.log(sumAllNumber(1, 2, 3, 3));
function add(x, y) {
    console.log(x, y);
}
const point = [1, 2];
add(...point);
