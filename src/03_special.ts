let title : string| undefined = "Sohel440";

function print(msg : string): void{
    console.log(msg);
}
function yearToday(year : number): number{
   // console.log(msg);
    return year * 365;

}

function fail (msg: string):never{
    throw new Error(msg);
}

//do not use any - > try to ignore as much as possible

const value : any = JSON.parse('{"x": 1}')
console.log(value);

// fail('Compele your project fast sohel...');

