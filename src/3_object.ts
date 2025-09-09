const user1={
    name:'rk',
    age:28,
    courses:["Java","C","C++"]
}

const user2={
    name:'tarun',
    age:26,
    courses:["Java","C++"]
}

console.log(user1)
console.log(user2)

// type user={
//     name:string,
//     age:number,
//     courses:string[]
// }

function printUser(user:{ name:string,age:number,courses:string[]}){
    console.log(user.name);
    console.log(user.age)
    console.log(user.courses)
} 

printUser(user1);