// goal understand to let typecript infer types

let val = 1;
// console.log(val);
const site = "payCart";
// console.log(site);
const arr = [1,3,4,5];


//over annonations

export function add (a:number ,b:number): number{
    return a+b;
}

console.log(add(2,3));


let maybe : string | number;
maybe = Math.random()>0.5 ? "Test":100;
console.log(maybe);
