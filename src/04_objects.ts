type user ={
    id:string,
    name:string,
    roll? : number,
    readonly createAt : Date
}
const sohel : user = {
    id:"1",
    name: "sohel",
    roll : 34,
    createAt: new Date(),
};
console.log(sohel);

type count = {[k:string] : number};
type count1 = Record<"likes"|"views"|"shares"|"random",number>;


const c1 : count = {whaever : 1};
const c2 : count1 = {likes : 1 , views: 2, shares: 0, random:3};

console.log(c2);


