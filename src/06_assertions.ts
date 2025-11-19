const raw = '{"id": 1 ,"name":67}';
const riskyUser  = JSON.parse(raw) as {id: number ; name : string};
console.log(riskyUser.name);

type user22 = {id : number , name : string};
function isUser(v: unknown): v is user22{
    return(
        typeof v === "object" && v != null && "id" in v &&
        typeof (v as any).id === 'number' && 'name' in v &&
        typeof (v as any).name ==='string'
    )
}

const maybe = JSON.parse(raw) as unknown;

if(isUser(maybe)){
    console.log(maybe.name);
}else {
    console.log("wrong format data")
}

