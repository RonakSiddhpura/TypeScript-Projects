interface User{
    name:string,
    age:number,
    id:number
}

//due to strict type checking we don't use any type
//keyof is a type operator that gets the keys of an object type as a union of string literals
//it helps to ensure that the key exists in the object type
//it is useful for creating functions that can work with any property of an object

function logUserProperty(user:User,key: keyof User){
    console.log(user[key]);
}

const user1: User = {name:"RK", age:28, id:1};
logUserProperty(user1, "name");