class Temp{
    #c  =0 ;
    constructor(c: number){
        this.celsious = c
    }

    get cel() : number{
        return this.#c
    }
    set celsious(value : number){
        this.#c = value
    }
    get ferhenhite() : number{
        return (this.#c * 9)/5 + 32;
    }
}

const t = new Temp(20);

console.log(t.cel)

t.celsious= 24;
console.log(t.cel);

