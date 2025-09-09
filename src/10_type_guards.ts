//In typescript Type Guards means checking against the vaule returned by typeof

function printAll(arg:string | string[]){
    if(typeof arg === 'object'){
        arg.forEach((value)=>console.log(value));
    }if(typeof arg === 'string'){
        console.log(arg);
    }
}

printAll("ronak");
printAll(["ronak","shubh","tarun"]);

let v : number | undefined = undefined;
console.log(v); //undefined