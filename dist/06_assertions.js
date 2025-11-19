"use strict";
const raw = '{"id": 1 ,"name":67}';
const riskyUser = JSON.parse(raw);
console.log(riskyUser.name);
function isUser(v) {
    return (typeof v === "object" && v != null && "id" in v &&
        typeof v.id === 'number' && 'name' in v &&
        typeof v.name === 'string');
}
const maybe = JSON.parse(raw);
if (isUser(maybe)) {
    console.log(maybe.name);
}
else {
    console.log("wrong format data");
}
