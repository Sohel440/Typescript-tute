// 1. Partial<T>
type User = {id : number , name : string ,age : number};
type userUpdate =   Partial<User>;
// { id?: number; name?: string; age?: number }
const ll : userUpdate={id:12}


// 2. Required<T>

type requiredStre = Required<User>;
// const required1  : requiredStre = {id:1};
// { x: number; y: string }


// ll.age = 24;
// console.log(ll);


// 4. Readonly<K, T>
// Creates a type with keys K and values T.


type readOnly = Readonly<User>
const rr : readOnly={id:12 , name :"saheb",age :24};
// rr.age =90;




// 4. Record<K, T>
// Creates a type with keys K and values T.

type Scores = Record<"math" | "science", number>;
// { math: number; science: number }


// 5. Pick<T, K>
type UserPreview = Pick<User, "id" | "name">;
// const pic : UserPreview = {id: 10, name : "sohel", age:22} // error not pick age 

// 6. Omit<T, K>

type UserWithoutName = Omit<User, "name">;

const pic : UserWithoutName = {id: 10, age:22} // error not pick age 
