// interface => named shape for objects
interface user33{
    id: string,
    name : string,
    email?:string,
    readonly createdAt : Date
}

const hello : user33={
    id: '1',
    name:"sohel",
    createdAt: new Date(),
}

console.log(hello.createdAt.toLocaleDateString().substring(0,10));


interface admin33 extends user33{
    permission: string[]
}

const person : admin33={
    id: '1',
    name:"sohel",
    createdAt: new Date(),
    permission: ["edit","Delete"] 
}

console.log(person);
