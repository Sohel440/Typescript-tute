
const ys: readonly number[] = [1,2,3];
const yss :ReadonlyArray<number>   = [1,2,3];
// ys.push(12) only for read

const nums : Array<number> = [1,2,3,4,5,6];
let arr : Array<number> = nums.slice(1,3);
console.log(arr);
console.log("hello");

console.log(yss.map(n=> n*2));