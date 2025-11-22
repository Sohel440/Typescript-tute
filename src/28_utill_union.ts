type EventType1 = "click"|"submit"|"hover";
type eventTyoe2 = Exclude<EventType1, "keydown">;

function handleEvent (e : eventTyoe2)
{
    console.log(e)
}
handleEvent('hover')
type actionType1= "create"|"update"|"delete";
type actionType2 =  Exclude<actionType1, "create"|"delete">;
// type eventTyoe2 =

function handleEvent1 (e : actionType2)
{
    console.log(e)
}

handleEvent1('update')


type mayBeNumber = number | null | undefined;
type CleanNumber = NonNullable<mayBeNumber>

function square1(n: CleanNumber){
    return n ** 2;
};

console.log(square1(4));
console.log(square1(3));


type A = Awaited<Promise<number>>; 
// A = number
type B = Awaited<Promise<string>>;
// B = string
type C = Awaited<Promise<Promise<boolean>>>;
// C = boolean



async function getUser() {
  return { id: 1, name: "Sohel" };
}

type Async_User = Awaited<ReturnType<typeof getUser>>;
// User = { id: number; name: string; }

console.log(getUser());



