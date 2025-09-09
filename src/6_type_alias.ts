//type alias in TypeScript is just giving a nickname to a type so you can reuse it easily.

type addable = number | string | object

function add(arg1:addable ,arg2:addable){
    // return arg1+arg2; error here because their may be both parameter value of different types

    //typeo : checking type at run time 
    if(typeof arg1==='number' && typeof arg2==='number'){
        return arg1+arg2;
    }
    if(typeof arg1==='string' && typeof arg2==='string'){
        return arg1+arg2;
    }
    return;
 }

const a1="ronak"
const a2="sid"
const r1=add(a1,a2);


const b1=4
const b2=3
const r2=add(a1,a2);

// const r3 = add(a,undefined)
console.log(r1);
console.log(r2);
// console.log(r3);