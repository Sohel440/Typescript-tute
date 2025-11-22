

class Bank{
    public owner :string

    private balance= 0;

    #otp = 12345
    constructor(owner : string) {
        this.owner= owner        
    }

    deposite(amt : number){
        if(amt <=0) throw new Error("amount must be positive");
        this.balance += amt;
    }

    getBalance (){
        return this.balance;
    }
    verify(code : number){
        return this.#otp === code;
    }
}

const acc = new Bank('Sohel');
acc.deposite(6000);
console.log(acc.getBalance());


