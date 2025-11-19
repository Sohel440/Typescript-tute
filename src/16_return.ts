
// inference 
const doubleFunc =(n : number )=> n * 2;


// explicit return for exported
export function toTitle (s : string): string{
    return `Hello ${s}`;
}

function boolenNumber(n : boolean) : number{
    if(n){
        return 1;
    }

    return 0;
}

async function solve () {
    return 42;
}
// solve(10);
(solve().then(n=> console.log(n)))