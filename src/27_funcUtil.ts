function ExtractUserInfo (id:string , isRxtraInfo=false){
    return {
        id,
        name:"sohel",
        log:isRxtraInfo?"details":(undefined  as string| undefined)

    }
}

type GetUserReturnInfo = ReturnType< typeof ExtractUserInfo>
type GetUserParamsInfo = Parameters< typeof ExtractUserInfo>

const argsInfo : GetUserParamsInfo = ['u1',true];
const resturnTypeInfo : GetUserReturnInfo = ExtractUserInfo(...argsInfo);
console.log(resturnTypeInfo)


class PersonN1{
    constructor (public name : string ,public  age : number){}

    greet(){
        return `I am this ${this.name}`
    }
}

type PersonInstanceN1 = InstanceType< typeof PersonN1>
type PersonCtorArgs1 = ConstructorParameters <typeof PersonN1>;

const resultInfo1 : PersonCtorArgs1 = ["sohel",22];
const abc : PersonInstanceN1 = new PersonN1(...resultInfo1);
console.log(abc.greet())

