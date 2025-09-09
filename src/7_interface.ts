type User ={
    name:string,
    age:number,
    courses:string[]
}

//for object we mostly use interface
//interface is like a contract that defines the structure of an object


interface UserI{
    name:string,
    age:number,
    courses:string[]
}

const user1: UserI = {
    name:"jack",
    age:29,
    courses:["Java","C++","Python"]
}

const user2: UserI= {
    name:"rk",
    age:28,
    courses:["Java","Python","JavaScript"]
}


console.log(user1)
console.log(user2)

// type user={
//     name:string,
//     age:number,
//     courses:string[]
// }

function printUser(user: UserI){
    console.log(user.name);
    console.log(user.age)
    console.log(user.courses)
} 

printUser(user1);