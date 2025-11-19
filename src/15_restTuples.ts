function sumAllNumber  (...xs : number[]): number{
    return xs.reduce((s , n)=> s + n ,0);
};

console.log(sumAllNumber(1,2,3,3));

function add(x : number , y : number){
    console.log(x , y);
}
const point: [number , number] = [1,2];
add(...point);
