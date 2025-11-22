"use strict";
class User15 {
    id;
    name;
    email;
    createdAt = new Date();
    constructor(id, name, email) {
        //assign 
        this.id = id;
        this.name = name;
        if (email)
            this.email = email;
    }
}
const result4 = new User15("1", "so");
const result5 = new User15("1", "so");
