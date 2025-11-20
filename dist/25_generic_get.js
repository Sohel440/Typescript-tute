"use strict";
function getUser7(arr, key) {
    return arr[key];
}
const details = { id: "1", name: "s" };
console.log(getUser7(details, 'email'));
function setUser7(arr, key, value) {
    arr[key] = value;
}
(setUser7(details, 'email', "sbnammallick@gmail.com"));
console.log(getUser7(details, 'email'));
