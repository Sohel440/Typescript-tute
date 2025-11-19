type direction = "left" | "right"|"up";

function move(d : direction):void{
    console.log(d);
}

const d1 = "left";
move(d1);

// let d2 = "right";
// move(d2); ts not allow
let d2 : direction = "right";

move(d2);

