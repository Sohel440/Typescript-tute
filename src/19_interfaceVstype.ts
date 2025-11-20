// inter face is based for object shape that you expect to extend
// support declaration merging
// type -> more general
interface box {
    height:number
}
interface box {
    width:number
}
// type box1{
//     height:number
// }
// type box1 {
//     width:number
// }

const square : box= {
    height:10,
    width:10
}

