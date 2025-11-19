const roles =["admin", "user", "operators"] as const;

type role= (typeof roles) [number]
// type r = "admin"| "Sohel";

function setRoles (r : role){
    console.log(r)
}

setRoles('admin');
