type NumberDict= {[k:string]:number};
const counter : NumberDict={
    ['like']:10,
    ['subscriber']:1000,
}

type Metrics = Record<'likes'| 'views'|'shares', number> // tight and safer
const mm : Metrics ={likes:1 , views:12,shares:1 };

const  mp  = new Map<number , string>();
mp.set(1, "one");
console.log(mp);
