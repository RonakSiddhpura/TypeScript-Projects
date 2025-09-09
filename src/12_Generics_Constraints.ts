//Extends : -Constraints can be added to generics to limit what's allowed.The constraints make it possible to rely on a more specific type when using the generic type.
interface UserLists{
    users:string[];
    length:number;
}

interface isSized{
    length:number;
}


function lengthComparison <T extends isSized> (arg1:T,arg2:T){
    if(arg1.length>arg2.length){
        return arg1;
    }
    return arg2;
}

const arr1 :UserLists = {users : ["ronak","shubh"],length:2};
const arr2 :UserLists = {users : ["ronak","shubh","tarun",],length:3};

console.log(lengthComparison(arr1,arr2));