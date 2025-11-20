type inExample1 = {role :"inExample1", permission : string[]};
type inExample2 = {role :"inExample2", expireAt : Date};


type userExample = inExample1 | inExample2;
function decribe(u : userExample){
    if('permission' in u){
        return `Admin`
    }
    return `user ${u.expireAt.toISOString()}`
}

// avid runtime creashes

//nullish
// ?? and ||
type Profile ={
  name : string,
  contact ? : {email? : string}
}

const pin3: Profile = {name : 'sohel'};
const pin4:Profile = {name : 'saheb', contact:{email:"ben"}};

console.log(pin3.contact?.email)
// optional chaning


// ?? -> use the right hand default only when the left is null or undefined 
// || -> use the default when the left is falsy value

const countFromServerN3 : number | null=null;
const countFromServerN4 : string | undefined="";

const an3 = countFromServerN3 ??10000;
const an4 = countFromServerN4 || 100;
// an3=10000;
console.log(an3)
console.log(an4)
