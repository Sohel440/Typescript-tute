"use strict";
function solve(n) {
    return n;
}
// console.log(solve(89));
// console.log(solve("sohel"));
function funArr(arr) {
    return arr[1];
}
// console.log(funArr([1,2,23,45]));
// console.log(funArr(["1","2","23","45"]));
function wrap(value) {
    const mp = new Map();
    mp.set(value, 12);
    return mp;
}
const mpp = wrap(90);
// mpp.forEach((n,index)=>{
//     console.log(n, index);
// })
for (let [key, value] of mpp) {
    console.log(key, value);
}
// console.log(typeof wrap(89));
