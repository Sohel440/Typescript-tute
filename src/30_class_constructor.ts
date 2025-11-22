class User15 {
    private id:string ;
    private name:string;
    email?:string;
    createdAt :Date = new Date()

    constructor(id : string , name : string , email?:string) {
        //assign 
        this.id=  id;
        this.name= name;
        if(email ) this.email = email
    }
}

const result4 = new User15("1","so")
const result5 = new User15("1","so")