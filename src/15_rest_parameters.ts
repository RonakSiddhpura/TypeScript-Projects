//Takes exactly one parameter — an array of numbers.
//You must pass an array:
function arrSum(arr:number[]){
    return arr.reduce((acc,curr)=>acc+curr,0);
}

const a1 = [1,2,3,4];
console.log(arrSum(a1)); // Output: 10

function Sum2(a:number,b:number){
    return a+b;
}

console.log(Sum2(10,5)); // Output: 1

//suppose we want the more than 2 parameters in the future then we can use rest parameters
// Rest parameters allow a function to accept an indefinite number of arguments as an array.


//Uses rest parameters — can take any number of arguments, each a number.
//You must pass them individually


function Sum3(...args:number[]){
    return args.reduce((acc,curr)=>acc+curr,0);
}

console.log(Sum3(10,5,15,20)); // Output: 50
