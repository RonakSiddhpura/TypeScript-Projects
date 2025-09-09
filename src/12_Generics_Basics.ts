function FirstElement<T>(arr:T[]){
    return arr[0];
}

const arr1 = [1,2,3,4];
console.log(FirstElement(arr1)); // Output: 1

const arr2 = ["apple", "banana", "cherry"];
console.log(FirstElement(arr2)); // Output: "apple"

const arr3 =[true, false,"Hello"];
console.log(FirstElement(arr3)); // Output: "true"


function map<Input,Output>(arr:Input[],fn:(arg:Input)=>Output){
    return arr.map(fn);
}

const arr4 =['1','2','3','4']
console.log(arr4); // Output: ['1', '2', '3', '4']
const r1 = map(arr4,(n)=>parseInt(n));
console.log(r1); // Output: [1, 2, 3, 4