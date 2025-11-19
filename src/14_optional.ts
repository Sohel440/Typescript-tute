function greetPersonOption( name ? : string): string{
    const upper : string = name  ? name?.toUpperCase(): "Guest";
    return `hello ${upper}`;
};

console.log(greetPersonOption("sohel"));
console.log(greetPersonOption());
// console.log();

function greet (name : string = "Guest"): string{
    return `Hello ${name.toLocaleUpperCase()}.`
}

function gg (name : string , roll? :number , year? : number){
    console.log(name ,roll , year );
}
   
gg("sohel")


console.log(greet());
console.log(greet("Mollick"));
