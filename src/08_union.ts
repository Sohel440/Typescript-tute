function printId (id: string|number){
    if(typeof id === 'string'){
        console.log(id.toLocaleUpperCase());
    }else{
        console.log(id.toFixed());
    }
}

type admin ={role: 'admin', permission: string[]};
type customer ={role: 'Customer', loyaltyPoints:number};

function describeUser(u: admin | customer){
    if(u.role === 'admin'){
        console.log(u.role, 'admin user');
    }else{
        console.log(u.loyaltyPoints);
    }
}

const arrOfunion  : (string| number)[] = ["a",1,"b",2];
const unionOfArrays : string[] | number[] = Math.random()> 0.1 ? ["a","b"]: [1,2,33];