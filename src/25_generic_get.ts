type user7={
    id : string,
    name : string,
    email?:string
}

function getUser7 <T , k extends keyof T > (arr : T , key : k): T[k]{
    return arr[key];
}

const details: user7={id: "1", name:"s"}

console.log(getUser7(details , 'email'))

function setUser7 <T , k extends keyof T ,  > (arr : T , key : k , value: T[k]): void{
    arr[key] = value
}

  (setUser7(details , 'email' , "sbnammallick@gmail.com"));
console.log(getUser7(details , 'email'))


