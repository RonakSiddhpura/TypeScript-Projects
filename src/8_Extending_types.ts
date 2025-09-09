//for object we mostly use interface
//interface is like a contract that defines the structure of an object


interface UserI{
    name:string,
    age:number,
    courses:string[]
}

interface UserExtended extends UserI {
    permissionLevel: string; 
}

const user1: UserI = {
    name:"jack",
    age:29,
    courses:["Java","C++","Python"]
}

const user2: UserExtended = {
    name:"rk",
    age:28,
    courses:["Java","Python","JavaScript"],
    permissionLevel: "admin"
}


// console.log(user1)
// console.log(user2)

// type user={
//     name:string,
//     age:number,
//     courses:string[]
// }

function printUser(user: UserExtended | UserI){
    console.log(user.name);
    console.log(user.age)
    console.log(user.courses)
    if("permissionLevel" in user) {
        console.log(`Permission Level:${user.permissionLevel}`);
    }
} 

printUser(user1);
printUser(user2);