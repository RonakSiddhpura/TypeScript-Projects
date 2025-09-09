//Enums are predefined sets of values with names, so you don’t have to remember numbers or strings all the time.

//enum is for small set of values 
enum PermissionLevel{
    Instructor='I',
    Admin='A',
    Student='S',
}

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
    permissionLevel: PermissionLevel.Instructor
}

const user2: UserExtended = {
    name:"rk",
    age:28,
    courses:["Java","Python","JavaScript"],
    permissionLevel: PermissionLevel.Admin
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