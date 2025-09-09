//array is variable size

let arr = [1,2,3]

function printArr(arr:number[]){
    console.log(arr);
}

printArr(arr);


//tuple is fixed size 
function tuple(tpl:number[]){
    console.log(tpl)
    // console.log(tpl[0]);
    // console.log(tpl[1]);
    // console.log(tpl[2]);
}

let tp = tuple([21,31,7]);
console.log(tp)

//to fixed that we need only three fixed value of number then


function tuple1(tpl:[number,number,number]):[number,number,number]{
    console.log(tpl)
    return tp1;
    // console.log(tpl[0]);
    // console.log(tpl[1]);
    // console.log(tpl[2]);
}

//when assign a variable a tuple type like then it compulsary to must return a tuple matching the type   
const tp1:[number,number,number] = tuple1([21,31,7]);
console.log(tp1)