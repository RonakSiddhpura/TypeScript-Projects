interface User{
    name:string,
    age:number,
    id:number
}

interface Admin{
    name:string,
}

//due to strict type checking we don't use any type
//keyof is a type operator that gets the keys of an object type as a union of string literals
//it helps to ensure that the key exists in the object type
//it is useful for creating functions that can work with any property of an object

// function logUserProperty(user:User | Admin,key: keyof User | keyof Admin){
//     console.log(user[key]);
// }
//above code will give error because User and Admin have different keys

//so we have to use generic type to make it work 
function logUserProperty<T extends User | Admin>(user:T,key: keyof T){
    console.log(user[key]);
}

const user1: User = {name:"RK", age:28, id:1};
logUserProperty(user1, "name");


const admin1 :Admin = {name:"Admin RK"};
logUserProperty(admin1,"name");