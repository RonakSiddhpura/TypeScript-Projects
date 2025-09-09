//Intersection types is like combining multiple types into one.


type User={
    name:string,
    age:number,
    courses:string[]
}

type Permission= {
    permissionLevel: string; 
}

type UserExtended = User & Permission;

const user1: UserExtended = {
    name:"jack",
    age:29,
    courses:["Java","C++","Python"],
    permissionLevel: "user"
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

function printUser(user: UserExtended){
    console.log(user.name);
    console.log(user.age)
    console.log(user.courses)
    if("permissionLevel" in user) {
        console.log(`Permission Level:${user.permissionLevel}`);
    }
} 

printUser(user1);
printUser(user2);