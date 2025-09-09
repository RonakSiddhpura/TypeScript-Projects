//any:- should be used to stop type checking

function foo(arg:any){
    if(arg){
        console.log(arg)
    }else{
        console.log(arg)
    }

}
//undefined:- it like a default value or indicate the initial state
let a : number | undefined=undefined;
foo(a);