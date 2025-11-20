// <T> --->  constraint ceritain shape allow 
// key constraint 

// This tells TypeScript:
// “I will accept any type T, but only if it has a length property of type number.”
function len4 <T extends {length:number}> (xn : T):number{
    return xn.length;

}
console.log(len4("hello"))
console.log(len4([1,2,3,4]))
console.log(len4({length:13 , tag : 'ok'}))



type user6 = {id : number , name : string , age?: number};

// k extends keyof T
// Means:
// You can only choose a key that actually exists in the object.
function lenN4 <T , k extends keyof T> (xn: T[], key: k): Array<T[k]>{
    return xn.map(item=>item[key])
}

const TTT : user6[] =[
    { id: 10, name : "sohel", age : 22},
    { id: 11, name : "Mollick",}
]

console.log(lenN4(TTT, 'age'));



