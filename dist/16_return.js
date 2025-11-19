// inference 
const doubleFunc = (n) => n * 2;
// explicit return for exported
export function toTitle(s) {
    return `Hello ${s}`;
}
function boolenNumber(n) {
    if (n) {
        return 1;
    }
    return 0;
}
async function solve() {
    return 42;
}
// solve(10);
(solve().then(n => console.log(n)));
