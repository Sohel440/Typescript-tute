function solve<T> (n : T): T{
    return n;
}

// console.log(solve(89));
// console.log(solve("sohel"));


function funArr <T> (arr : T[]) : T | undefined {
    return arr[1];

}

// console.log(funArr([1,2,23,45]));
// console.log(funArr(["1","2","23","45"]));

function wrap<T> (value: T): Map<T , number>{
const mp = new Map<T, number>();
mp.set(value, 12);


    return mp;
}

const mpp = wrap (90);
// mpp.forEach((n,index)=>{
//     console.log(n, index);
// })

for(let [key , value] of mpp){
    console.log(key  , value);
}
// console.log(typeof wrap(89));
