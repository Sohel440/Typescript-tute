 type inter1 = {id: string };
 type inter2 = {createAt : Date};

 type Entity = inter1 & inter2; // type with intersection

 const e : Entity = {id: '1', createAt:new Date()};
//  console.log(e);
type t1 = {usename: string}
type t2 = {userEmail: string}

type option1 = t1 & t2;

const main : option1 ={
    usename: "Sohel",
    userEmail:"sohel@gmail.com",
}

console.log(main);

// type numberHolder = {a : number};
// type stringHolder = {a : string};

// type mix = numberHolder & stringHolder;


type Product = {id : string , title: string}
type Price = {price: number};
