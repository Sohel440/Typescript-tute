"use strict";
function decribe(u) {
    if ('permission' in u) {
        return `Admin`;
    }
    return `user ${u.expireAt.toISOString()}`;
}
const pin3 = { name: 'sohel' };
const pin4 = { name: 'saheb', contact: { email: "ben" } };
console.log(pin3.contact?.email);
// optional chaning
// ?? -> use the right hand default only when the left is null or undefined 
// || -> use the default when the left is falsy value
const countFromServerN3 = null;
const countFromServerN4 = "";
const an3 = countFromServerN3 ?? 10000;
const an4 = countFromServerN4 || 100;
// an3=10000;
console.log(an3);
console.log(an4);
